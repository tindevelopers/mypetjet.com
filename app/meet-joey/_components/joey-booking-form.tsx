"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface JoeyBookingFormData {
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  eventDate?: string;
  eventLocation?: string;
  audienceSize?: string;
  budgetRange?: string;
  message: string;
}

export default function JoeyBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventType, setEventType] = useState("");
  const { toast } = useToast();
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<JoeyBookingFormData>();

  const onSubmit = async (data: JoeyBookingFormData) => {
    // Validate eventType is selected
    if (!eventType) {
      toast({
        title: "Validation Error",
        description: "Please select an event/service type.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/joey-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          serviceType: eventType, // Send as serviceType for API compatibility
          eventType, // Also send as eventType for backward compatibility
          company: data.organization, // Map organization to company
        }),
      });

      if (response?.ok) {
        toast({
          title: "Booking Request Submitted!",
          description: "Thank you for your interest. We'll be in touch soon to discuss availability and details.",
        });
        reset();
        setEventType("");
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.details?.map((d: any) => d.message).join(", ") || errorData.error || "Failed to submit";
        throw new Error(errorMessage);
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="John Doe"
            className="mt-2"
          />
          {errors?.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="organization">Organization</Label>
          <Input
            id="organization"
            {...register("organization")}
            placeholder="Company or event name"
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="john@company.com"
            className="mt-2"
          />
          {errors?.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            placeholder="+1 (555) 123-4567"
            className="mt-2"
          />
          {errors?.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="eventType">Event/Service Type *</Label>
        <Select value={eventType} onValueChange={setEventType}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="speaking-engagement">Speaking Engagement</SelectItem>
            <SelectItem value="judging">Competition Judging</SelectItem>
            <SelectItem value="consulting">Business Consulting</SelectItem>
            <SelectItem value="product-review">Product Review/Evaluation</SelectItem>
            <SelectItem value="training">Training Workshop</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {!eventType && (
          <p className="mt-1 text-sm text-red-600">Event/Service type is required</p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="eventDate">Event Date</Label>
          <Input
            id="eventDate"
            type="date"
            {...register("eventDate")}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="eventLocation">Event Location</Label>
          <Input
            id="eventLocation"
            {...register("eventLocation")}
            placeholder="City, State/Country"
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="audienceSize">Expected Audience Size</Label>
          <Controller
            name="audienceSize"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1-50 people</SelectItem>
                  <SelectItem value="51-100">51-100 people</SelectItem>
                  <SelectItem value="101-250">101-250 people</SelectItem>
                  <SelectItem value="251-500">251-500 people</SelectItem>
                  <SelectItem value="500+">500+ people</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div>
          <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
          <Input
            id="budgetRange"
            {...register("budgetRange")}
            placeholder="e.g., $5,000 - $10,000"
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Event Details & Requirements *</Label>
        <Textarea
          id="message"
          {...register("message", { required: "Please provide event details" })}
          placeholder="Tell us about your event, what you'd like Joey to cover, and any specific requirements..."
          rows={6}
          className="mt-2"
        />
        {errors?.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-pet-purple-500 hover:bg-pet-purple-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Booking Request
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
