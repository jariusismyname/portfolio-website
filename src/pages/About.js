import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling
import { motion } from 'framer-motion';
import styled from 'styled-components';
const HeroSubtitle = styled(motion.p)`
//   font-size: 1.5rem;
//   color: #4b5563;
//   margin-bottom: 2rem;
//   max-width: 600px;

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
`;
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
      <HeroSubtitle
           initial={{ opacity: 0, scale: 0.8 }} 
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>About Us</h2>
        <p>
          Welcome to our platform! We are dedicated to providing you with the best experience possible.
          Our mission is to deliver high-quality services and products that meet your needs and exceed your expectations.
        </p>
        <p>
          Founded in [Year], our team consists of passionate professionals who are experts in their respective fields.
          We believe in innovation, creativity, and the power of technology to transform lives.
        </p>
        <p>
          Whether you're here for the first time or a returning visitor, we're thrilled to have you with us.
          Explore our site to learn more about what we offer and how we can help you achieve your goals.
        </p>
        </HeroSubtitle>
      </div>
    </section>
  );
};

export default About;