import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DigiMonkey',
  description: 'A perfect website for UI and Web Designs',
  // icons: "@/public/favicon.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          inter.className
        )}>
        <main className='relative flex flex-col min-h-screen'>
          <Providers>
            <Navbar />
            <div className='flex-grow flex-1'>{children}</div>
          </Providers>
        </main>
      </body>
    </html>
  )
}
