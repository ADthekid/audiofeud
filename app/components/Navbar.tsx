'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full h-20 bg-black fixed top-0 left-0 right-0 z-10 opacity-90">
        <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" onClick={() => {
                    const element = document.getElementById("landing");
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                    }}>
                <button
                  className="p-0 text-gray-700 rounded-md outline-none"
                >
                    <Image
                      src="/navLogo.svg"
                      alt="logo"
                      className="focus:border-none active:border-none"
                      height={50}
                      width={50}
                    />
                </button>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden fixed end-1">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger_button.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center flex-row justify-center md:flex ">
                <li className="pb-5 text-xl text-white py-2 md:px-6 text-center font-medium border-b-2 md:border-b-0  hover:text-blue-600 hover:bg-transparent  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => {
                    setNavbar(!navbar)
                    const element = document.getElementById("about");
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' , inline: 'start' });
                    }
                    }}>
                    about
                  </Link>
                </li>
                <li className="pb-5 text-xl text-white py-2 px-6 text-center font-medium border-b-2 md:border-b-0  hover:text-blue-600 hover:bg-transparent  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#sponsors" onClick={() => {
                    setNavbar(!navbar)
                    const element = document.getElementById("sponsors");
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' , inline: 'start' });
                    }
                    }}>
                    sponsors
                  </Link>
                </li>
                <li className="pb-5 text-xl text-white py-2 px-6 text-center font-medium border-b-2 md:border-b-0  hover:text-blue-600 hover:bg-transparent  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#team" onClick={() => {
                    setNavbar(!navbar)
                    const element = document.getElementById("team");
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' , inline: 'start' });
                    }
                    }}>
                    team
                  </Link>
                </li>
                <li className="pb-5 text-xl text-white py-2 px-6 text-center font-medium border-b-2 md:border-b-0  hover:text-blue-600 hover:bg-transparent  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#register" onClick={() => {
                    setNavbar(!navbar)
                    const element = document.getElementById("register");
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' , inline: 'start', });
                    }
                    }}>
                    register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
          <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
              ${navbar ? 'block' : 'hidden'}`
            }
            >
          <div className='flex justify-center'>
                <Link href="/">
                <button
                  className="p-0 px-2 text-gray-700 rounded-md outline-none"
                >
                    <Image
                      src="/discord.svg"
                      alt="discord"
                      className="focus:border-none active:border-none"
                      height={25}
                      width={25}
                    />
                </button>
              </Link>
              <Link href="/">
                <button
                  className="p-0 px-2 text-gray-700 rounded-md outline-none"
                >
                    <Image
                      src="instagram.svg"
                      alt="instagram"
                      className="focus:border-none active:border-none svg-container"
                      height={25}
                      width={25}
                    />
                </button>
              </Link>
              </div>
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;