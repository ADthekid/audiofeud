'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Footer() {
    const [footer, setFooter] = useState(false);
    return (
        <div>
            <footer className="bg-black opacity-90">
                <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center sm:justify-start">
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
                                        src="/textLogo.svg"
                                        alt="logo"
                                        className="focus:border-none active:border-none"
                                        height={30}
                                        width={164.3834459459}
                                    />
                                </button>
                            </Link>
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                            Copyright &copy; 2022. Made with &#10084; by Audiofeud.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

