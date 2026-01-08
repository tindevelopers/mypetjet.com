import { NextResponse } from "next/server";
import type { ContactFormData } from "@/lib/types";
import { validateEmailField, validateRequired, ValidationException } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Accept both field name variations for compatibility
    const companyName = body.companyName || body.company;
    const name = body.name;
    const email = body.email;
    const phone = body.phone;
    const title = body.title;
    const subject = body.subject || body.serviceInterest || "General Inquiry";
    const message = body.message;
    const serviceInterest = body.serviceInterest;
    const companyStage = body.companyStage;
    const preferredContact = body.preferredContact;
    const hearAboutUs = body.hearAboutUs;

    // Validate required fields
    const errors = [
      validateRequired(name, "name"),
      validateEmailField(email),
      validateRequired(message, "message"),
    ].filter(Boolean);

    if (errors.length > 0) {
      throw new ValidationException(errors as any[]);
    }

    // Prepare form data for GHL
    const formData: ContactFormData = {
      name,
      email,
      company: companyName || undefined,
      phone: phone || undefined,
      subject,
      message,
      // Include additional fields for future use
      title: title || undefined,
      serviceInterest: serviceInterest || undefined,
      companyStage: companyStage || undefined,
      preferredContact: preferredContact || undefined,
      hearAboutUs: hearAboutUs || undefined,
    };

    // TODO: Phase 2 - Submit to GoHighLevel
    // const ghlClient = getGHLClient();
    // const result = await ghlClient.submitContact(formData);
    // 
    // if (!result.success) {
    //   throw new Error('Failed to submit to GHL');
    // }

    console.log("Contact form received (will be sent to GHL in Phase 2):", formData);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof ValidationException) {
      return NextResponse.json(
        { 
          success: false,
          error: "Validation failed",
          details: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: "Failed to submit contact form. Please try again." 
      },
      { status: 500 }
    );
  }
}
