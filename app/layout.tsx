import Header from '@/components/layout/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import MealContextProvider from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cooky - delicious food every day',
  description:
    'Cooking courses: Discover quality cooking courses and tutorials, become a culinary master chef!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MealContextProvider>{children}</MealContextProvider>
        <Footer />
      </body>
    </html>
  )
}
