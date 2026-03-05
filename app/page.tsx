import Image from 'next/image'
import Link from 'next/link'
import { Shield, Wifi, Server, Wrench, Building2, Home, ArrowRight, CheckCircle, Star, Clock, Users } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'
import Counter from '@/components/counter'

const services = [
  {
    icon: Shield,
    title: 'Parental Controls & Monitoring',
    description: 'Keep your children safe online with comprehensive parental control setup and website monitoring.',
    image: 'https://cdn.abacus.ai/images/109848a9-3527-4278-a376-8a4391af6a79.jpg',
  },
  {
    icon: Wifi,
    title: 'Home Network Security',
    description: 'Secure your home WiFi network from threats with proper configuration and best practices.',
    image: 'https://cdn.abacus.ai/images/0bedb173-b486-4ae3-b9bf-a1d7b9dfc71e.jpg',
  },
  {
    icon: Server,
    title: 'Self-Hosting Services',
    description: 'Set up your own Plex media server, NAS storage, and home lab infrastructure.',
    image: 'https://cdn.abacus.ai/images/69749fb9-d36b-4c43-be23-342cb1d2147e.jpg',
  },
  {
    icon: Wrench,
    title: 'General Tech Support',
    description: 'WiFi issues, printer problems, device setup - we solve your everyday tech frustrations.',
    image: 'https://cdn.abacus.ai/images/83de16a9-add1-4508-9ffa-543fdeec2840.png',
  },
  {
    icon: Building2,
    title: 'Small Business IT',
    description: 'Professional IT consulting and support tailored for small businesses in Sydney.',
    image: 'https://cdn.abacus.ai/images/0f1a5403-7885-468d-adcf-1e69b4c08911.jpg',
  },
  {
    icon: Home,
    title: 'Smart Home Setup',
    description: 'Home automation, IoT device configuration, and smart home security solutions.',
    image: 'https://cdn.abacus.ai/images/7db875d8-0fb4-483a-b0d9-38e448eb8643.jpg',
  },
]

const trustIndicators = [
  { icon: Users, label: 'Sydney-Based', description: 'Local expert you can trust' },
  { icon: Shield, label: 'Family-Focused', description: 'Safety is our priority' },
  { icon: Clock, label: '24hr Response', description: 'Quick turnaround guaranteed' },
  { icon: Star, label: 'Experienced', description: 'Years of tech expertise' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/9b3d2341-31a3-4220-b09c-81398034285b.jpg"
            alt="Tech workspace for families"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="section-container relative z-10 py-20">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Local <span className="text-[#00B894]">Tech Problem</span> Solvers in Sydney
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Helping families and small businesses navigate technology safely and efficiently. From parental controls to home networks, we make complex tech simple.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900">
                  Explore Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF]/10 to-[#00B894]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-7 h-7 text-[#0066FF]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{item.label}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tech Services for <span className="text-[#0066FF]">Modern Families</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Whether you need to protect your kids online or set up a home media server, we&apos;ve got you covered.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="card group overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-[#0066FF]" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 flex-1">{service.description}</p>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-[#0066FF] font-medium mt-4 group-hover:text-[#00B894] transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0066FF] to-[#00B894]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <AnimatedSection delay={0}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={15} suffix="+" />
              </div>
              <p className="text-blue-100">Years Experience</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={24} />
              </div>
              <p className="text-blue-100">Hour Response</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={100} suffix="%" />
              </div>
              <p className="text-blue-100">Satisfaction</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.abacus.ai/images/e239ac85-dcbe-4a86-8105-a9275ced54a1.png"
                  alt="Family using parental controls"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wide">Featured Case Study</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
                  How We Helped a Sydney Family Take Control of Their Children&apos;s Internet Usage
                </h2>
                <p className="text-slate-600 mb-6">
                  A Sydney family with three children was struggling to manage screen time and worried about inappropriate content. We implemented a comprehensive parental control solution that gave parents peace of mind.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Router-level content filtering', 'Time limits on all devices', 'Real-time monitoring dashboard', 'Easy-to-use parent app'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00B894]" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-4 border-[#0066FF] pl-4 italic text-slate-600 mb-6">
                  &quot;LocalTechWizards made setting up parental controls so easy. Now I can rest easy knowing my kids are safe online.&quot;
                  <footer className="text-sm text-slate-500 mt-2">— Sarah M., Sydney</footer>
                </blockquote>
                <Link href="/case-studies" className="btn-primary">
                  Read Full Story
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Solve Your Tech Problems?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Book a free 15-minute consultation and let&apos;s discuss how we can help your family stay safe and connected.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book Free Consultation
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
