import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      organization,
      email,
      phone,
      eventType,
      eventDate,
      eventLocation,
      audienceSize,
      budgetRange,
      message,
    } = body ?? {};

    // Validate required fields
    if (!name || !email || !eventType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Joey booking request
    const booking = await prisma.joeyBooking.create({
      data: {
        name,
        organization: organization || null,
        email,
        phone: phone || null,
        eventType,
        eventDate: eventDate || null,
        eventLocation: eventLocation || null,
        audienceSize: audienceSize || null,
        budgetRange: budgetRange || null,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Joey Villani booking request submitted successfully",
        id: booking.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Joey booking error:", error);
    return NextResponse.json(
      { error: "Failed to submit Joey Villani booking request" },
      { status: 500 }
    );
  }
}
