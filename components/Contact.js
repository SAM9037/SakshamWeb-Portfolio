"use client";

import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [fadeIn, setFadeIn] = useState(false);
  const contactRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'ContactForm'), {
        Name: formData.name,
        Mail: formData.email,
        Message: formData.message
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Failed to send message. Please try again.');
    }
  };

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div id='contactpage' ref={contactRef} className={`contact-container ${fadeIn ? 'fade-in' : ''}`}>
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="social-media">
          <p>Connect with me:</p>
          <div className="social-media-links">

            <a href="https://github.com/SAM9037" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/saksham-gupta-024095210/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ssakshamgupta61@gmail.com">Mail</a>
            {/* <a href="https://www.instagram.com/amanwadhwani2003/">Instagram</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
