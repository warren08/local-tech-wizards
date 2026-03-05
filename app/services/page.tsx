import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Wifi, Server, Wrench, Building2, Home, CheckCircle, ArrowRight, Monitor, Globe } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive tech services including parental controls, home network security, self-hosting, tech support, small business IT, and smart home setup in Sydney.',
}

const services = [
  {
    id: 'parental-controls',
    icon: Shield,
    title: 'Parental Controls & Website Monitoring',
    description: 'Protect your children from inappropriate content and manage screen time effectively.',
    image: 'https://cdn.abacus.ai/images/109848a9-3527-4278-a376-8a4391af6a79.jpg',
    features: [
      'Router-level content filtering',
      'DNS filtering (OpenDNS, CleanBrowsing)',
      'Device-specific parental controls',
      'Screen time management',
      'Activity monitoring and reporting',
      'Age-appropriate content filters',
    ],
    benefits: [
      'Peace of mind knowing your kids are safe online',
      'Easy-to-use dashboard for parents',
      'Flexible controls that grow with your family',
      'Works on all devices in your home',
    ],
  },
  {
    id: 'network-security',
    icon: Wifi,
    title: 'Home Network Security',
    description: 'Secure your home WiFi network from hackers and protect your personal data.',
    image: 'https://cdn.abacus.ai/images/0bedb173-b486-4ae3-b9bf-a1d7b9dfc71e.jpg',
    features: [
      'WiFi security audit',
      'Router configuration and hardening',
      'WPA3 encryption setup',
      'Guest network configuration',
      'Unknown device detection',
      'Firmware updates and maintenance',
    ],
    benefits: [
      'Protect your personal information from hackers',
      'Prevent unauthorized network access',
      'Faster, more reliable WiFi performance',
      'Professional-grade security for your home',
    ],
  },
  {
    id: 'self-hosting',
    icon: Server,
    title: 'Self-Hosting Services',
    description: 'Build your own home lab with Plex media servers, NAS storage, and more.',
    image: 'https://cdn.abacus.ai/images/69749fb9-d36b-4c43-be23-342cb1d2147e.jpg',
    features: [
      'Plex media server setup',
      'NAS configuration (Synology, QNAP, TrueNAS)',
      'Home lab design and setup',
      'Remote access configuration',
      'Backup and redundancy planning',
      'Container and VM management',
    ],
    benefits: [
      'Own your media and access it anywhere',
      'No more monthly streaming subscription fees',
      'Complete control over your data',
      'Learn valuable tech skills',
    ],
  },
  {
    id: 'tech-support',
    icon: Wrench,
    title: 'General Tech Troubleshooting',
    description: 'Solve everyday tech problems quickly and efficiently.',
    image: 'https://cdn.abacus.ai/images/83de16a9-add1-4508-9ffa-543fdeec2840.png',
    features: [
      'WiFi connectivity issues',
      'Printer setup and troubleshooting',
      'Device configuration and setup',
      'Software installation and updates',
      'Email and account setup',
      'Data backup and recovery',
    ],
    benefits: [
      'Quick resolution of frustrating tech issues',
      'Clear explanations you can understand',
      'Prevent future problems with proper setup',
      'Save time and reduce stress',
    ],
  },
  {
    id: 'business-it',
    icon: Building2,
    title: 'Small Business IT Support',
    description: 'Professional IT consulting and support for Sydney small businesses.',
    image: 'https://cdn.abacus.ai/images/0f1a5403-7885-468d-adcf-1e69b4c08911.jpg',
    features: [
      'IT infrastructure assessment',
      'Network setup and management',
      'Cloud services configuration',
      'Cybersecurity best practices',
      'Backup and disaster recovery',
      'Ongoing IT support and maintenance',
    ],
    benefits: [
      'Reduce IT costs with efficient solutions',
      'Minimize downtime and increase productivity',
      'Protect your business data',
      'Expert guidance without full-time IT costs',
    ],
  },
  {
    id: 'smart-home',
    icon: Home,
    title: 'Smart Home Setup',
    description: 'Transform your home with smart automation and IoT devices.',
    image: 'https://cdn.abacus.ai/images/7db875d8-0fb4-483a-b0d9-38e448eb8643.jpg',
    features: [
      'Smart speaker and assistant setup',
      'Smart lighting and thermostat',
      'Security cameras and doorbells',
      'Smart locks and access control',
      'Home automation routines',
      'IoT security hardening',
    ],
    benefits: [
      'Convenient control of your home',
      'Energy savings with smart automation',
      'Enhanced home security',
      'Peace of mind when away',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tech Services for <span className="text-[#00B894]">Sydney Families</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              From keeping your kids safe online to building your dream home lab, we offer comprehensive tech solutions tailored to your needs.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-slate-300">
                <Monitor className="w-5 h-5 text-[#00B894]" />
                <span>Remote Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-5 h-5 text-[#00B894]" />
                <span>Serving All of Australia</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.id}>
                <div
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00B894] rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#00B894] mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Flexible Service Delivery</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Choose the option that works best for you - remote support or in-person service.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Remote Support</h3>
                <p className="text-slate-600 mb-4">
                  Get expert help from the comfort of your home via TeamViewer or AnyDesk. Available Australia-wide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#00B894]" />
                    Available nationwide
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#00B894]" />
                    Quick response time
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#00B894]" />
                    No travel fees
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-8 border-2 border-[#00B894]">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-[#00B894]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">In-Person Service</h3>
                <p className="text-slate-600 mb-4">
                  Hands-on help at your location in the Sydney metro area. Perfect for hardware setup and complex installations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#00B894]" />
                    Sydney metro coverage
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#00B894]" />
                    Hands-on hardware setup
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#00B894]" />
                    Personal consultation
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00B894]">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free 15-minute consultation and let&apos;s discuss how we can help.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="bg-white text-[#0066FF] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Book Free Consultation
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0066FF] transition-all">
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
