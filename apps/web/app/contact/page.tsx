import { Metadata } from "next";
import ContactForm from "./_components/contact-form";
import SectionWrapper from "@/components/section-wrapper";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us - Pet Jet | Schedule a Consultation",
  description: "Get in touch with Pet Jet to discuss how we can help transform your pet care business. Schedule a consultation with our expert team today.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Let's Reinvent Pet Care Together
            </h1>
            <p className="text-lg leading-relaxed text-purple-100 sm:text-xl">
              Schedule a consultation to discuss how Pet Jet can help you achieve your strategic goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-purple-100 text-pet-purple-500">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">General Inquiries:</p>
                <a href="mailto:info@petjet.com" className="text-pet-purple-600 hover:text-pet-purple-700 font-medium">
                  info@petjet.com
                </a>
                <p className="text-gray-600 mt-4 mb-2">New Business:</p>
                <a href="mailto:business@petjet.com" className="text-pet-purple-600 hover:text-pet-purple-700 font-medium">
                  business@petjet.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-purple-100 text-pet-purple-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Headquarters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pet Jet Global<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-purple-100 text-pet-purple-500">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for industry insights and updates
                </p>
                <div className="flex space-x-2">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pet-purple-600 hover:text-pet-purple-700">
                    LinkedIn
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pet-purple-600 hover:text-pet-purple-700">
                    Twitter
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your business and we'll be in touch within 24 hours
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-12">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      {/* What to Expect */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What to Expect
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-pet-purple-100 text-pet-purple-500 text-2xl font-bold">
                1
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Discovery Call</h3>
              <p className="text-gray-600">
                30-minute discussion about your current challenges and goals
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-pet-purple-100 text-pet-purple-500 text-2xl font-bold">
                2
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Initial Assessment</h3>
              <p className="text-gray-600">
                1-2 weeks deep-dive analysis with preliminary recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-pet-purple-100 text-pet-purple-500 text-2xl font-bold">
                3
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Engagement</h3>
              <p className="text-gray-600">
                Detailed project planning, execution with your team, and ongoing support
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
