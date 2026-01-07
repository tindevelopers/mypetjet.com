import { NextResponse } from "next/server";
import type { JoeyBookingFormData } from "@/lib/types";
import { validateEmailField, validateRequired, validatePhoneField, ValidationException } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      serviceType,
      eventDate,
      message,
    } = body ?? {};

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
