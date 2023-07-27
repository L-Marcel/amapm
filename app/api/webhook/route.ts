import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { revalidatePath, revalidateTag } from 'next/cache';
import { verifyWebhookSignature } from "@hygraph/utils";
 
export async function POST(request: Request) {
  const body = await request.json();
  const signature = request.headers.get('gcms-signature') ?? "";
  const secret = process.env.WEBHOOK_SECRET ?? "";

  const isValid = verifyWebhookSignature({
    body,
    signature,
    secret
  });

  if(isValid) {
    revalidateTag("hygraph");
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now() 
    });
  };
  
  return NextResponse.json(
    { 
      revalidated: false, 
      now: Date.now() 
    }, {
      status: 403
    }
  );
};