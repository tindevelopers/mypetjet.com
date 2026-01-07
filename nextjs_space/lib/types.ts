// Form submission types
export interface PartnershipFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  partnershipType: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ProductEvaluationFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  productName: string;
  productCategory: string;
  evaluationStage: string;
  message: string;
}

export interface JoeyBookingFormData {
  name: string;
  email: string;
  company?: string;
  phone: string;
  serviceType: string;
  eventDate?: string;
  message: string;
}

// GoHighLevel API types (for future integration)
export interface GHLContact {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  companyName?: string;
  tags?: string[];
  customFields?: Record<string, string>;
}

export interface GHLOpportunity {
  name: string;
  pipelineId: string;
  pipelineStageId: string;
  status: string;
  monetaryValue?: number;
  contactId: string;
}

export interface GHLAPIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}