'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Footer() {
    const [footer, setFooter] = useState(false);
    return (
        <div className="overflow-x-hidden">
            <footer className="bg-indigo-600 text-center lg:text-left">
                <div className="p-4 text-center text-white font-light text-break">
                    Made with love by the Audiofeud team. All children must be on-leash at all times.
                </div>
            </footer>
        </div>
    );
}

export default Footer;

