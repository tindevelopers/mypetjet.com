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

    // Prepare form data for GHL
    const formData: JoeyBookingFormData = {
      name,
      company: company || undefined,
      email,
      phone,
      serviceType,
      eventDate: eventDate || undefined,
      message,
    };

    // TODO: Phase 2 - Submit to GoHighLevel
    // const ghlClient = getGHLClient();
    // const result = await ghlClient.submitJoeyBooking(formData);
    // 
    // if (!result.success) {
    //   throw new Error('Failed to submit to GHL');
    // }

    console.log("Joey booking request received (will be sent to GHL in Phase 2):", formData);

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
