import { NextResponse } from "next/server";
import type { PartnershipFormData } from "@pet-jet/types";
import { validateEmailField, validateRequired, ValidationException } from "@pet-jet/api-client";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company: companyName, name, email, phone, partnershipType: partnershipInterest, message } = body ?? {};

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

    // Prepare form data for GHL
    const formData: PartnershipFormData = {
      company: companyName,
      name,
      email,
      phone: phone || undefined,
      partnershipType: partnershipInterest,
      message,
    };

    // TODO: Phase 2 - Submit to GoHighLevel
    // const ghlClient = getGHLClient();
    // const result = await ghlClient.submitPartnership(formData);
    // 
    // if (!result.success) {
    //   throw new Error('Failed to submit to GHL');
    // }

    console.log("Partnership application received (will be sent to GHL in Phase 2):", formData);

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
