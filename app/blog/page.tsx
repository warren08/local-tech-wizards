import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tech tips and guides for Sydney families. Learn about parental controls, network security, home servers, and smart home setup.',
}

const posts = [
  {
    slug: 'how-to-set-up-parental-controls-2026',
    title: 'How to Set Up Parental Controls on Your Home Network in 2026',
    excerpt: 'A comprehensive guide to protecting your children online using router-level controls, DNS filtering, and device-specific settings.',
    image: 'https://cdn.abacus.ai/images/e239ac85-dcbe-4a86-8105-a9275ced54a1.png',
    date: 'March 1, 2026',
    readTime: '8 min read',
    category: 'Parental Controls',
  },
  {
    slug: '5-signs-your-wifi-isnt-secure',
    title: '5 Signs Your Home WiFi Network Isn\'t Secure (And How to Fix It)',
    excerpt: 'Learn the telltale signs that your home network may be vulnerable and simple steps to protect your family\'s data.',
    image: 'https://cdn.abacus.ai/images/c40b8ca1-6768-4fa0-89ba-7c88f3ae72fc.jpg',
    date: 'February 25, 2026',
    readTime: '6 min read',
    category: 'Network Security',
  },
  {
    slug: 'complete-guide-home-media-server',
    title: 'Complete Guide to Building Your First Home Media Server',
    excerpt: 'Everything you need to know about Plex, NAS devices, and creating your own personal streaming service.',
    image: 'https://cdn.abacus.ai/images/d6709693-e03b-4d9c-93db-f6eabbb2023e.jpg',
    date: 'February 20, 2026',
    readTime: '10 min read',
    category: 'Self-Hosting',
  },
  {
    slug: 'protecting-kids-online-parent-guide',
    title: 'Protecting Your Kids Online: A Parent\'s Guide to Website Monitoring',
    excerpt: 'Navigate the world of online safety tools and find the right balance between protection and privacy.',
    image: 'https://cdn.abacus.ai/images/8f2b8d0a-e795-4438-9ef0-d46241735f1d.png',
    date: 'February 15, 2026',
    readTime: '7 min read',
    category: 'Parental Controls',
  },
  {
    slug: 'smart-home-security-sydney-families',
    title: 'Smart Home Security: What Sydney Families Need to Know',
    excerpt: 'Secure your IoT devices and create a smart home that\'s both convenient and safe for your family.',
    image: 'https://cdn.abacus.ai/images/8d740af8-3f80-4fa0-ae2a-b02674e380d9.jpg',
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'Smart Home',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tech Tips & <span className="text-[#00B894]">Guides</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Practical advice for Sydney families navigating the digital world. Simple explanations, real solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="card h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0066FF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0066FF] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-sm flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-[#0066FF] font-medium mt-4 group-hover:text-[#00B894] transition-colors">
                        Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need Help With Your Tech?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Reading guides is great, but sometimes you need hands-on help. Book a consultation and let&apos;s solve your tech challenges together.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
