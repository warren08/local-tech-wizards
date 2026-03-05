import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Heart, Shield, Users, Award, Clock, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about LocalTechWizards - your trusted tech consultant in Sydney, Australia. Passionate about helping families navigate technology safely.',
}

const values = [
  {
    icon: Heart,
    title: 'Family First',
    description: 'Every solution is designed with your family\'s safety and wellbeing in mind.',
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Your privacy and digital security are always our top priority.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'You\'re not just a ticket number. You get direct access to an expert who knows your setup.',
  },
  {
    icon: Award,
    title: 'Quality Over Quantity',
    description: 'We take on fewer clients to ensure everyone gets the attention they deserve.',
  },
]

const expertise = [
  'Home Networking & WiFi Optimization',
  'Linux Systems (Fedora, Ubuntu, Debian)',
  'Self-Hosting & Home Lab Infrastructure',
  'Parental Control Solutions',
  'Network Security & Hardening',
  'Smart Home & IoT Devices',
  'Media Server Setup (Plex, Jellyfin)',
  'NAS Configuration (Synology, TrueNAS)',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="https://cdn.abacus.ai/images/b4379b0b-029f-4ef5-bd8e-87aaf9515e65.png"
                  alt="Tech Consultant"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Hi, I&apos;m Your <span className="text-[#00B894]">Local Tech Wizard</span>
                </h1>
                <p className="text-xl text-slate-300 mb-6">
                  Tech enthusiast with extensive experience in home labbing, self-hosting, and network security. Passionate about helping Sydney families navigate technology safely and efficiently.
                </p>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-5 h-5 text-[#00B894]" />
                  <span>Based in Sydney, Australia</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">My Story</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  I&apos;ve always been fascinated by technology. What started as tinkering with computers as a kid evolved into a passion for building home labs, self-hosting services, and mastering network infrastructure.
                </p>
                <p className="mb-4">
                  As a parent myself, I understand the challenges families face in today&apos;s digital world. How do you keep your kids safe online without becoming the &quot;tech police&quot;? How do you secure your home network without a computer science degree?
                </p>
                <p className="mb-4">
                  That&apos;s why I started LocalTechWizards. I wanted to use my technical expertise to help everyday families in Sydney navigate these challenges. No jargon, no condescension - just practical solutions that work.
                </p>
                <p>
                  Whether you need help setting up parental controls, securing your WiFi, or building your dream home media server, I&apos;m here to make it happen.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Years of hands-on experience with a wide range of technologies.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <AnimatedSection key={item} delay={index * 0.05}>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose LocalTechWizards</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                What sets us apart from big tech support companies.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF]/10 to-[#00B894]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#0066FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-[#0066FF]" />
                  <h2 className="text-2xl font-bold text-slate-900">Availability</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Remote Support</h3>
                    <p className="text-slate-600 text-sm">Monday - Friday: Flexible hours</p>
                    <p className="text-slate-600 text-sm">Weekends: Evening availability</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">In-Person Visits</h3>
                    <p className="text-slate-600 text-sm">Sydney metro area</p>
                    <p className="text-slate-600 text-sm">By appointment</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-slate-600 text-sm">
                    <strong>Response Time:</strong> I aim to respond to all inquiries within 24 hours.
                  </p>
                </div>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to solve your tech challenges? I&apos;d love to hear from you.
            </p>
            <Link href="/contact" className="inline-block bg-white text-[#0066FF] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
