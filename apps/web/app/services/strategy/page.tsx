import { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import FeatureCard from "@/components/feature-card";
import { Target, TrendingUp, Map, Lightbulb, BarChart, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategy & Consulting Services - Pet Jet | Market Leadership",
  description: "Transform your pet care business with data-driven strategic insights. Market entry strategies, digital transformation roadmaps, and business model innovation from Pet Jet's expert consultants.",
};

export default function StrategyServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Chart Your Path to Market Leadership
            </h1>
            <p className="text-lg leading-relaxed text-purple-100 sm:text-xl">
              Our strategy consulting practice helps pet care companies navigate disruption, identify growth opportunities, and execute bold transformations.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Strategic Services
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="Map"
              title="Market Entry & Expansion"
              description="Geographic market analysis, competitive assessment, channel strategy development, and partnership structuring"
              delay={0}
            />
            <FeatureCard
              icon="TrendingUp"
              title="Digital Transformation"
              description="Technology stack optimization, e-commerce strategies, AI implementation plans, and customer experience redesign"
              delay={0.1}
            />
            <FeatureCard
              icon="Lightbulb"
              title="Business Model Innovation"
              description="Subscription models, platform business development, as-a-service transformation, and new product lines"
              delay={0.2}
            />
            <FeatureCard
              icon="BarChart"
              title="Portfolio Optimization"
              description="Product rationalization, SKU optimization, pricing strategy, and M&A target identification"
              delay={0}
            />
            <FeatureCard
              icon="Globe"
              title="Industry 4.0 for Pet Care"
              description="Smart manufacturing, IoT strategies, data monetization frameworks, and predictive analytics"
              delay={0.1}
            />
            <FeatureCard
              icon="Target"
              title="Growth Strategy"
              description="Market positioning, competitive differentiation, revenue stream development, and scaling roadmaps"
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Transform Your Strategy?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Let's discuss how strategic consulting can accelerate your growth
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
