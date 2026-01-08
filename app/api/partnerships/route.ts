import { NextResponse } from "next/server";
import type { PartnershipFormData } from "@/lib/types";
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
    const partnershipInterest = normalize(body.partnershipInterest || body.partnershipType);
    const message = normalize(body.message);

    // Validate required fields
    const errors = [
      validateRequired(companyName, "company"),
      validateRequired(name, "name"),
      validateEmailField(email),
      validateRequired(partnershipInterest, "partnershipType"),
      validateRequired(message, "message"),
    ].filter(Boolean);

    if (errors.length > 0) {
      throw new ValidationException(errors as any[]);
    }

    // After validation, required fields are guaranteed to be strings
    // Prepare form data for GHL
    const formData: PartnershipFormData = {
      company: companyName!,
      name: name!,
      email: email!,
      phone: phone || undefined,
      partnershipType: partnershipInterest!,
      message: message!,
    };

    // Submit to GoHighLevel
    const { getGHLClient } = await import("@/lib/ghl");
    const ghlClient = getGHLClient();
    const ghlResult = await ghlClient.submitPartnership(formData);
    
    if (!ghlResult.success) {
      console.error('GHL submission failed:', ghlResult.error);
      // Don't fail the whole request if GHL submission fails
      // Just log the error and continue
    } else {
      console.log("✅ Partnership application submitted to GHL successfully");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Partnership application received successfully. We'll be in touch soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Partnership application error:", error);
    
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
        error: "Failed to submit partnership application. Please try again." 
      },
      { status: 500 }
    );
  }
}
