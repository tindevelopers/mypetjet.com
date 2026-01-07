import { Metadata } from "next";
import PartnershipForm from "./_components/partnership-form";
import SectionWrapper from "@/components/section-wrapper";
import { Target, Zap, Users, TrendingUp, Award, CheckCircle, ChevronRight } from "lucide-react";
import FeatureCard from "@/components/feature-card";

export const metadata: Metadata = {
  title: "Partnerships - Pet Jet | Strategic Pet Care Industry Collaboration",
  description: "Join Pet Jet's network of industry-leading partners. Access strategic guidance, cutting-edge technology, and proven operational frameworks to grow your pet care business.",
};

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Partner with Us to Make Your Business Better
            </h1>
            <p className="text-lg leading-relaxed text-purple-100 sm:text-xl">
              Join our network of industry-leading partners and unlock new opportunities for growth, innovation, and success in the pet care industry.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Partnership Benefits
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              When you partner with Pet Jet, you gain access to comprehensive resources and expertise that drive real business results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="Target"
              title="Strategic Guidance"
              description="Access to seasoned industry experts who understand the pet care landscape and can chart the path to your success."
              delay={0}
            />
            <FeatureCard
              icon="Zap"
              title="Technology Solutions"
              description="Leverage cutting-edge AI, IoT, and digital platforms to create competitive advantages and operational efficiency."
              delay={0.1}
            />
            <FeatureCard
              icon="TrendingUp"
              title="Growth Frameworks"
              description="Proven operational systems and scaling strategies used by successful pet care businesses worldwide."
              delay={0.2}
            />
            <FeatureCard
              icon="Users"
              title="Industry Network"
              description="Connect with a community of pet care innovators, investors, and industry leaders across multiple verticals."
              delay={0}
            />
            <FeatureCard
              icon="Award"
              title="Expert Resources"
              description="Access to Joey Villani ('The Dogfather') and other recognized authorities in the pet care industry."
              delay={0.1}
            />
            <FeatureCard
              icon="CheckCircle"
              title="Proven Results"
              description="Join partners who have achieved 10x revenue growth, expanded to new markets, and raised significant capital."
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Partnership Types */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Who We Partner With
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We work with companies at every stage of growth in the pet care ecosystem
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Startups & Early-Stage</h3>
              <p className="mb-6 text-gray-600">
                Launch fast and scale faster with strategic guidance, technology expertise, and capital connections.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Product-market fit validation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Technology development support</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Go-to-market strategy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Investor introductions</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Growth Companies</h3>
              <p className="mb-6 text-gray-600">
                Break through to the next level with operational support and strategic expansion guidance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Market expansion strategy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Operational scaling systems</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Technology modernization</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Growth capital raising</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Established Enterprises</h3>
              <p className="mb-6 text-gray-600">
                Reinvent for continued leadership through digital transformation and innovation programs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Digital transformation roadmaps</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Innovation programs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Strategic acquisitions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">New business line development</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Investors & PE Firms</h3>
              <p className="mb-6 text-gray-600">
                Navigate pet care investments with confidence through industry insights and operational expertise.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Deal sourcing and screening</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Commercial due diligence</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Value creation planning</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                  <span className="text-gray-700">Portfolio company support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Application Form */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Apply for Partnership
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your business and how we can help you achieve your goals
            </p>
          </div>
          <PartnershipForm />
        </div>
      </SectionWrapper>
    </>
  );
}
