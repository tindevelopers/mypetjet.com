"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface PartnershipFormData {
  companyName: string;
  name: string;
  email: string;
  phone?: string;
  partnershipInterest: string;
  message: string;
}

export default function PartnershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [partnershipInterest, setPartnershipInterest] = useState("");
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PartnershipFormData>();

  const onSubmit = async (data: PartnershipFormData) => {
    // Validate partnershipInterest is selected
    if (!partnershipInterest) {
      toast({
        title: "Validation Error",
        description: "Please select a partnership interest.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/partnerships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          partnershipInterest,
        }),
      });

      if (response?.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        reset();
        setPartnershipInterest("");
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
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            {...register("companyName", { required: "Company name is required" })}
            placeholder="Your company name"
            className="mt-2"
          />
          {errors?.companyName && (
            <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
          )}
        </div>
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
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+1 (555) 123-4567"
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="partnershipInterest">Partnership Interest *</Label>
        <Select value={partnershipInterest} onValueChange={setPartnershipInterest}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select your interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="strategy-consulting">Strategy & Consulting</SelectItem>
            <SelectItem value="technology-development">Technology Development</SelectItem>
            <SelectItem value="operations-growth">Operations & Growth</SelectItem>
            <SelectItem value="product-evaluation">Product Evaluation</SelectItem>
            <SelectItem value="investment">Investment Opportunities</SelectItem>
            <SelectItem value="general">General Partnership Inquiry</SelectItem>
          </SelectContent>
        </Select>
        {!partnershipInterest && (
          <p className="mt-1 text-sm text-red-600">Partnership interest is required</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Tell Us About Your Business *</Label>
        <Textarea
          id="message"
          {...register("message", { required: "Please tell us about your business" })}
          placeholder="Describe your business, goals, and how we can help..."
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
            Submit Application
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
