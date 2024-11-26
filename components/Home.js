"use client"

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import "./home.css"
import "./utilities.css"

const Home = () => {
    const statement = "A web developer focused on building responsive, efficient, and visually engaging applications. I specialize in creating clean, scalable code and intuitive user experiences, ready to tackle your next challenge.";
    const typingRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < statement.length) {
                typingRef.current.innerHTML += statement.charAt(index);
                setIndex((prevIndex) => prevIndex + 1);
            }
        }, 40);

        return () => clearTimeout(timeout);
    }, [index, statement]);

    return (
        <>
            <div id='homepage' className="home-container flex justify-evenly align-middle">
                <div className="left flex flex-col justify-center items-stretch">
                    <h1 className="heading text-4xl font-bold">Hey, I&apos;m Saksham Gupta</h1>
                    <p ref={typingRef} className="content" id='typing-element'></p>
                    <a className='download-link w-fit' href="/media/Resume_Saksham_Gupta.pdf" download="Resume_Saksham_Gupta.pdf">
                        <button type="button" className='download-button px-5 py-2 font-bold text-lg rounded-lg'>Download CV</button>
                    </a>
                </div>
                <div className="right">
                    <Image className='main-pic' src="/media/portfoliopic.png" alt='Error loading Profile' width={50} height={50} loading='lazy' />
                </div>
            </div>
        </>
    )
}

export default Home
