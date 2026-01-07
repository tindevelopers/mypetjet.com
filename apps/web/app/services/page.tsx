import { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/section-wrapper";
import { Target, Zap, TrendingUp, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services - Pet Jet | Strategic Consulting, Technology & Operations",
  description: "Comprehensive pet care industry services: strategy consulting, technology innovation, operations & growth, and expert product evaluation. Transform your business with Pet Jet.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Comprehensive Solutions for Pet Care Excellence
            </h1>
            <p className="text-lg leading-relaxed text-purple-100 sm:text-xl">
              From strategy to execution, Pet Jet delivers integrated solutions that drive growth, innovation, and operational excellence across the pet care industry.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              End-to-end solutions tailored to the unique needs of the pet care industry
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/services/strategy">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border-2 hover:border-pet-purple-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-pet-purple-100 text-pet-purple-500 group-hover:bg-pet-purple-500 group-hover:text-white transition-colors">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Strategy & Consulting</CardTitle>
                  <CardDescription className="text-base">
                    Chart your path to market leadership with data-driven insights and strategic roadmaps
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-purple-500" />
                      Market Entry & Expansion Strategy
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-purple-500" />
                      Digital Transformation Roadmaps
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-purple-500" />
                      Business Model Innovation
                    </li>
                  </ul>
                  <div className="flex items-center text-pet-purple-500 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/technology">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border-2 hover:border-pet-teal/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-pet-teal/20 text-pet-teal-dark group-hover:bg-pet-teal group-hover:text-white transition-colors">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Technology & Innovation</CardTitle>
                  <CardDescription className="text-base">
                    Build the future of pet care with advanced AI, IoT, and digital platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-teal-dark" />
                      AI & Machine Learning Solutions
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-teal-dark" />
                      IoT & Connected Devices
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-teal-dark" />
                      Digital Platform Development
                    </li>
                  </ul>
                  <div className="flex items-center text-pet-teal-dark font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/operations">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border-2 hover:border-pet-gold/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-pet-gold/20 text-pet-gold-dark group-hover:bg-pet-gold group-hover:text-white transition-colors">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Operations & Growth</CardTitle>
                  <CardDescription className="text-base">
                    Scale with confidence through operational excellence and proven frameworks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-gold-dark" />
                      Retail & Distribution Excellence
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-gold-dark" />
                      Supply Chain Transformation
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-pet-gold-dark" />
                      Marketing & Sales Acceleration
                    </li>
                  </ul>
                  <div className="flex items-center text-pet-gold-dark font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/product-evaluation">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border-2 hover:border-purple-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Award className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Product Evaluation Service</CardTitle>
                  <CardDescription className="text-base">
                    Expert research and unbiased evaluation for product positioning and market fit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                      Pre-Launch Product Analysis
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                      Market Positioning Research
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                      Expert Team Credentials
                    </li>
                  </ul>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Value Proposition */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Pet Jet
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Comprehensive expertise across the entire pet care value chain
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl font-bold text-pet-purple-500">100%</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Pet Care Focus</h3>
              <p className="text-gray-600">
                Unlike generalist firms, we exclusively serve the pet care industry with deep, specialized expertise
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl font-bold text-pet-purple-500">50+</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Industry Partners</h3>
              <p className="text-gray-600">
                Trusted by leading veterinary groups, retailers, tech companies, and investors worldwide
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl font-bold text-pet-purple-500">10x</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Growth Achieved</h3>
              <p className="text-gray-600">
                Our partners have achieved exceptional growth through our strategic guidance and operational support
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Let's discuss how Pet Jet can help you achieve your strategic goals
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-pet-purple-500 hover:bg-pet-purple-600">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="lg" variant="outline" className="border-pet-purple-500 text-pet-purple-500 hover:bg-pet-purple-50">
                Explore Partnerships
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
