import { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import { Stethoscope, ShoppingBag, Smartphone, Heart, Apple, Shield, Sparkles, PawPrint } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve - Pet Jet | Pet Care Industry Expertise",
  description: "Pet Jet serves 8 key pet care industry verticals: veterinary services, pet retail, pet technology, pet services, pet food & nutrition, grooming, wellness, and emerging categories.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Deep Expertise Across the Pet Care Ecosystem
            </h1>
            <p className="text-lg leading-relaxed text-purple-100 sm:text-xl">
              We serve eight key industry verticals with specialized knowledge, proven frameworks, and transformative solutions.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <Stethoscope className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Veterinary Services & Telehealth</CardTitle>
                <CardDescription className="text-base">
                  $307M market growing at 20% CAGR to $2.4B by 2034
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Telehealth platform development, practice management optimization, regulatory compliance, vet network development, AI diagnostics, and client experience transformation.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Veterinary hospital groups, telehealth platforms, practice management software providers, specialists
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <ShoppingBag className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Pet Retail & E-Commerce</CardTitle>
                <CardDescription className="text-base">
                  $102.3B e-commerce market growing at 7.8% CAGR
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Omnichannel strategy, e-commerce platforms, subscription services, personalization, supply chain optimization, and store merchandising.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Pet specialty retailers, e-commerce businesses, big-box pet departments, direct-to-consumer brands
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <Smartphone className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Pet Technology & Smart Products</CardTitle>
                <CardDescription className="text-base">
                  $9.3B market growing at 21.3% CAGR
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Product development, AI/ML models, IoT device integration, subscription design, go-to-market strategy, and strategic partnerships.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Wearable manufacturers, smart product companies, pet tech startups, platform developers
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <Heart className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Pet Services (Grooming, Boarding, Training)</CardTitle>
                <CardDescription className="text-base">
                  $43.4B market growing at 8.7% CAGR
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Facility design, service delivery optimization, franchise development, technology integration, staff training, and premium positioning.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Grooming chains, boarding facilities, training academies, mobile providers, pet hotels
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <Apple className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Pet Food & Nutrition</CardTitle>
                <CardDescription className="text-base">
                  $147B market, premium segment growing at 15.2% CAGR
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Product formulation, manufacturing partnerships, regulatory compliance (FDA, AAFCO), distribution strategy, brand positioning, and sustainability.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Pet food manufacturers, ingredient suppliers, contract manufacturers, emerging nutrition brands
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <Shield className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Pet Insurance & Financial Services</CardTitle>
                <CardDescription className="text-base">
                  Growing 21% annually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Product design, actuarial support, technology platforms, distribution channels, claims optimization, regulatory compliance, and partnerships.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Pet insurance providers, embedded insurance platforms, veterinary financing, payment processors
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <PawPrint className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Pet Health & Wellness</CardTitle>
                <CardDescription className="text-base">
                  Rapidly growing preventive care market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Wellness product development, preventive care programs, holistic health solutions, supplement formulation, and wellness technology integration.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Wellness brands, supplement companies, holistic care providers, preventive health platforms
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pet-purple-300 transition-colors">
              <CardHeader>
                <Sparkles className="mb-4 h-12 w-12 text-pet-purple-500" />
                <CardTitle className="text-2xl">Emerging Categories</CardTitle>
                <CardDescription className="text-base">
                  Innovation at the edge of pet care
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pet fashion, luxury services, travel & hospitality, entertainment, social platforms, and other innovative categories shaping the future of pet care.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Target Clients:</strong> Innovators, disruptors, category creators, and forward-thinking entrepreneurs
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Transform Your Industry Vertical?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Let's discuss how Pet Jet can help you succeed in your market
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-pet-purple-500 hover:bg-pet-purple-600">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
