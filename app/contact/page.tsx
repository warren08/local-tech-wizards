import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with LocalTechWizards for tech consulting services in Sydney. Book a free 15-minute consultation.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s <span className="text-[#00B894]">Talk Tech</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have a question or ready to get started? Reach out and I&apos;ll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Email</h3>
                        <p className="text-slate-600">hello@localtechwizards.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Phone</h3>
                        <p className="text-slate-600">0400 000 000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Service Area</h3>
                        <p className="text-slate-600">Sydney Metro (In-Person)</p>
                        <p className="text-slate-600">Australia-Wide (Remote)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Response Time</h3>
                        <p className="text-slate-600">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0066FF] to-[#00B894] rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Free Consultation</h3>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Not sure what you need? Book a free 15-minute consultation and we&apos;ll discuss your tech challenges - no obligation.
                  </p>
                  <p className="text-sm text-blue-200">
                    Just mention &quot;Free Consultation&quot; in your message!
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
