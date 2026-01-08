import { NextResponse } from "next/server";
import type { JoeyBookingFormData } from "@/lib/types";
import { validateEmailField, validateRequired, validatePhoneField, ValidationException } from "@/lib/validation";

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
    
    const name = normalize(body.name);
    const company = normalize(body.company || body.organization);
    const email = normalize(body.email);
    const phone = normalize(body.phone);
    const serviceType = normalize(body.serviceType || body.eventType);
    const eventDate = normalize(body.eventDate);
    const message = normalize(body.message);

    // Validate required fields
    const errors = [
      validateRequired(name, "name"),
      validateEmailField(email),
      validatePhoneField(phone, "phone", true), // Phone required for Joey bookings
      validateRequired(serviceType, "serviceType"),
      validateRequired(message, "message"),
    ].filter(Boolean);

    if (errors.length > 0) {
      throw new ValidationException(errors as any[]);
    }

    // After validation, required fields are guaranteed to be strings
    // Prepare form data for GHL
    const formData: JoeyBookingFormData = {
      name: name!,
      company: company || undefined,
      email: email!,
      phone: phone!,
      serviceType: serviceType!,
      eventDate: eventDate || undefined,
      message: message!,
    };

    // Submit to GoHighLevel
    const { getGHLClient } = await import("@/lib/ghl");
    const ghlClient = getGHLClient();
    const ghlResult = await ghlClient.submitJoeyBooking(formData);
    
    if (!ghlResult.success) {
      console.error('GHL submission failed:', ghlResult.error);
      // Don't fail the whole request if GHL submission fails
      // Just log the error and continue
    } else {
      console.log("✅ Joey booking request submitted to GHL successfully");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received! Joey's team will contact you shortly to discuss details.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Joey booking error:", error);
    
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
        error: "Failed to submit booking request. Please try again." 
      },
      { status: 500 }
    );
  }
}
