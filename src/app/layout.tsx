import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'

export const metadata: Metadata = {
  title: 'MoodMart',
  description: 'Косметика для всех',
  icons: {
    icon: 'favicon.ico',
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
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
