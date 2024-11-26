"use client";

import React, { useEffect, useRef, useState } from 'react';
import './projects.css';

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div id='projectpage' ref={projectsRef} className={`projects-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="projects-heading font-bold text-center pt-14">Projects</div>
      <div className="projects-card-container">
        <div className="projects-cards p-c-1">
          <div className="card-content">
            <h3>Spotify Clone</h3>
            <p>HTML5, CSS3, JavaScript(React), Node, Express</p>
            <a href="https://github.com/amanwadhwani2003/WadhwaniWeb-SpotifyClone.dev">View Project</a>
          </div>
        </div>
        <div className="projects-cards p-c-2">
          <div className="card-content">
            <h3>Netflix Clone</h3>
            <p>HTML5, CSS3, Tailwind, Vanilla JavaScript</p>
            <a href="https://github.com/amanwadhwani2003/WadhwaniWeb-NetflixClone">View Project</a>
          </div>
        </div>
        <div className="projects-cards p-c-3">
          <div className="card-content">
            <h3>Employee Database</h3>
            <p>HTML5, CSS3, JavaScript(React), Node, Express, REST API, Next.js</p>
            <a href="https://github.com/amanwadhwani2003/Girman-aman-wadhwani">View Project</a>
          </div>
        </div>
        <div className="projects-cards p-c-4">
          <div className="card-content">
            <h3>IOS Calculator</h3>
            <p>HTML5, CSS3, Tailwind, JavaScript(React)</p>
            <a href="https://github.com/amanwadhwani2003/CODSOFT/tree/main/L1-T3-Calculator">View Project</a>
          </div>
        </div>
        <div className="projects-cards p-c-5">
          <div className="card-content">
            <h3>Company Analysis</h3>
            <p>MySQL, php my admin, oracle</p>
            <a href="https://github.com/amanwadhwani2003/Unicorn-Companies-Analysis">View Project</a>
          </div>
        </div>
        <div className="projects-cards p-c-6">
          <div className="card-content">
            <h3>Coronopedia</h3>
            <p>Python(Matplotlib, pandas, numpy, tkinter, turtle, etc.), MySQL</p>
            <a href="https://github.com/amanwadhwani2003/Coronopedia">View Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
