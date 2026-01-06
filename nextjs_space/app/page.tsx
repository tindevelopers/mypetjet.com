import Link from "next/link";
import { ArrowRight, Sparkles, Target, Zap, TrendingUp, Users, Shield, Award, ChevronRight, Building2, Stethoscope, ShoppingBag, Smartphone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/section-wrapper";
import FeatureCard from "@/components/feature-card";
import StatCard from "@/components/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pet-purple-600 via-pet-purple-500 to-pet-purple-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              Reimagining Pet Care Through Strategic Innovation & Technology
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Reinventing Pet Care for the Future
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-purple-100 sm:text-xl">
              Pet Jet is a global pet care advisory firm combining strategic consulting, advanced technology, and operational excellence to transform how pet service businesses serve pet parents worldwide.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/partnerships">
                <Button size="xl" className="bg-white text-pet-purple-600 hover:bg-gray-100 shadow-lg">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-pet-purple-600">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCard value={380} suffix="B+" prefix="$" label="Global Pet Care Market" />
            <StatCard value={20} suffix="%+" label="CAGR in Pet Tech" />
            <StatCard value={50} suffix="+" label="Industry Partners" />
            <StatCard value={100} suffix="M+" label="Pets Impacted" />
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do Section */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              End-to-End Solutions for Pet Care Leaders
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Pet Jet is a multifaceted professional services firm specializing in the pet care industry. We combine deep industry expertise with cutting-edge technology to help companies accelerate growth, optimize operations, and unlock new revenue streams.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon="Target"
              title="Strategy & Advisory"
              description="Transform your business with data-driven insights and strategic roadmaps tailored to the evolving pet care landscape."
              delay={0}
            />
            <FeatureCard
              icon="Zap"
              title="Technology & Innovation"
              description="Leverage AI, IoT, and digital platforms to create next-generation pet care solutions that drive customer engagement and operational efficiency."
              delay={0.1}
            />
            <FeatureCard
              icon="TrendingUp"
              title="Operations & Growth"
              description="Scale your business with proven operational frameworks, from supply chain optimization to omnichannel retail execution."
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Partnership Opportunity Section */}
      <SectionWrapper background="purple">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-pet-purple-100 px-4 py-2 text-sm font-medium text-pet-purple-700">
                  Partnership Opportunity
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Partner with Us to Make Your Business Better
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Join our network of industry-leading partners and unlock new opportunities for growth, innovation, and success in the pet care industry.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Strategic guidance from industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Access to cutting-edge technology solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Network of pet care industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-pet-purple-500" />
                    <span className="text-gray-700">Proven operational frameworks for scaling</span>
                  </li>
                </ul>
                <Link href="/partnerships">
                  <Button size="lg" className="bg-pet-purple-500 hover:bg-pet-purple-600">
                    Apply for Partnership
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-pet-purple-100 to-pet-purple-200 p-6 text-center">
                    <Target className="mx-auto mb-2 h-8 w-8 text-pet-purple-600" />
                    <div className="text-2xl font-bold text-pet-purple-700">Strategy</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-pet-teal/20 to-pet-teal/30 p-6 text-center">
                    <Zap className="mx-auto mb-2 h-8 w-8 text-pet-teal-dark" />
                    <div className="text-2xl font-bold text-pet-teal-dark">Technology</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-pet-gold/20 to-pet-gold/30 p-6 text-center">
                    <TrendingUp className="mx-auto mb-2 h-8 w-8 text-pet-gold-dark" />
                    <div className="text-2xl font-bold text-pet-gold-dark">Growth</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 p-6 text-center">
                    <Users className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                    <div className="text-2xl font-bold text-purple-700">Partnership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Services Preview */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Comprehensive solutions tailored to the unique needs of the pet care industry
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/services/strategy">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-purple-100 text-pet-purple-500 group-hover:bg-pet-purple-500 group-hover:text-white transition-colors">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Strategy & Consulting</CardTitle>
                  <CardDescription className="text-base">
                    Market entry strategies, digital transformation roadmaps, business model innovation, and portfolio optimization
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/services/technology">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-teal/20 text-pet-teal-dark group-hover:bg-pet-teal group-hover:text-white transition-colors">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Technology & Innovation</CardTitle>
                  <CardDescription className="text-base">
                    AI/ML solutions, IoT platforms, digital platform development, veterinary technology, and data analytics
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/services/operations">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-gold/20 text-pet-gold-dark group-hover:bg-pet-gold group-hover:text-white transition-colors">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Operations & Growth</CardTitle>
                  <CardDescription className="text-base">
                    Retail excellence, supply chain transformation, service delivery optimization, and marketing acceleration
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/services/product-evaluation">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle>Product Evaluation Service</CardTitle>
                  <CardDescription className="text-base">
                    Expert research and unbiased evaluation for product positioning, market fit analysis, and strategic placement
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Industries Preview */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Deep expertise across the entire pet care ecosystem
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Stethoscope className="mx-auto mb-3 h-10 w-10 text-pet-purple-500" />
                <CardTitle className="text-lg">Veterinary Services</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <ShoppingBag className="mx-auto mb-3 h-10 w-10 text-pet-purple-500" />
                <CardTitle className="text-lg">Pet Retail</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Smartphone className="mx-auto mb-3 h-10 w-10 text-pet-purple-500" />
                <CardTitle className="text-lg">Pet Technology</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Heart className="mx-auto mb-3 h-10 w-10 text-pet-purple-500" />
                <CardTitle className="text-lg">Pet Services</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries">
              <Button size="lg" variant="outline" className="border-pet-purple-500 text-pet-purple-500 hover:bg-pet-purple-50">
                View All Industries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Meet Joey Section */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-pet-purple-600 to-pet-purple-800 p-8 text-white sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  Industry Authority
                </div>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                  Meet Joey Villani
                </h2>
                <div className="mb-6 text-2xl font-semibold text-pet-gold">
                  "The Dogfather"
                </div>
                <p className="mb-6 text-lg leading-relaxed text-purple-100">
                  With over 50 years of expertise in pet grooming and industry leadership, Joey Villani is a globally recognized authority, international judge, and sought-after speaker transforming the pet care industry.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <Award className="mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span>International grooming judge and competition expert</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Global speaker on pet industry innovation</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Expert product evaluator and brand advisor</span>
                  </li>
                </ul>
                <Link href="/meet-joey">
                  <Button size="lg" className="bg-white text-pet-purple-600 hover:bg-gray-100">
                    Learn More About Joey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-sm p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-6xl font-bold text-white">50+</div>
                      <div className="text-xl font-semibold text-purple-100">Years of Expertise</div>
                      <div className="mt-6 text-sm text-purple-200">Transforming the pet industry through innovation and excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Partnerships */}
      <SectionWrapper background="gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Partnerships
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Collaborating with industry leaders to drive innovation and growth
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-pet-purple-50 to-purple-100">
                <CardTitle className="text-2xl">APPGA Partnership</CardTitle>
                <CardDescription className="text-base">
                  Strategic advisory relationship with the American Professional Pet Groomers Association
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-600">
                  Pet Jet serves as a strategic advisor to APPGA, providing technology solutions and industry insights to advance the professional grooming community.
                </p>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="font-semibold text-pet-purple-600 mb-2">Featured Project: Ask Joey AI</div>
                  <p className="text-sm text-gray-600">
                    AI-powered advisory platform delivering expert grooming guidance to professionals worldwide
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-pet-teal/10 to-pet-teal/20">
                <CardTitle className="text-2xl">Pet Store Direct</CardTitle>
                <CardDescription className="text-base">
                  AI development and technology innovation partnership
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-600">
                  Collaborating on cutting-edge AI solutions to transform pet retail operations and customer experience.
                </p>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="font-semibold text-pet-teal-dark mb-2">Technology Focus</div>
                  <p className="text-sm text-gray-600">
                    Developing intelligent inventory management and personalized customer engagement platforms
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Pet Jet */}
      <SectionWrapper background="white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Pet Jet?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Industry expertise meets technological innovation
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="Target"
              title="Pet Care Specialists"
              description="Unlike generalist consulting firms, Pet Jet focuses exclusively on the pet care industry with decades of deep expertise."
              delay={0}
            />
            <FeatureCard
              icon="Zap"
              title="Technology-First Mindset"
              description="We leverage AI, IoT, and data analytics to create competitive advantages and drive innovation."
              delay={0.1}
            />
            <FeatureCard
              icon="Shield"
              title="End-to-End Solutions"
              description="From strategy to execution, we provide comprehensive support across all aspects of your business."
              delay={0.2}
            />
            <FeatureCard
              icon="TrendingUp"
              title="Results-Driven"
              description="We measure success by your outcomes with performance-based models that align our success with yours."
              delay={0}
            />
            <FeatureCard
              icon="Users"
              title="Global Network"
              description="Strategic partnerships across North America, Europe, and Asia-Pacific provide global reach with local expertise."
              delay={0.1}
            />
            <FeatureCard
              icon="Award"
              title="Investment Capabilities"
              description="Beyond advisory services, we invest in high-potential companies with both capital and strategic support."
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper background="purple">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Transform Your Pet Care Business?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Join the industry leaders who trust Pet Jet for strategic guidance, technology innovation, and operational excellence.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="xl" className="bg-pet-purple-500 hover:bg-pet-purple-600">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="xl" variant="outline" className="border-pet-purple-500 text-pet-purple-500 hover:bg-pet-purple-50">
                Apply for Partnership
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
