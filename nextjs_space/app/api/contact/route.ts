import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      name,
      title,
      email,
      phone,
      serviceInterest,
      companyStage,
      message,
      preferredContact,
      hearAboutUs,
    } = body ?? {};

    // Validate required fields
    if (!companyName || !name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        companyName,
        name,
        title: title || null,
        email,
        phone: phone || null,
        serviceInterest: serviceInterest || null,
        companyStage: companyStage || null,
        message,
        preferredContact: preferredContact || null,
        hearAboutUs: hearAboutUs || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: submission.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
