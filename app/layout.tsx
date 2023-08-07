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
      <body className={hankenGrotesk.className}>
        <div className="relative overflow-hidden">
        <section className="min-h-[844px] h-screen text-white bg-indigo-600 to-white flex justify-center items-center">
          <div className="content">
          <ul className='text-center flex flex-col justify-center items-center'>
            <div className="absolute top-14 w-screen">
              <div className="justify-center items-center flex relative md:h-16 h-12 opacity-100 hover:opacity-80">
                <Link href="/">
                <Image
                  src="/textLogo.svg"
                  alt="logo"
                  className="focus:border-none active:border-none"
                  fill={true}
                />
                </Link>
              </div>
              <ul className="h-auto items-center flex-row justify-center flex mt-2 mb-4">
                <li className="font-extralight text-opacity-50 hover:text-opacity-80 pb-5 text-xl text-white py-2 px-3 opacity-60 hover:opacity-100">
                  <Link className="flex" href="https://www.instagram.com/audiofeud/" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                      <path fill="#FFFFFF" d="M 12 3 C 7.04 3 3 7.04 3 12 L 3 38 C 3 42.96 7.04 47 12 47 L 38 47 C 42.96 47 47 42.96 47 38 L 47 12 C 47 7.04 42.96 3 38 3 L 12 3 z M 38 8 L 41 8 C 41.55 8 42 8.45 42 9 L 42 12 C 42 12.55 41.55 13 41 13 L 38 13 C 37.45 13 37 12.55 37 12 L 37 9 C 37 8.45 37.45 8 38 8 z M 25 10 C 30.33 10 35.019688 12.8 37.679688 17 L 42 17 L 42 37 C 42 39.76 39.76 42 37 42 L 13 42 C 10.24 42 8 39.76 8 37 L 8 17 L 12.320312 17 C 14.980313 12.8 19.67 10 25 10 z M 25 12 C 17.83 12 12 17.83 12 25 C 12 32.17 17.83 38 25 38 C 32.17 38 38 32.17 38 25 C 38 17.83 32.17 12 25 12 z M 25 16 C 29.96 16 34 20.04 34 25 C 34 29.96 29.96 34 25 34 C 20.04 34 16 29.96 16 25 C 16 20.04 20.04 16 25 16 z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="font-extralight text-opacity-50 hover:text-opacity-80 pb-5 text-xl text-white py-2 px-3 opacity-60 hover:opacity-100">
                  <Link className="flex" href="https://discord.gg/caBgjgnjSa" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                      <path fill="#FFFFFF" d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="font-extralight text-opacity-50 hover:text-opacity-80 pb-5 text-xl text-white py-2 px-3 opacity-60 hover:opacity-100">
                  <Link className="flex" href="https://www.tiktok.com/@audiofeud" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 512 512">
                      <g>
                        <path fill="#FFFFFF" d="M267.2,0.4C295.2,0,322.9,0.3,350.7,0c1.7,32.7,13.4,65.9,37.3,89c23.9,23.7,57.6,34.5,90.4,38.2v85.9
		c-30.8-1-61.7-7.4-89.6-20.7c-12.2-5.5-23.5-12.6-34.6-19.8c-0.1,62.3,0.3,124.6-0.4,186.7c-1.7,29.8-11.5,59.5-28.9,84.1
		c-27.9,40.9-76.3,67.6-126.1,68.4c-30.5,1.7-61-6.6-87-21.9C68.8,464.5,38.5,417.9,34.1,368c-0.5-10.7-0.7-21.3-0.3-31.7
		c3.8-40.6,23.9-79.4,55.1-105.8c35.3-30.8,84.8-45.4,131.2-36.8c0.4,31.6-0.8,63.2-0.8,94.8c-21.2-6.8-45.9-4.9-64.4,7.9
		c-13.5,8.8-23.8,22.2-29.1,37.3c-4.4,10.8-3.1,22.8-2.9,34.3c5.1,35,38.7,64.4,74.7,61.3c23.8-0.3,46.7-14.1,59.1-34.3
		c4-7.1,8.5-14.3,8.8-22.7c2.1-38.2,1.3-76.2,1.5-114.3C267,171.9,266.6,86.2,267.2,0.4L267.2,0.4z"/>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li className="font-extralight text-opacity-50 hover:text-opacity-80 pb-5 text-xl text-white py-2 px-3 opacity-60 hover:opacity-100">
                  <Link className="flex" href="https://www.youtube.com/@audiofeud" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                      <path fill="#FFFFFF" d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="font-extralight text-opacity-50 hover:text-opacity-80 pb-5 text-xl text-white py-2 px-3 opacity-60 hover:opacity-100">
                  <Link className="flex" href="https://www.linkedin.com/company/audiofeud/" rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                      <path fill="#FFFFFF" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <h1 className="hidden xs:flex m-auto font-waterfall font-normal text-2xl sm:text-3xl md:text-4xl text-white font-bold md:mt-10">
              An all-nighter with a bunch of musicians.
            </h1>
            <h1 className="xs:hidden flex m-auto font-waterfall font-normal text-2xl sm:text-3xl md:text-4xl text-white font-bold md:mt-10">
              An all-nighter with <br /> a bunch of musicians.
            </h1>
            <Email />
            <div className={montserrat.className}>
              <ul className="h-auto items-center flex-row justify-center flex">
                <li>
                  <h1 className="pb-2 text-3xl md:text-6xl text-white py-2 px-8 md:px-20 hover:text-shadow-[0_5px_0_#6633ff]">24</h1>
                  <div className={hankenGrotesk.className}>
                    <p className="font-light text-2xl">hours</p>
                  </div>
                </li>
                <li className='border-r-4 border-l-4 border-white'>
                  <h1 className="pb-2 text-3xl md:text-6xl text-white py-2 px-8 md:px-20 hover:text-shadow-[0_5px_0_#6633ff]">$10k+</h1>
                  <div className={hankenGrotesk.className}>
                    <p className="font-light text-2xl">in prizes</p>
                  </div>
                </li>
                <li>
                  <h1 className="pb-2 text-3xl md:text-6xl text-white py-2 px-8 md:px-20 hover:text-shadow-[0_5px_0_#6633ff]">&infin;</h1>
                  <div className={hankenGrotesk.className}>
                    <p className="font-light text-2xl">vibes</p>
                  </div>
                </li>
              </ul>
            </div>
          </ul>
          <div className="absolute bottom-0 left-0 w-screen">
            <p className="md:block hidden p-4 text-center text-white font-light">Made with &#128156; by the Audiofeud team. Keep children on leash at all times.</p>
            <p className="md:hidden p-4 text-center text-white font-light">Made with &#128156; by the Audiofeud team. <br /> Keep children on leash at all times.</p>
          </div>
          </div>
        </section>
        </div>
      </body>
    </html>
  )
}
