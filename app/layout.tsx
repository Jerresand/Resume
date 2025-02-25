import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Gustav Jerresand',
  description: 'Personal website of Gustav Jerresand',
  generator: 'v0.dev',
  icons: {
    icon: '/icon2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <body>
          {children}
          <Analytics />
        </body>
    </html>
  )
}
