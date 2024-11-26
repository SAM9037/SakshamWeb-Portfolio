"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './certificates.css';

const Certificates = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const certificatesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFadeIn(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (certificatesRef.current) {
            observer.observe(certificatesRef.current);
        }

        return () => {
            if (certificatesRef.current) {
                observer.unobserve(certificatesRef.current);
            }
        };
    }, []);

    return (
        <div ref={certificatesRef} className={`certificates-page ${fadeIn ? 'fade-in' : ''}`}>
            <div className="certificates-heading text-6xl font-bold text-center pt-14">Certifications</div>
            <div className="certificates-container">
                <div className="certificate-card cn-1 HOVER">
                    <div className="certificate-name">Understanding Java Full Stack Development</div>
                    <div className="from-word">from</div>
                    <Image src="/media/datacamp-logo.png" alt="DataCamp" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: Java | SpringBoot</div>
                </div>
                <div className="certificate-card cn-2 HOVER">
                    <div className="certificate-name">DSA Using Java</div>
                    <div className="from-word">from</div>
                    <Image src="/media/datacamp-logo.png" alt="DataCamp" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: IDE | Eclipse</div>
                </div>
                <div className="certificate-card cn-3 HOVER">
                    <div className="certificate-name">Intermediate SQL</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: MySQL | PHP MyAdmin</div>
                </div>
                <div className="certificate-card cn-4 HOVER">
                    <div className="certificate-name">Python(Basics)</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: VS Code | Python</div>
                </div>
                <div className="certificate-card cn-5 HOVER">
                    <div className="certificate-name">NoSQL Databases</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: VS Code | MongoDB</div>
                </div>
                <div className="certificate-card cn-6 HOVER">
                    <div className="certificate-name">Artificial Intelligence Fundamentals</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: VS Code | Machine Learning</div>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
