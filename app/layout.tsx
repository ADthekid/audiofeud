import './globals.css'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Audiofeud 2023',
  description: 'Lorem ipsum dolor sit amet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`inter.className bg-slate-800`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
