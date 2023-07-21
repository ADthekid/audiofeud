import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { Hanken_Grotesk } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

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
      <body className={`hankenGrotesk.className bg-slate-950`}>
        <Navbar />
        <section id="landing" className="h-screen text-center flex bg-slate-950">
          <h1 className="animate-gradient m-auto font-waterfall text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-500 to-blue-800 bg-300%">
            Audiofeud 2023
          </h1>
        </section>
        <hr id="aboutScroll" className="my-12 h-px border-t-0 bg-neutral-700 opacity-50" />
        <section id="about" className="relative text-white h-screen bg-slate-950 text-center flex">
          <h1 className="absolute animate-gradient py-3 m-auto font-waterfall text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-500 to-blue-800 bg-300%">
            Connect. Collaborate. Create.
          </h1>
        </section>
        <hr id="sponsorsScroll" className="my-12 h-px border-t-0 bg-neutral-700 opacity-50" />
        <section id="sponsors" className=" text-white h-screen bg-slate-950 flex" >
          <h1 className="animate-gradient m-auto py-3 font-waterfall text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-500 to-blue-800 bg-300%">
            Sponsors
          </h1>
        </section>
        <hr id="teamScroll" className="my-12 h-px border-t-0 bg-neutral-700 opacity-50" />
        <section id="team" className="text-white h-screen bg-slate-950  text-center flex">
          <h1 className="animate-gradient m-auto py-3 font-waterfall text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-500 to-blue-800 bg-300%">
            Team
          </h1>
        </section>
        <hr id="registerScroll" className="my-12 h-px border-t-0 bg-neutral-700 opacity-50" />
        <section id="register" className=" text-white h-screen bg-slate-950 flex">
          <h1 className="animate-gradient m-auto py-3 font-waterfall text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-500 to-blue-800 bg-300%">
            Register
          </h1>
        </section>
        <Footer />
      </body>
    </html>
  )
}
