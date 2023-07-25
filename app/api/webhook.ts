import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { verifyWebhookSignature } from "@hygraph/utils";
 
export async function POST(request: Request) {
  const headersList = headers();
  const signature = headersList.get("gcms-signature");

  const isValid = verifyWebhookSignature({
    body: request.body,
    signature: signature ?? "",
    secret: process.env.WEBHOOK_SECRET ?? "",
  });

  if(isValid) {
    revalidatePath("/noticias");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  };
  
  return NextResponse.json({ revalidated: false, now: Date.now() });
};