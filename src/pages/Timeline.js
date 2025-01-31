import React from "react";
import { motion } from "framer-motion";
import "./styles.css"; // Import your CSS file

const Timeline = () => {
  return (
    <section className="about-section">
      <h1 className="title">My Timeline</h1>
      <div className="timeline">
        
        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="timeline-left">
            <div className="timeline-date">August 2021</div>
            <div className="timeline-title">Started College</div>
          </div>
          <div className="timeline-content">
            <p>Enrolled in Computer Engineering and began learning programming.</p>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="timeline-left">
            <div className="timeline-date">June 2024</div>
            <div className="timeline-title">First Internship</div>
          </div>
          <div className="timeline-content">
            <p>Worked as a software development intern in D&L Industries at the Philippines, gaining real-world experience.</p>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="timeline-left">
            <div className="timeline-date">June 2025</div>
            <div className="timeline-title">Graduation</div>
          </div>
          <div className="timeline-content">
            <p>Completed my degree and started my professional journey.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Timeline;
