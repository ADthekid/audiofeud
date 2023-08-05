'use client'
import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Montserrat } from 'next/font/google'
const initState = {
    email: "",
}

const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

function Email() {
    const [data, setData] = useState(initState)
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(JSON.stringify(data))
        const { email } = data

        // Send data to API route 
        const res = await fetch('http://audiofeud.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })

        setData({email: ""});
        setIsSubmitted(true);

        const result = await res.json()
        console.log(result)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                <div className={montserrat.className}>
                    <label className="text-7xl sm:text-7xl md:text-8xl font-bold text-shadow-[0_9px_0_#6633ff]" htmlFor="email">TUNE IN! &#127911;&#129304;&#128266;</label>
                </div>
                <div className="w-full">
                    <input
                        required
                        className="placeholder-indigo-300 p-3 md:p-5 mb-6 mt-4 text-lg md:text-2xl rounded-l-full text-indigo-900 w-3/5 focus:outline-none"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jane@yoursite.com"
                        pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <button className="bg-indigo-600 text-lg md:text-2xl font-normal text-white font-bold p-3 md:p-5 rounded-r-full" disabled={isSubmitted} type="submit">Oh yeah.</button>
                </div>
            </form>
        </div>
    );
}

export default Email;

