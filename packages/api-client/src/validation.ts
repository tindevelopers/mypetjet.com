/**
 * Form validation utilities
 */

export interface ValidationError {
  field: string;
  message: string;
}

export class ValidationException extends Error {
  public errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super('Validation failed');
    this.errors = errors;
    this.name = 'ValidationException';
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // Basic phone validation - adjust as needed
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phone.length >= 10 && phoneRegex.test(phone);
}

export function validateRequired(value: string | undefined, fieldName: string): ValidationError | null {
  if (!value || value.trim() === '') {
    return { field: fieldName, message: `${fieldName} is required` };
  }
  return null;
}

export function validateEmailField(email: string | undefined, fieldName: string = 'email'): ValidationError | null {
  const requiredError = validateRequired(email, fieldName);
  if (requiredError) return requiredError;

  if (!validateEmail(email!)) {
    return { field: fieldName, message: 'Invalid email address' };
  }
  return null;
}

export function validatePhoneField(phone: string | undefined, fieldName: string = 'phone', required: boolean = false): ValidationError | null {
  if (!phone || phone.trim() === '') {
    if (required) {
      return { field: fieldName, message: `${fieldName} is required` };
    }
    return null;
  }

  if (!validatePhone(phone)) {
    return { field: fieldName, message: 'Invalid phone number' };
  }
  return null;
}
