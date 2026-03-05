import { NextRequest, NextResponse } from 'next/server'

// Note: This API route is not used in the static Cloudflare Pages deployment.
// The contact form submits directly to Web3Forms instead.
// This file exists only for local development/testing.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In production (Cloudflare Pages), the form submits directly to Web3Forms
    // This endpoint is only for local development
    console.log('Contact form submission:', { name, email, service, message })

    return NextResponse.json(
      { success: true, message: 'Form received (dev mode)' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
