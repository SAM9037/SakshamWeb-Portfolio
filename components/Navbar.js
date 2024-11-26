"use client";

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import "./Navbar.css"
import "./utilities.css"

const Navbar = () => {

    const menuImageRef = useRef(null);
    const menuImgRef = useRef(null);
    const menuListRef = useRef(null);

    useEffect(() => {
        const menuImg = menuImgRef.current;
        const menuImage = menuImageRef.current;
        const menuList = menuListRef.current.querySelectorAll('.nav-item');

        const handleMenuClick = async ()=> {
            if (menuImage.src.includes("/media/more.svg")) {
                menuImage.src = "/media/cross.svg";
                for (let index = menuList.length - 1; index >= 0; index--){
                    setTimeout(() => {
                        const element = menuList[index];
                        element.style.opacity = 1;
                        element.style.top = 0;
                    }, 100 * (menuList.length - index - 1));
                }
            }
            else if (menuImage.src.includes("/media/cross.svg")) {
                menuImage.src = "/media/more.svg";
                // console.log(menuList)
                for (let index = 0; index < menuList.length; index++) {
                    setTimeout(() => {
                        // console.log(index)
                        const element = menuList[index];
                        element.style.opacity = 0;
                        element.style.top = "-10vh";
                    }, 100 * index);
                }
            }
        };

        menuImg.addEventListener('click', handleMenuClick);

        return () => {
            menuImg.removeEventListener('click', handleMenuClick);
        };

    }, [])


    return (
        <>
            <nav className="navigation-bar">
                <div className="logo-heading">
                    <a href="/">SakshamWeb</a>
                </div>
                <ul className="nav-items-list" ref={menuListRef}>
                    <a href="#homepage"><li className="nav-item">Home</li></a>
                    <a href="#servicepage"><li className="nav-item">Services</li></a>
                    <a href="#projectpage"><li className="nav-item">Projects</li></a>
                    {/* <li className="nav-item"></li> */}
                    <a href="#contactpage"><li className="nav-item">Contact Me</li></a>
                    <a href="#" ref={menuImgRef} className='more-image'>
                        <li className='nav-more-item'>
                            <Image ref={menuImageRef} id='menu-image' src="/media/more.svg" alt="nahi" width={30} height={30} />
                        </li>
                    </a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

// {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"var(--secondary-color)"} fill={"none"}>
//     <path d="M1 5L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M1 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M1 19L20 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// </svg> */}