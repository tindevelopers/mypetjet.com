import { Metadata } from "next";
import JoeyBookingForm from "./_components/joey-booking-form";
import SectionWrapper from "@/components/section-wrapper";
import { Award, Star, Globe, Users, Mic, Trophy, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Meet Joey Villani - "The Dogfather" | Pet Jet',
  description: "Joey Villani, known as 'The Dogfather', brings over 50 years of pet grooming expertise as an international judge, speaker, and industry authority. Book him for speaking engagements and product evaluations.",
};

export default function MeetJoeyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-pet-gold/20 px-4 py-2 text-sm font-medium text-pet-gold backdrop-blur-sm">
                Global Pet Industry Authority
              </div>
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Meet Joey Villani
              </h1>
              <div className="mb-6 text-3xl font-bold text-pet-gold">
                "The Dogfather"
              </div>
              <p className="text-lg leading-relaxed text-purple-100">
                With over 50 years of expertise in pet grooming and industry leadership, Joey Villani is a globally recognized authority, international judge, and sought-after speaker transforming the pet care industry.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-white">50+</div>
                  <div className="text-sm text-purple-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-white">100+</div>
                  <div className="text-sm text-purple-100">Speaking Events</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-white">Global</div>
                  <div className="text-sm text-purple-100">Reach</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-white">Expert</div>
                  <div className="text-sm text-purple-100">Judge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Joey */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              A Legendary Career in Pet Care
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Joey Villani's journey from master groomer to global industry icon
            </p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Joey Villani has dedicated his life to elevating the art and science of pet grooming. Known affectionately as "The Dogfather" throughout the industry, Joey has trained thousands of groomers, judged countless competitions worldwide, and helped shape the standards that define professional pet grooming today.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              His expertise extends beyond grooming techniques to encompass business operations, product development, and industry innovation. Joey's insights have helped pet care businesses—from small grooming salons to multinational corporations—improve their services, products, and customer experiences.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Expertise Areas */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Areas of Expertise
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Trophy className="mb-4 h-10 w-10 text-pet-purple-500" />
                <CardTitle>International Judging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Certified international judge for major grooming competitions worldwide, setting standards for excellence in the industry
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mic className="mb-4 h-10 w-10 text-pet-purple-500" />
                <CardTitle>Speaking & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Keynote speaker at industry conferences, trade shows, and corporate events globally
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="mb-4 h-10 w-10 text-pet-purple-500" />
                <CardTitle>Product Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert reviewer of grooming tools, equipment, and pet care products with unbiased professional assessments
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="mb-4 h-10 w-10 text-pet-purple-500" />
                <CardTitle>Business Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Strategic advisor to grooming salons, pet service franchises, and product manufacturers
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="mb-4 h-10 w-10 text-pet-purple-500" />
                <CardTitle>Industry Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advisory board member and strategic partner with leading industry organizations like APPGA
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Star className="mb-4 h-10 w-10 text-pet-purple-500" />
                <CardTitle>Standards Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Contributed to establishing professional grooming standards and best practices adopted worldwide
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Offered */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Book Joey for Your Event or Project
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Bring decades of expertise and industry authority to your organization
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2 border-pet-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Speaking Engagements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Keynote presentations at conferences and trade shows</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Corporate training and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Panel discussions and fireside chats</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Virtual presentations and webinars</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  Speaking fees vary based on event type, location, and duration. Contact us for details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pet-teal/30">
              <CardHeader>
                <CardTitle className="text-2xl">Judging & Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-teal-dark" />
                    <span className="text-gray-700">International grooming competition judging</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-teal-dark" />
                    <span className="text-gray-700">Product review and evaluation services</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-teal-dark" />
                    <span className="text-gray-700">Business strategy consulting</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-teal-dark" />
                    <span className="text-gray-700">Brand partnership opportunities</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  Custom consulting packages available for businesses of all sizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Partnership */}
      <SectionWrapper background="purple">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-pet-purple-100 px-4 py-2 text-sm font-medium text-pet-purple-700">
                  Featured Partnership
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  Ask Joey AI - APPGA Partnership
                </h3>
                <p className="mb-6 text-lg text-gray-600">
                  Joey's expertise is now available 24/7 through Ask Joey AI, an innovative platform providing expert grooming guidance to professionals worldwide.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">AI-powered advisory platform</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Expert grooming guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Strategic partnership with APPGA</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Award className="mx-auto mb-6 h-20 w-20 text-pet-purple-500" />
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    American Professional Pet Groomers Association
                  </p>
                  <p className="text-gray-600">
                    Strategic Advisory Relationship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* External Link */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Learn More About Joey
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Visit Joey's personal website for his full portfolio, achievements, and industry insights
          </p>
          <a href="https://www.joeyvillani.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-pet-purple-500 text-pet-purple-500 hover:bg-pet-purple-50">
              Visit JoeyVillani.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </SectionWrapper>

      {/* Booking Form */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Book Joey Villani
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to inquire about Joey's availability for your event or project
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8 sm:p-12">
            <JoeyBookingForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
