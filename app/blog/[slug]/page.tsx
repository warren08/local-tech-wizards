import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'
import ShareButton from './share-button'

const posts: Record<string, {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  content: string
}> = {
  'how-to-set-up-parental-controls-2026': {
    title: 'How to Set Up Parental Controls on Your Home Network in 2026',
    excerpt: 'A comprehensive guide to protecting your children online.',
    image: 'https://cdn.abacus.ai/images/e239ac85-dcbe-4a86-8105-a9275ced54a1.png',
    date: 'March 1, 2026',
    readTime: '8 min read',
    category: 'Parental Controls',
    content: `<p>As a Sydney parent, you know the constant battle of managing your children's screen time. From online gaming to social media, the digital world is a vast and sometimes daunting place. The good news is that you have the power to create a safer online environment for your family.</p>

<h2>Router-Level Controls: Your First Line of Defense</h2>
<p>Your home WiFi router is the gateway to the internet for all your devices. Most modern routers, like those from major Australian ISPs such as Telstra, Optus, and TPG, come with built-in parental control features.</p>
<ul>
<li><strong>Time limits:</strong> Set daily or weekly time limits for internet access on specific devices.</li>
<li><strong>Website filtering:</strong> Block access to specific websites or categories of content.</li>
<li><strong>Scheduled access:</strong> Control the times of day when the internet is available.</li>
</ul>

<h2>DNS Filtering: A Powerful Tool for a Cleaner Internet</h2>
<p>DNS (Domain Name System) filtering is a powerful way to block inappropriate content at the network level. Services like OpenDNS and CleanBrowsing allow you to filter content for all devices on your network.</p>
<ol>
<li><strong>Sign up for a free account:</strong> Both OpenDNS and CleanBrowsing offer free family-friendly filtering.</li>
<li><strong>Configure your router:</strong> Change your router's DNS settings to point to the service's servers.</li>
<li><strong>Customize your filtering levels:</strong> Choose from pre-configured levels or customize your own.</li>
</ol>

<h2>Device-Specific Settings</h2>
<p>While router-level controls are a great start, you may also want to set up device-specific controls. Both iOS and Android have built-in parental control features that allow you to set screen time limits, restrict app purchases, and filter web content.</p>

<h2>Monitoring Tools</h2>
<p>For parents who want more visibility into their children's online activity, monitoring tools can provide detailed reports on website history, app usage, and social media activity. However, it's important to have an open conversation with your children about why you're using these tools.</p>

<h2>Conclusion</h2>
<p>Protecting your children online requires a layered approach. By combining router-level controls, DNS filtering, and device-specific settings, you can create a safer online experience for your family.</p>
<p>If you're feeling overwhelmed, the team at <strong>LocalTechWizards</strong> can help. Contact us today for a consultation!</p>`,
  },
  '5-signs-your-wifi-isnt-secure': {
    title: '5 Signs Your Home WiFi Network Isn\'t Secure (And How to Fix It)',
    excerpt: 'Learn the telltale signs that your home network may be vulnerable.',
    image: 'https://cdn.abacus.ai/images/c40b8ca1-6768-4fa0-89ba-7c88f3ae72fc.jpg',
    date: 'February 25, 2026',
    readTime: '6 min read',
    category: 'Network Security',
    content: `<p>In today's hyper-connected world, a secure home WiFi network is no longer a luxury – it's a necessity. With cybercrime on the rise in Australia, it's more important than ever to protect your personal information.</p>

<h2>1. You're Using a Weak or Default Password</h2>
<p>If you're still using the default password that came with your router, or a weak password like "12345678", you're making it easy for hackers to gain access.</p>
<p><strong>The Fix:</strong> Create a strong, unique password at least 12 characters long with a mix of upper and lowercase letters, numbers, and symbols.</p>

<h2>2. Your Router's Firmware is Outdated</h2>
<p>Router firmware needs to be updated regularly to patch security vulnerabilities. If you haven't updated in a while, you could be exposed to known exploits.</p>
<p><strong>The Fix:</strong> Log in to your router's admin panel and check for firmware updates regularly.</p>

<h2>3. You Have Unknown Devices on Your Network</h2>
<p>If you notice devices you don't recognize, someone might be piggybacking on your WiFi.</p>
<p><strong>The Fix:</strong> Check your router's connected devices list and block any you don't recognize.</p>

<h2>4. You Don't Have a Guest Network</h2>
<p>A guest network allows visitors to access the internet without accessing your main network.</p>
<p><strong>The Fix:</strong> Enable the guest network feature in your router's admin panel.</p>

<h2>5. You're Not Using WPA3 Encryption</h2>
<p>WPA3 is the latest and most secure WiFi encryption standard.</p>
<p><strong>The Fix:</strong> If your router supports WPA3, enable it. If not, consider upgrading.</p>

<h2>Conclusion</h2>
<p>Securing your home WiFi is essential for protecting your family's privacy. The experts at <strong>LocalTechWizards</strong> can help with a comprehensive home network security audit.</p>`,
  },
  'complete-guide-home-media-server': {
    title: 'Complete Guide to Building Your First Home Media Server',
    excerpt: 'Everything you need to know about Plex, NAS devices, and creating your own streaming service.',
    image: 'https://cdn.abacus.ai/images/d6709693-e03b-4d9c-93db-f6eabbb2023e.jpg',
    date: 'February 20, 2026',
    readTime: '10 min read',
    category: 'Self-Hosting',
    content: `<p>Tired of juggling multiple streaming subscriptions? Want to create a centralized library of all your movies, TV shows, and music? Then it's time to build your own home media server!</p>

<h2>What is a Home Media Server?</h2>
<p>A home media server is a dedicated computer on your home network that stores all of your digital media files. With a media server, you can stream your content to any device in your home.</p>

<h2>Plex: The Heart of Your Media Server</h2>
<p>Plex is popular media server software that makes it easy to organize, stream, and share your media library. With Plex, you can organize your media with automatic metadata, stream to any device, and share with friends and family.</p>

<h2>NAS: The Brains of the Operation</h2>
<p>A NAS (Network Attached Storage) device is perfect for storing your media library. Popular brands in Australia include Synology and QNAP. You can also build your own with TrueNAS.</p>

<h2>Hardware Requirements</h2>
<p>The hardware you'll need depends on your specific needs. For streaming to a few devices, a modest setup works fine. For multiple devices or 4K transcoding, you'll need more power.</p>

<h2>Benefits of a Home Media Server</h2>
<ul>
<li>Centralized library - all your media in one place</li>
<li>Stream to any device</li>
<li>No more subscription fees</li>
<li>Share with friends and family</li>
</ul>

<h2>Conclusion</h2>
<p>Building a home media server is a rewarding project. The team at <strong>LocalTechWizards</strong> can help you design and build the perfect setup for your family.</p>`,
  },
  'protecting-kids-online-parent-guide': {
    title: 'Protecting Your Kids Online: A Parent\'s Guide to Website Monitoring',
    excerpt: 'Navigate the world of online safety tools and find the right balance.',
    image: 'https://cdn.abacus.ai/images/8f2b8d0a-e795-4438-9ef0-d46241735f1d.png',
    date: 'February 15, 2026',
    readTime: '7 min read',
    category: 'Parental Controls',
    content: `<p>Parenting in the digital age is a challenge. With kids spending more time online than ever before, it's natural to worry about what they're seeing and doing.</p>

<h2>Why Monitoring Matters</h2>
<p>The internet can be wonderful for learning and connecting, but it also has risks like cyberbullying and online predators. Website monitoring helps protect your kids by giving you visibility into their online activity.</p>

<h2>Tools of the Trade</h2>
<ul>
<li><strong>Bark:</strong> Uses AI to monitor texts, emails, and social media for potential issues</li>
<li><strong>Qustodio:</strong> Set time limits and block inappropriate content</li>
<li><strong>Net Nanny:</strong> Real-time content filtering</li>
</ul>

<h2>Balancing Privacy and Safety</h2>
<p>Have an open conversation with your kids about why you're using monitoring tools. The goal is safety, not invasion of privacy. As kids get older, adjust the level of monitoring appropriately.</p>

<h2>Age-Appropriate Settings</h2>
<p>The monitoring level should match your child's age and maturity. Younger children may need more restrictive settings, while older teens might need monitoring for specific risks.</p>

<h2>Conclusion</h2>
<p>Website monitoring is one tool in your online safety toolkit. <strong>LocalTechWizards</strong> can help you choose the right tools and develop a comprehensive safety plan.</p>`,
  },
  'smart-home-security-sydney-families': {
    title: 'Smart Home Security: What Sydney Families Need to Know',
    excerpt: 'Secure your IoT devices and create a smart home that\'s both convenient and safe.',
    image: 'https://cdn.abacus.ai/images/8d740af8-3f80-4fa0-ae2a-b02674e380d9.jpg',
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'Smart Home',
    content: `<p>Smart homes are no longer science fiction. From smart speakers to light bulbs, more Sydney families are embracing connected homes. But with convenience comes new security risks.</p>

<h2>The Internet of Things (IoT) and Its Risks</h2>
<p>IoT devices can make life easier, but many are shipped with default passwords and rarely updated, making them easy targets for hackers.</p>

<h2>Secure Setup Practices</h2>
<ul>
<li><strong>Change default passwords:</strong> This is the most important step</li>
<li><strong>Enable two-factor authentication:</strong> Adds extra security</li>
<li><strong>Keep software updated:</strong> Regular updates patch vulnerabilities</li>
<li><strong>Use a guest network:</strong> Isolate IoT devices from your main network</li>
</ul>

<h2>Recommended Devices</h2>
<p>Choose devices from reputable brands with good security track records. Popular options in Australia include Ring, Nest, and Arlo.</p>

<h2>Network Segmentation</h2>
<p>For greater security, segment your network to isolate IoT devices. This way, even if one device is compromised, hackers can't access your personal files.</p>

<h2>Conclusion</h2>
<p>A smart home can be wonderful when properly secured. <strong>LocalTechWizards</strong> can help design and implement a comprehensive security solution tailored to your needs.</p>`,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts?.[params?.slug]
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts?.[params?.slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#0066FF] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="section-container">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="max-w-3xl">
              <span className="inline-block bg-[#00B894] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-400">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <ShareButton title={post.title} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 z-10">
        <div className="section-container">
          <AnimatedSection>
            <div className="relative aspect-[21/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <article className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:text-slate-900 prose-a:text-[#0066FF] prose-strong:text-slate-900">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#0066FF] to-[#00B894] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help With This?
              </h2>
              <p className="text-blue-100 mb-6">
                Reading is great, but hands-on help is better. Book a free consultation and let&apos;s solve your tech challenges together.
              </p>
              <Link href="/contact" className="inline-block bg-white text-[#0066FF] font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all">
                Book Free Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
