import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRouter — Route customer feedback to the right team automatically',
  description: 'AI-powered system that reads customer feedback and automatically routes it to appropriate teams with priority scoring.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0d038d8a-159a-46a3-aa27-da67b89e081f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
