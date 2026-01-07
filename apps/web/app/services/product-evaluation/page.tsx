import { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import { Award, CheckCircle, Star, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Evaluation Service - Pet Jet | Expert Research & Analysis",
  description: "Professional product evaluation and research service for pet care companies. Unbiased expert analysis for product positioning, market fit, and strategic placement from Pet Jet's evaluation team.",
};

export default function ProductEvaluationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Expert Product Evaluation Service
            </h1>
            <p className="text-lg leading-relaxed text-purple-100 sm:text-xl">
              Professional research and unbiased evaluation for product positioning, market fit analysis, and strategic placement in the pet care industry.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Comprehensive product evaluation and research service — not traditional reviews
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Award className="mb-4 h-10 w-10 text-purple-600" />
                <CardTitle>Pre-Launch Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert analysis of products before market launch to optimize positioning, identify improvements, and validate market readiness
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="mb-4 h-10 w-10 text-purple-600" />
                <CardTitle>Market Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  In-depth research on how your product fits in the market landscape, competitive analysis, and strategic positioning recommendations
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Star className="mb-4 h-10 w-10 text-purple-600" />
                <CardTitle>Post-Launch Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive evaluation of launched products for optimization opportunities, market reception, and strategic placement guidance
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Evaluation Process
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold">
                1
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Product Submission</h3>
              <p className="text-gray-600">
                Companies submit products with specific evaluation goals and questions
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold">
                2
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Expert Analysis</h3>
              <p className="text-gray-600">
                Our team conducts thorough testing, research, and competitive analysis
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold">
                3
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Detailed Report</h3>
              <p className="text-gray-600">
                Comprehensive evaluation report with findings, insights, and recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold">
                4
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Strategic Guidance</h3>
              <p className="text-gray-600">
                Follow-up consultation to discuss findings and implementation strategy
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Expert Evaluation Team
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Led by industry authorities including Joey Villani ("The Dogfather") and expert evaluators
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <Users className="mb-4 h-10 w-10 text-purple-600" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Industry Veterans</h3>
              <p className="text-gray-600">
                50+ years combined experience in pet care, grooming, and product development
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <CheckCircle className="mb-4 h-10 w-10 text-purple-600" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Unbiased Analysis</h3>
              <p className="text-gray-600">
                Independent evaluation with no conflicts of interest or promotional bias
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <Award className="mb-4 h-10 w-10 text-purple-600" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600">
                Trusted by leading brands for honest, actionable product insights
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Submit Your Product for Evaluation
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Get expert insights to optimize your product's market success
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Request Evaluation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
