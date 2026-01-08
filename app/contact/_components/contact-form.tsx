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

interface ContactFormData {
  companyName: string;
  name: string;
  title?: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceInterest, setServiceInterest] = useState("");
  const [companyStage, setCompanyStage] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          serviceInterest,
          companyStage,
          preferredContact,
          hearAboutUs,
        }),
      });

      if (response?.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll be in touch within 24 hours.",
        });
        reset();
        setServiceInterest("");
        setCompanyStage("");
        setPreferredContact("");
        setHearAboutUs("");
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.details?.map((d: any) => d.message).join(", ") || errorData.error || "Failed to submit";
        throw new Error(errorMessage);
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again or email us directly at info@petjet.com",
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
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title")}
            placeholder="CEO, Founder, etc."
            className="mt-2"
          />
        </div>
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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
        <div>
          <Label htmlFor="serviceInterest">Service Interest</Label>
          <Select value={serviceInterest} onValueChange={setServiceInterest}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strategy">Strategy & Consulting</SelectItem>
              <SelectItem value="technology">Technology & Innovation</SelectItem>
              <SelectItem value="operations">Operations & Growth</SelectItem>
              <SelectItem value="product-evaluation">Product Evaluation</SelectItem>
              <SelectItem value="partnership">Partnership Inquiry</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="companyStage">Company Stage</Label>
          <Select value={companyStage} onValueChange={setCompanyStage}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="startup">Startup</SelectItem>
              <SelectItem value="growth">Growth</SelectItem>
              <SelectItem value="established">Established</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="preferredContact">Preferred Contact Method</Label>
          <Select value={preferredContact} onValueChange={setPreferredContact}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="either">Either</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="hearAboutUs">How Did You Hear About Us?</Label>
        <Select value={hearAboutUs} onValueChange={setHearAboutUs}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="search">Search Engine</SelectItem>
            <SelectItem value="referral">Referral</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="event">Event/Conference</SelectItem>
            <SelectItem value="joey">Joey Villani</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Brief Description of Challenge/Opportunity *</Label>
        <Textarea
          id="message"
          {...register("message", { required: "Please describe your needs" })}
          placeholder="Tell us about your business goals, challenges, or opportunities..."
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
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
