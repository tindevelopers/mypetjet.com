import { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import FeatureCard from "@/components/feature-card";
import { TrendingUp, Package, Truck, Users, BarChart, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operations & Growth Services - Pet Jet | Operational Excellence",
  description: "Scale your pet care business with confidence through operational excellence. Retail optimization, supply chain transformation, and marketing acceleration from Pet Jet's operations experts.",
};

export default function OperationsServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pet-gold-dark to-pet-gold text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Scale with Confidence Through Operational Excellence
            </h1>
            <p className="text-lg leading-relaxed text-yellow-100 sm:text-xl">
              Transform your operations to support sustainable growth, improve efficiency, and deliver exceptional customer experiences.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Operational Services
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="Package"
              title="Retail & Distribution"
              description="Store operations optimization, franchise development, distribution network design, inventory optimization, and loss prevention"
              delay={0}
            />
            <FeatureCard
              icon="Truck"
              title="Supply Chain Transformation"
              description="End-to-end assessment, supplier management, logistics optimization, demand planning, and sustainability initiatives"
              delay={0.1}
            />
            <FeatureCard
              icon="Users"
              title="Service Delivery"
              description="Grooming and boarding operations, training programs, quality management, staff productivity, and customer experience"
              delay={0.2}
            />
            <FeatureCard
              icon="BarChart"
              title="Manufacturing Excellence"
              description="Product development processes, quality assurance, regulatory compliance (FDA, AAFCO), co-packing, and sustainable packaging"
              delay={0}
            />
            <FeatureCard
              icon="Megaphone"
              title="Marketing & Sales"
              description="Go-to-market strategy, digital marketing, social media programs, sales force effectiveness, and customer acquisition"
              delay={0.1}
            />
            <FeatureCard
              icon="TrendingUp"
              title="Growth Acceleration"
              description="Scaling frameworks, expansion planning, franchise models, market penetration strategies, and performance optimization"
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Optimize Operations?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Let's transform your operations for sustainable growth
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-pet-gold hover:bg-pet-gold-dark">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
