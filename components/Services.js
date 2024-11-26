"use client"; // Add this line to declare the component as a client component

import React, { useEffect, useRef, useState } from 'react';
import './services.css';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const servicesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(servicesRef.current);
            }
        });

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    return (
        <div id='servicepage' 
            className={`services-container flex flex-col ${isVisible ? 'visible' : ''}`} 
            ref={servicesRef}
        >
            <div className="heading font-bold text-center">What I can do for you</div>
            <div className="all flex">
                <div className="service-cards lefter">
                    <div className="services-text">
                        Hosting & Deployment
                    </div>
                </div>
                <div className="service-cards left">
                    <div className="services-text">
                        Maintenance & Optimization
                    </div>
                </div>
                <div className="service-cards center">
                    <div className="services-on-hover">Services</div>
                    <div className="services-text">
                        Full Stack Development
                    </div>
                </div>
                <div className="service-cards right">
                    <div className="services-text">
                        SEO Optimization
                    </div>
                </div>
                <div className="service-cards righter">
                    <div className="services-text">
                        Database Integration
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
