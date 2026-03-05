import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#00B894] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LocalTechWizards</span>
            </Link>
            <p className="text-slate-400 max-w-md mb-4">
              Your local tech problem solvers in Sydney. We help families and small businesses navigate technology safely and efficiently.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00B894]" />
                <span>Sydney, Australia (Remote Australia-wide)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00B894]" />
                <span>hello@localtechwizards.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00B894]" />
                <span>0400 000 000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-[#00B894] transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-[#00B894] transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-[#00B894] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#00B894] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#parental-controls" className="hover:text-[#00B894] transition-colors">Parental Controls</Link></li>
              <li><Link href="/services#network-security" className="hover:text-[#00B894] transition-colors">Network Security</Link></li>
              <li><Link href="/services#self-hosting" className="hover:text-[#00B894] transition-colors">Self-Hosting</Link></li>
              <li><Link href="/services#smart-home" className="hover:text-[#00B894] transition-colors">Smart Home</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} LocalTechWizards. All rights reserved. Sydney, Australia.</p>
        </div>
      </div>
    </footer>
  )
}
