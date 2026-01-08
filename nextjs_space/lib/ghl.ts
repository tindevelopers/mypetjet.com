import type {
  PartnershipFormData,
  ContactFormData,
  ProductEvaluationFormData,
  JoeyBookingFormData,
  GHLContact,
  GHLOpportunity,
  GHLAPIResponse,
} from './types';

/**
 * GoHighLevel API Client
 * Handles form submissions and contact management in GHL CRM
 */
export class GHLClient {
  private apiKey: string;
  private locationId: string;
  private baseUrl: string = 'https://services.leadconnectorhq.com';

  constructor(apiKey: string, locationId: string) {
    this.apiKey = apiKey;
    this.locationId = locationId;
  }

  /**
   * Split name into first and last name
   */
  private splitName(fullName: string): { firstName: string; lastName?: string } {
    const parts = fullName.trim().split(' ');
    const firstName = parts[0];
    const lastName = parts.length > 1 ? parts.slice(1).join(' ') : undefined;
    return { firstName, lastName };
  }

  /**
   * Submit partnership application to GHL
   */
  async submitPartnership(data: PartnershipFormData): Promise<GHLAPIResponse<GHLContact>> {
    try {
      const { firstName, lastName } = this.splitName(data.name);
      
      const contact: GHLContact = {
        email: data.email,
        firstName,
        lastName,
        phone: data.phone,
        companyName: data.company,
        tags: ['Partnership', `Partnership Type: ${data.partnershipType}`],
        customFields: {
          partnership_type: data.partnershipType,
          partnership_message: data.message,
          form_source: 'Partnership Application',
        },
      };

      return await this.createOrUpdateContact(contact);
    } catch (error) {
      console.error('GHL Partnership submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit to GHL',
      };
    }
  }

  /**
   * Submit contact form to GHL
   */
  async submitContact(data: ContactFormData): Promise<GHLAPIResponse<GHLContact>> {
    try {
      const { firstName, lastName } = this.splitName(data.name);
      
      const contact: GHLContact = {
        email: data.email,
        firstName,
        lastName,
        phone: data.phone,
        companyName: data.company,
        tags: ['Contact Form', `Subject: ${data.subject}`],
        customFields: {
          contact_subject: data.subject,
          contact_message: data.message,
          form_source: 'Contact Form',
        },
      };

      return await this.createOrUpdateContact(contact);
    } catch (error) {
      console.error('GHL Contact submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit to GHL',
      };
    }
  }

  /**
   * Submit product evaluation request to GHL
   */
  async submitProductEvaluation(
    data: ProductEvaluationFormData
  ): Promise<GHLAPIResponse<GHLContact>> {
    try {
      const { firstName, lastName } = this.splitName(data.name);
      
      const contact: GHLContact = {
        email: data.email,
        firstName,
        lastName,
        phone: data.phone,
        companyName: data.company,
        tags: [
          'Product Evaluation',
          `Product: ${data.productName}`,
          `Category: ${data.productCategory}`,
        ],
        customFields: {
          product_name: data.productName,
          product_category: data.productCategory,
          evaluation_stage: data.evaluationStage,
          evaluation_message: data.message,
          form_source: 'Product Evaluation',
        },
      };

      return await this.createOrUpdateContact(contact);
    } catch (error) {
      console.error('GHL Product Evaluation submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit to GHL',
      };
    }
  }

  /**
   * Submit Joey booking request to GHL
   */
  async submitJoeyBooking(data: JoeyBookingFormData): Promise<GHLAPIResponse<GHLContact>> {
    try {
      const { firstName, lastName } = this.splitName(data.name);
      
      const contact: GHLContact = {
        email: data.email,
        firstName,
        lastName,
        phone: data.phone,
        companyName: data.company,
        tags: ['Joey Booking', `Service: ${data.serviceType}`],
        customFields: {
          booking_service_type: data.serviceType,
          booking_event_date: data.eventDate || '',
          booking_message: data.message,
          form_source: 'Joey Booking',
        },
      };

      return await this.createOrUpdateContact(contact);
    } catch (error) {
      console.error('GHL Joey Booking submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit to GHL',
      };
    }
  }

  /**
   * Create or update a contact in GHL
   */
  private async createOrUpdateContact(contact: GHLContact): Promise<GHLAPIResponse<GHLContact>> {
    try {
      // Prepare the request body with only supported fields
      const requestBody: Record<string, any> = {
        locationId: this.locationId,
        email: contact.email,
        firstName: contact.firstName,
        tags: contact.tags || [],
      };

      // Add optional fields only if they exist
      if (contact.lastName) requestBody.lastName = contact.lastName;
      if (contact.phone) requestBody.phone = contact.phone;
      if (contact.companyName) requestBody.companyName = contact.companyName;

      // Add custom fields as a note/source since customFields might not be supported
      // in the basic contact creation endpoint
      if (contact.customFields) {
        const customFieldsNote = Object.entries(contact.customFields)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n');
        requestBody.source = customFieldsNote.substring(0, 200); // Limit length
      }

      const response = await fetch(`${this.baseUrl}/contacts/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `GHL API error: ${response.status} ${response.statusText}. ${
            errorData.message || JSON.stringify(errorData)
          }`
        );
      }

      const data = await response.json();
      
      console.log('✅ Successfully submitted to GHL:', {
        email: contact.email,
        tags: contact.tags,
        contactId: data.contact?.id,
      });

      return {
        success: true,
        data: contact,
      };
    } catch (error) {
      console.error('GHL API error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Create an opportunity/deal in GHL
   * (Optional: for future use if you want to create deals/pipelines)
   */
  private async createOpportunity(
    opportunity: GHLOpportunity
  ): Promise<GHLAPIResponse<GHLOpportunity>> {
    try {
      const response = await fetch(`${this.baseUrl}/opportunities/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify({
          locationId: this.locationId,
          ...opportunity,
        }),
      });

      if (!response.ok) {
        throw new Error(`GHL API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        data: opportunity,
      };
    } catch (error) {
      console.error('GHL Opportunity creation error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

/**
 * Helper function to get GHL client instance
 * Loads credentials from environment variables
 */
export function getGHLClient(): GHLClient {
  const apiKey = process.env.GHL_API_KEY || '';
  const locationId = process.env.GHL_LOCATION_ID || '';

  if (!apiKey || !locationId) {
    console.warn('⚠️ GHL API credentials not configured. Forms will not be submitted to GHL.');
  }

  return new GHLClient(apiKey, locationId);
}
