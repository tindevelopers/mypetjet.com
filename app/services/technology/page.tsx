import { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import FeatureCard from "@/components/feature-card";
import { Zap, Brain, Smartphone, Database, Cloud, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology & Innovation Services - Pet Jet | AI, IoT, Platform Development",
  description: "Build the future of pet care with advanced AI, IoT, and digital platforms. Expert technology solutions including machine learning, connected devices, and veterinary technology from Pet Jet.",
};

export default function TechnologyServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pet-teal-dark to-pet-teal text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Build the Future of Pet Care with Advanced Technology
            </h1>
            <p className="text-lg leading-relaxed text-teal-100 sm:text-xl">
              Pet Jet's technology practice combines software engineering, AI/ML, and platform development to create differentiated solutions that drive competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Technology Solutions
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="Brain"
              title="AI & Machine Learning"
              description="Predictive health analytics, computer vision, NLP for customer service, recommendation engines, and behavioral analysis"
              delay={0}
            />
            <FeatureCard
              icon="Smartphone"
              title="IoT & Connected Devices"
              description="Smart collars, health monitoring systems, home automation integration, real-time tracking, and sensor fusion"
              delay={0.1}
            />
            <FeatureCard
              icon="Code"
              title="Digital Platform Development"
              description="Mobile apps, cloud-native architecture, API frameworks, subscription systems, and marketplace platforms"
              delay={0.2}
            />
            <FeatureCard
              icon="Cloud"
              title="Veterinary Technology"
              description="Telehealth platforms, practice management systems, EHR solutions, AI diagnostics, and client portals"
              delay={0}
            />
            <FeatureCard
              icon="Database"
              title="Data & Analytics"
              description="Data warehouse architecture, BI dashboards, customer data platforms, predictive modeling, and real-time analytics"
              delay={0.1}
            />
            <FeatureCard
              icon="Zap"
              title="E-Commerce & Retail Tech"
              description="Headless commerce, personalization engines, inventory management, POS modernization, and supply chain visibility"
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Innovate?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Let's build cutting-edge technology solutions for your business
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-pet-teal hover:bg-pet-teal-dark">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
