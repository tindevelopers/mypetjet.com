import { NextResponse } from "next/server";
import type { ContactFormData } from "@/lib/types";
import { validateEmailField, validateRequired, ValidationException } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      company: companyName,
      name,
      email,
      phone,
      subject,
      message,
    } = body ?? {};

    // Validate required fields
    const errors = [
      validateRequired(name, "name"),
      validateEmailField(email),
      validateRequired(subject, "subject"),
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
