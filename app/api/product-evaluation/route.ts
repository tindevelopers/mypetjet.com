import { NextResponse } from "next/server";
import type { ProductEvaluationFormData } from "@/lib/types";
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
    
    const company = normalize(body.company || body.companyName);
    const name = normalize(body.name);
    const email = normalize(body.email);
    const phone = normalize(body.phone);
    const productName = normalize(body.productName);
    const productCategory = normalize(body.productCategory);
    const evaluationStage = normalize(body.evaluationStage);
    const message = normalize(body.message);

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

    // TODO: Phase 2 - Submit to GoHighLevel
    // const ghlClient = getGHLClient();
    // const result = await ghlClient.submitProductEvaluation(formData);
    // 
    // if (!result.success) {
    //   throw new Error('Failed to submit to GHL');
    // }

    console.log("Product evaluation request received (will be sent to GHL in Phase 2):", formData);

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
