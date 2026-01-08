import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'NOT SET',
    NEXT_PUBLIC_STRAPI_API_TOKEN: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ? 'SET (length: ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN.length + ')' : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV
  });
}
