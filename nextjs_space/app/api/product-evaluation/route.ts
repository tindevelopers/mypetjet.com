import { NextResponse } from "next/server";
import type { ProductEvaluationFormData } from "@/lib/types";
import { validateEmailField, validateRequired, ValidationException } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      company,
      name,
      email,
      phone,
      productName,
      productCategory,
      evaluationStage,
      message,
    } = body ?? {};

    // Validate required fields
    const errors = [
      validateRequired(company, "company"),
      validateRequired(name, "name"),
      validateEmailField(email),
      validateRequired(productName, "productName"),
      validateRequired(productCategory, "productCategory"),
      validateRequired(evaluationStage, "evaluationStage"),
      validateRequired(message, "message"),
    ].filter(Boolean);

    if (errors.length > 0) {
      throw new ValidationException(errors as any[]);
    }

    // Prepare form data for GHL
    const formData: ProductEvaluationFormData = {
      company,
      name,
      email,
      phone: phone || undefined,
      productName,
      productCategory,
      evaluationStage,
      message,
    };

    // Submit to GoHighLevel
    const { getGHLClient } = await import("@/lib/ghl");
    const ghlClient = getGHLClient();
    const result = await ghlClient.submitProductEvaluation(formData);
    
    if (!result.success) {
      console.error('Failed to submit to GHL:', result.error);
      // Don't fail the whole request if GHL submission fails
      // Just log the error and continue
    }

    return NextResponse.json(
      {
        success: true,
        message: "Product evaluation request received! Our team will review and contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Product evaluation error:", error);
    
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
        error: "Failed to submit product evaluation request. Please try again." 
      },
      { status: 500 }
    );
  }
}
