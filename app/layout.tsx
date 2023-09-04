import './globals.css'
import './components/email'
import './components/footer'
import { Hanken_Grotesk } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image';
import Email from './components/email'
import Footer from './components/footer'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: '800' })

export const metadata = {
  title: 'Audiofeud | The sound of the bay',
  description: 'We\'re going to bring Bay Area high school and college students with an interest in creating music under one roof for 24 hours. The best results will win cash and studio engineering equipment. Are you in?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    </html>
  )
}
