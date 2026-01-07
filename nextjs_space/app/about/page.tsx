import { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import FeatureCard from "@/components/feature-card";
import { Target, Zap, Shield, TrendingUp, Users, Award, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us - Pet Jet | Leading Pet Care Advisory Firm",
  description: "Pet Jet is a global pet care advisory firm transforming the industry through strategic consulting, advanced technology, and operational excellence. Learn about our mission, vision, and expert team.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Transforming Pet Care Through Innovation
            </h1>
            <p className="text-lg leading-relaxed text-purple-100 sm:text-xl">
              We're not just consultants—we're industry builders passionate about advancing animal welfare through better business.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-pet-purple-100 px-4 py-2 text-sm font-medium text-pet-purple-700">
                Our Mission
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Improving Lives of Pets and the Businesses That Serve Them
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Pet Jet exists to transform the pet care industry through strategic innovation, advanced technology, and operational excellence—improving the lives of pets and the businesses that serve them.
              </p>
            </div>
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-pet-teal/20 px-4 py-2 text-sm font-medium text-pet-teal-dark">
                Our Vision
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Leading the Industry's Evolution
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                To be the world's leading strategic partner for pet care companies, driving the industry's evolution into a technology-enabled, data-driven, and customer-centric future.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="Zap"
              title="Innovation First"
              description="We embrace cutting-edge technology and bold ideas to solve the industry's biggest challenges."
              delay={0}
            />
            <FeatureCard
              icon="Target"
              title="Results Driven"
              description="We measure our success by the tangible outcomes we deliver for our clients."
              delay={0.1}
            />
            <FeatureCard
              icon="Heart"
              title="Industry Passion"
              description="We're not just consultants—we're pet lovers committed to advancing animal welfare through better business."
              delay={0.2}
            />
            <FeatureCard
              icon="Users"
              title="Collaborative Partnership"
              description="We work alongside our clients as true partners, sharing both risks and rewards."
              delay={0}
            />
            <FeatureCard
              icon="TrendingUp"
              title="Continuous Evolution"
              description="The pet care industry is constantly changing. So are we."
              delay={0.1}
            />
            <FeatureCard
              icon="Shield"
              title="Trust & Integrity"
              description="We build long-term relationships based on transparency, honesty, and delivering on our promises."
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* What Makes Us Different */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Makes Us Different
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Industry expertise meets technological innovation
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-pet-purple-200">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-purple-100 text-pet-purple-500">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle>Pet Care Specialists</CardTitle>
                <CardDescription className="text-base">
                  Unlike generalist consulting firms, Pet Jet focuses exclusively on the pet care industry. Our team combines decades of industry experience with cutting-edge technology expertise.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-pet-teal/30">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-teal/20 text-pet-teal-dark">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>End-to-End Solutions</CardTitle>
                <CardDescription className="text-base">
                  From strategy to execution, we provide comprehensive support. Whether you need strategic advice, technology development, operational support, or capital raising, Pet Jet delivers integrated solutions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-pet-gold/30">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-gold/20 text-pet-gold-dark">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Technology-First Mindset</CardTitle>
                <CardDescription className="text-base">
                  We believe technology is the key to unlocking growth in pet care. Our solutions leverage AI, IoT, and data analytics to create competitive advantages.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle>Global Network</CardTitle>
                <CardDescription className="text-base">
                  With strategic partnerships across North America, Europe, and Asia-Pacific, we provide global reach with local expertise.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Team */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              World-Class Expertise
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our team brings together the best of consulting, technology, and pet care industry experience
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <Award className="mb-4 h-10 w-10 text-pet-purple-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Technology Leaders</h3>
              <p className="text-gray-600">
                From Silicon Valley tech companies, bringing AI, IoT, and platform development expertise
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <Award className="mb-4 h-10 w-10 text-pet-purple-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Investment Professionals</h3>
              <p className="text-gray-600">
                From top-tier private equity firms with deep experience in value creation and exits
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <Award className="mb-4 h-10 w-10 text-pet-purple-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Veterinary Experts</h3>
              <p className="text-gray-600">
                Industry practitioners who understand the clinical and operational realities
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <Award className="mb-4 h-10 w-10 text-pet-purple-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Digital Specialists</h3>
              <p className="text-gray-600">
                Transformation experts who have led successful technology initiatives at scale
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <Award className="mb-4 h-10 w-10 text-pet-purple-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">M&A Professionals</h3>
              <p className="text-gray-600">
                With 100+ transactions in pet care and consumer products
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <Award className="mb-4 h-10 w-10 text-pet-purple-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Industry Icons</h3>
              <p className="text-gray-600">
                Including Joey Villani ("The Dogfather"), a globally recognized pet care authority
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Partner with Industry Experts?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Join the industry leaders who trust Pet Jet for strategic guidance, technology innovation, and operational excellence.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-pet-purple-500 hover:bg-pet-purple-600">
                Get in Touch
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="lg" variant="outline" className="border-pet-purple-500 text-pet-purple-500 hover:bg-pet-purple-50">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
