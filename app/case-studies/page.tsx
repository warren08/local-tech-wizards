import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Quote, ArrowRight, Clock, Target, Lightbulb, Trophy } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Read how LocalTechWizards helped Sydney families with parental controls, network security, and tech setup.',
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Results for <span className="text-[#00B894]">Real Families</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how we&apos;ve helped Sydney families solve their tech challenges and create safer, smarter homes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src="https://cdn.abacus.ai/images/186a179c-49d1-437a-88ee-e45b40000407.jpg"
                    alt="Sydney family using parental controls"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <span className="inline-block bg-[#00B894] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Featured Case Study
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    How We Helped a Sydney Family Take Control of Their Children&apos;s Internet Usage
                  </h2>
                  <p className="text-slate-600 mb-6">
                    A family with three children aged 8-14 was struggling to manage screen time and worried about inappropriate content reaching their kids.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Problem / Solution / Results */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="card p-6 h-full">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Problem</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Kids spending 6+ hours daily on devices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Exposure to inappropriate content on YouTube
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    No visibility into online activity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Constant battles over screen time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Kids accessing internet late at night
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-6 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Solution</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                    Router-level content filtering with OpenDNS
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                    Time-based internet schedules per device
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                    Age-appropriate YouTube restrictions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                    Parent dashboard for monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                    Training session for parents
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card p-6 h-full border-2 border-[#00B894]">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-[#00B894]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Results</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00B894] mt-1 flex-shrink-0" />
                    Screen time reduced to 2 hours/day
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00B894] mt-1 flex-shrink-0" />
                    Zero inappropriate content incidents
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00B894] mt-1 flex-shrink-0" />
                    Parents have full visibility
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00B894] mt-1 flex-shrink-0" />
                    No more bedtime battles
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00B894] mt-1 flex-shrink-0" />
                    Kids understand the boundaries
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Testimonial */}
          <AnimatedSection delay={0.4}>
            <div className="mt-12 bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-[#00B894] mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 max-w-3xl mx-auto">
                &quot;LocalTechWizards made setting up parental controls so easy. I was amazed at how quickly everything was configured, and now I can actually see what my kids are doing online. The best part? My children understand the rules and there are no more arguments about screen time. Worth every penny!&quot;
              </blockquote>
              <footer className="text-slate-400">
                <strong className="text-white">Sarah M.</strong> — Sydney, NSW
              </footer>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection delay={0.5}>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Project Timeline</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2">
                  <Clock className="w-4 h-4 text-[#0066FF]" />
                  <span className="text-slate-700">Initial consultation: 30 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2">
                  <Clock className="w-4 h-4 text-[#0066FF]" />
                  <span className="text-slate-700">Implementation: 2 hours</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2">
                  <Clock className="w-4 h-4 text-[#0066FF]" />
                  <span className="text-slate-700">Parent training: 30 minutes</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Before & After</h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-600 mb-4">Before LocalTechWizards</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500">✗</span>
                    Kids on devices until midnight
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500">✗</span>
                    No idea what content they were viewing
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500">✗</span>
                    Constant arguments about screen time
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500">✗</span>
                    Worried about online predators
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500">✗</span>
                    Felt helpless and overwhelmed
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border-2 border-[#00B894]">
                <h3 className="text-xl font-bold text-[#00B894] mb-4">After LocalTechWizards</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                    Internet automatically off at 8pm on school nights
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                    Weekly activity reports delivered to parents
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                    Clear, agreed-upon rules for the whole family
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                    Age-appropriate content filters in place
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                    Peace of mind and confidence
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
              Ready to Transform Your Family&apos;s Digital Life?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free consultation and let&apos;s discuss how we can help your family stay safe online.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-white text-[#0066FF] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
