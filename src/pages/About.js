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
            <h2>About Me</h2>
        <p>
          My four-year journey as a Computer Engineering student has been both challenging and rewarding. I built a strong foundation in programming and electronics, faced setbacks like failing a subject, and learned to bounce back with resilience. </p>
        <p>
         Through hands-on projects such as a library system, POS app, RC car, and a Raspberry Pi translator, I developed practical skills in both hardware and software.   </p>
        <p>
         Despite personal and academic struggles, I pushed through and discovered a deeper passion for building real-world solutions. These experiences have shaped me into a more skilled, adaptable, and determined future engineer.   </p>
        </HeroSubtitle>
      </div>
    </section>
  );
};

export default About;