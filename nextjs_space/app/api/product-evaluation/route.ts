import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      contactName,
      email,
      phone,
      productName,
      productCategory,
      evaluationType,
      productDescription,
      specificQuestions,
      timeline,
    } = body ?? {};

    // Validate required fields
    if (
      !companyName ||
      !contactName ||
      !email ||
      !productName ||
      !productCategory ||
      !evaluationType ||
      !productDescription
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create product evaluation request
    const evaluation = await prisma.productEvaluation.create({
      data: {
        companyName,
        contactName,
        email,
        phone: phone || null,
        productName,
        productCategory,
        evaluationType,
        productDescription,
        specificQuestions: specificQuestions || null,
        timeline: timeline || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product evaluation request submitted successfully",
        id: evaluation.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Product evaluation error:", error);
    return NextResponse.json(
      { error: "Failed to submit product evaluation request" },
      { status: 500 }
    );
  }
}
