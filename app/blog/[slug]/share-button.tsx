'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
}

export default function ShareButton({ title }: ShareButtonProps) {
  const handleShare = async () => {
    if (typeof window === 'undefined') return
    
    if (navigator?.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        })
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator?.clipboard?.writeText?.(window.location.href)
        alert('Link copied to clipboard!')
      } catch {
        // Clipboard failed
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  )
}
