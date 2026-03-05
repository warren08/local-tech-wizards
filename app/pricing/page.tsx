import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, Star, Zap, Shield, Server, Home, Wrench } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for tech consulting services. Hourly rates, service packages, and free consultation available.',
}

const packages = [
  {
    icon: Shield,
    name: 'Basic Parental Control Setup',
    price: '$200',
    description: 'Essential protection for your family\'s devices',
    features: [
      'Router-level content filtering',
      'DNS filtering setup',
      'Basic screen time controls',
      'Up to 5 devices',
      '30-minute parent training',
      '1 week email support',
    ],
    popular: false,
  },
  {
    icon: Zap,
    name: 'Complete Home Network Security',
    price: '$350',
    description: 'Comprehensive protection for your home network',
    features: [
      'Full security audit',
      'Router hardening & WPA3 setup',
      'Guest network configuration',
      'Firmware updates',
      'Unknown device detection',
      '2 weeks support included',
    ],
    popular: true,
  },
  {
    icon: Server,
    name: 'Home Lab / Media Server Setup',
    price: '$400-600',
    description: 'Build your personal media empire',
    features: [
      'Plex server installation',
      'NAS configuration',
      'Remote access setup',
      'Library organization',
      'Mobile app configuration',
      '2 hours training included',
    ],
    popular: false,
  },
  {
    icon: Home,
    name: 'Smart Home Configuration',
    price: '$250-500',
    description: 'Automate your home with smart devices',
    features: [
      'Smart assistant setup',
      'Device integration',
      'Automation routines',
      'Security camera config',
      'IoT network security',
      'Training and documentation',
    ],
    popular: false,
  },
  {
    icon: Wrench,
    name: 'General Tech Support Session',
    price: '$100',
    description: 'One hour of expert tech help',
    features: [
      '1 hour of support',
      'Remote or in-person',
      'Any tech issue',
      'Clear explanations',
      'Follow-up notes',
      'Discount on future sessions',
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, <span className="text-[#00B894]">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              No hidden fees, no surprises. Choose the package that fits your needs or book an hourly consultation.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#00B894] text-white px-6 py-3 rounded-full">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Free 15-Minute Consultation Available</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hourly Rate */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-[#0066FF] to-[#00B894] rounded-2xl p-8 text-white shadow-xl">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Hourly Consulting Rate</h2>
              <div className="text-5xl font-bold mb-4">$100<span className="text-xl font-normal">/hour</span></div>
              <p className="text-blue-100 mb-6">
                Perfect for general consultations, troubleshooting, and custom projects.
                Minimum 1-hour booking.
              </p>
              <Link href="/contact" className="inline-block bg-white text-[#0066FF] font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all">
                Book Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Packages</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fixed-price packages for common tech needs. Know exactly what you&apos;ll pay upfront.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 0.1}>
                <div className={`card p-6 h-full flex flex-col ${pkg.popular ? 'ring-2 ring-[#00B894] relative' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00B894] text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF]/10 to-[#00B894]/10 rounded-xl flex items-center justify-center mb-4">
                    <pkg.icon className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-[#0066FF] mb-2">{pkg.price}</div>
                  <p className="text-slate-600 text-sm mb-6">{pkg.description}</p>
                  <ul className="space-y-3 flex-1 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-center py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-[#00B894] text-white hover:bg-[#00A383]'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Remote vs In-Person */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Remote vs In-Person</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Both options available for most services.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Remote Support</h3>
                  <p className="text-slate-600 mb-6">Via TeamViewer or AnyDesk</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0066FF]" />
                      <span>Standard rates apply</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0066FF]" />
                      <span>Available Australia-wide</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0066FF]" />
                      <span>No travel time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0066FF]" />
                      <span>Quick scheduling</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-teal-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">In-Person Service</h3>
                  <p className="text-slate-600 mb-6">Sydney Metro Area</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B894]" />
                      <span>+$50 callout fee (within 20km)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B894]" />
                      <span>Hands-on hardware setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B894]" />
                      <span>Personal consultation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B894]" />
                      <span>Best for complex setups</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="py-20 bg-slate-900">
        <div className="section-container text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-[#00B894]/20 text-[#00B894] px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Free Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Book a free 15-minute consultation. We&apos;ll discuss your needs and recommend the best solution - no obligation.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
