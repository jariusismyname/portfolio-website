import React, { useState } from 'react';
import './FlipCard.css';
import styled from 'styled-components';


// const img = styled.img`
//   width: 200px;
//   height: auto;
//   object-fit: contain;
// `;
const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="flip-card"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        
       <div className="flip-card-front">
  <img 
    src="/images/profile.png" 
    alt="Profile" 
    className="card-image"
  />
  <div className="front-content">
    <h2>(Hover Me!)</h2>
    {/* other content */}
  </div>
</div>



        <div className="flip-card-back">
          <h2>Call me Jarius!</h2>
          <p>I am a fullstack developer.</p>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
