import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { verifyWebhookSignature } from "@hygraph/utils";
 
export async function POST(request: Request) {
  const body = await request.json();
  const signature = request.headers.get("gcms-signature") ?? "";
  const secret = process.env.WEBHOOK_SECRET ?? "";

  const isValid = verifyWebhookSignature({
    body,
    signature,
    secret
  });

  if(isValid) {
    const tag = body.data["__typename"];

    revalidateTag(tag);
    return NextResponse.json({ 
      revalidated: true,
      tag
    });
  }
  
  return NextResponse.json(
    { 
      revalidated: false
    }
  );
}