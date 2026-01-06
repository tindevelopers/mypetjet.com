import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, name, email, phone, partnershipInterest, message } = body ?? {};

    // Validate required fields
    if (!companyName || !name || !email || !partnershipInterest || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create partnership application
    const application = await prisma.partnershipApplication.create({
      data: {
        companyName,
        name,
        email,
        phone: phone || null,
        partnershipInterest,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Partnership application submitted successfully",
        id: application.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Partnership application error:", error);
    return NextResponse.json(
      { error: "Failed to submit partnership application" },
      { status: 500 }
    );
  }
}
