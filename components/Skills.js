"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './skills.css';

const Skills = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const skillsRef = useRef(null);

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

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div ref={skillsRef} className={`skills-page ${fadeIn ? 'fade-in' : ''}`}>
            <div className="skills-heading font-bold text-6xl text-center">My Expertise</div>
            <div className="skills-container">
                <div className="slots" id='c0'>
                    <div className='language-slot'>
                        <div className="skills-cards">
                            <Image src="/media/html.png" alt='HTML' width={65} height={65} />
                            <div className="skill-name">HTML 5</div>
                            <div className="skill-percentage">90%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/css.png" alt='CSS' width={65} height={65} />
                            <div className="skill-name">CSS 3</div>
                            <div className="skill-percentage">85%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/javascript.png" alt='JavaScript' width={65} height={65} />
                            <div className="skill-name">JavaScript</div>
                            <div className="skill-percentage">80%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/npm.png" alt='Node.js' width={65} height={65} />
                            <div className="skill-name">Node JS</div>
                            <div className="skill-percentage">65%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/sql.png" alt='MySQL' width={65} height={65} />
                            <div className="skill-name">MySQL</div>
                            <div className="skill-percentage">80%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/cpp.png" alt='C++' width={65} height={65} />
                            <div className="skill-name">C++</div>
                            <div className="skill-percentage">60%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/java.png" alt='Java' width={65} height={65} />
                            <div className="skill-name">Java</div>
                            <div className="skill-percentage">70%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/python.png" alt='Python' width={65} height={65} />
                            <div className="skill-name">Python</div>
                            <div className="skill-percentage">90%</div>
                        </div>
                    </div>
                    <div className='slot-name'>Languages</div>
                </div>
                <div className="slots" id='c1'>
                    <div className='library-slot'>
                        <div className="skills-cards">
                            <Image src="/media/tailwind.png" alt='Tailwind CSS' width={65} height={65} />
                            <div className="skill-name">Tailwind CSS</div>
                            <div className="skill-percentage">75%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/react.png" alt='React' width={65} height={65} />
                            <div className="skill-name">React</div>
                            <div className="skill-percentage">80%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/api.png" alt='Express.js' width={65} height={65} className='filter invert' />
                            <div className="skill-name">Express JS</div>
                            <div className="skill-percentage">85%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/nextjs.svg" alt='Next.js' width={65} height={65} className='filter invert' id='filter-inverted' />
                            <div className="skill-name">Next JS</div>
                            <div className="skill-percentage">85%</div>
                        </div>
                    </div>
                    <div className='slot-name'>Library & Frameworks</div>
                </div>
                <div className="slots" id='c2'>
                    <div className='technology-slot'>
                        <div className="skills-cards">
                            <Image src="/media/figma.png" alt='Figma' width={65} height={65} />
                            <div className="skill-name">Figma</div>
                            <div className="skill-percentage">65%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/visual-studio-code.png" alt='VS Code' width={65} height={65} />
                            <div className="skill-name">VS Code</div>
                            <div className="skill-percentage">90%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/wordpress.png" alt='WordPress' width={65} height={65} className='filter invert' />
                            <div className="skill-name">Wordpress</div>
                            <div className="skill-percentage">70%</div>
                        </div>
                        <div className="skills-cards">
                            <Image src="/media/mongo-db.png" alt='MongoDB' width={65} height={65} className='filter invert' />
                            <div className="skill-name">Mongo DB</div>
                            <div className="skill-percentage">75%</div>
                        </div>
                    </div>
                    <div className='slot-name'>Technology</div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
