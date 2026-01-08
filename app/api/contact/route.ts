import { NextResponse } from "next/server";
import type { ContactFormData } from "@/lib/types";
import { validateEmailField, validateRequired, ValidationException } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { 
          success: false,
          error: "Invalid request body. Please ensure all fields are properly filled.",
          details: [{ field: "body", message: "Request body must be valid JSON" }]
        },
        { status: 400 }
      );
    }

    // Accept both field name variations for compatibility
    // Normalize empty strings to undefined
    const normalize = (value: any) => (value && typeof value === 'string' && value.trim() !== '') ? value.trim() : undefined;
    
    const companyName = normalize(body.companyName || body.company);
    const name = normalize(body.name);
    const email = normalize(body.email);
    const phone = normalize(body.phone);
    const title = normalize(body.title);
    const subject = normalize(body.subject || body.serviceInterest) || "General Inquiry";
    const message = normalize(body.message);
    const serviceInterest = normalize(body.serviceInterest);
    const companyStage = normalize(body.companyStage);
    const preferredContact = normalize(body.preferredContact);
    const hearAboutUs = normalize(body.hearAboutUs);

    // Validate required fields
    const errors = [
      validateRequired(name, "name"),
      validateEmailField(email),
      validateRequired(message, "message"),
    ].filter(Boolean);

    if (errors.length > 0) {
      throw new ValidationException(errors as any[]);
    }

    // After validation, required fields are guaranteed to be strings
    // Prepare form data for GHL
    const formData: ContactFormData = {
      name: name!,
      email: email!,
      company: companyName || undefined,
      phone: phone || undefined,
      subject: subject!,
      message: message!,
      // Include additional fields for future use
      title: title || undefined,
      serviceInterest: serviceInterest || undefined,
      companyStage: companyStage || undefined,
      preferredContact: preferredContact || undefined,
      hearAboutUs: hearAboutUs || undefined,
    };

    // Submit to GoHighLevel
    const { getGHLClient } = await import("@/lib/ghl");
    const ghlClient = getGHLClient();
    const ghlResult = await ghlClient.submitContact(formData);
    
    if (!ghlResult.success) {
      console.error('GHL submission failed:', ghlResult.error);
      // Don't fail the whole request if GHL submission fails
      // Just log the error and continue
    } else {
      console.log("✅ Contact form submitted to GHL successfully");
    }

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
