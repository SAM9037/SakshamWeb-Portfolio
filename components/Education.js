"use client";

import React, { useEffect, useRef, useState } from 'react';
import './education.css';

const Education = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const educationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFadeIn(true);
                    observer.disconnect(); // Stop observing after fading in
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (educationRef.current) {
            observer.observe(educationRef.current);
        }

        return () => {
            if (educationRef.current) {
                observer.unobserve(educationRef.current);
            }
        };
    }, []);

    return (
        <div ref={educationRef} className={`education-container ${fadeIn ? 'fade-in' : ''}`}>
            <div className="education-heading">Education</div>
            <div className="education-sub-container">
                <div className="education-card-box">
                    <div className="education-line w-8 h-2"></div>
                    <div className="education-card">
                        <div className="education-card-front-side">
                            <div className="education-card-heading">Galgotias College of Engineering and Technology (2021-25)</div>
                            <div className='flex justify-between w-11/12'>
                                <div className="education-card-field">Field of Study: Bachelor of Technology (CSE)</div>
                                <div className="education-card-content">AKTU Score: 6.4 CGPA</div>
                            </div>
                        </div>
                        <div className="education-card-back-side">
                            <div className="education-card-heading">Achievements</div>
                            <div className="education-card-content">
                                <ul>
                                    <li>Successfully completed 1 month of Internship at Prodigy InfoTech</li>
                                    <li>Successfully completed 1 month of Internship at Codsoft</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-card-box">
                    <div className="education-line w-8 h-2 bg-indigo-200"></div>
                    <div className="education-card">
                        <div className="education-card-front-side">
                            <div className="education-card-heading">Saint John's Schoolo (2019-20)</div>
                            <div className='flex justify-between w-11/12'>
                                <div className="education-card-field">Field of Study: Class XII</div>
                                <div className="education-card-content">ISC Score: 77.44%</div>
                            </div>
                        </div>
                        <div className="education-card-back-side">
                            <div className="education-card-heading">Achievements</div>
                            <div className="education-card-content">
                                <ul>
                                    <li>Won 1st place in inter-school Science Wizard Competition</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-card-box">
                    <div className="education-line w-8 h-2 bg-indigo-200"></div>
                    <div className="education-card">
                        <div className="education-card-front-side">
                            <div className="education-card-heading">Saint John's School (2017-18)</div>
                            <div className='flex justify-between w-11/12'>
                                <div className="education-card-field">Field of Study: Class X</div>
                                <div className="education-card-content">ICSE Score: 80.17%</div>
                            </div>
                        </div>
                        <div className="education-card-back-side">
                            <div className="education-card-heading">Achievements</div>
                            <div className="education-card-content">
                                <ul>
                                    <li>Won 3<sup>rd</sup> position in Obstacle Avoiding Track RoboWar @Techno Fair, SJS</li>
                                    <li>Won 3<sup>rd</sup> position in Rubiks cube Solving Competition @Techno Fair, SJS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
