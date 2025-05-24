// pages/Home.js
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import Projects from './Projects';
import About from './About';
// import Timeline from './Timeline';
import Viewresume from '../components/ResumeViewer';
import FlipCard from '../components/FlipCard';

// Option 1: GlobalStyle to load the font (if not added via index.html)
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
`;

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  background: linear-gradient(0deg, rgb(255, 255, 254), rgb(109, 55, 11));
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;
  padding: 0 5%; /* Add padding to the sides */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 2rem; /* Adjust padding for smaller screens */
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const ProfileImage = styled(motion.div)`
  flex: 1;
  max-width: 400px;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #2d2d2d;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Styled component for the fancy cursive text
const FancyText = styled.span`
  font-family: 'Georgia', serif;
  font-size: 2em;
  color:rgb(255, 255, 255); /* A darker, formal brown shade */
`;

const NameText = styled.span`
  font-family: 'Georgia', serif;
  font-size: 2em;
  color:rgb(143, 221, 247); /* A darker, formal brown shade */
`;
const JustifiedParagraph = styled.p`
  font-family: 'Georgia', serif;
  font-size: 1.5em;
  color: #4B3B2B;
  text-align: justify;
`;


export default function Home() {
  return (
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 2 }}
    >
    <>
      {/* Ensure the font is loaded */}
      <GlobalStyle />
      
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ContentWrapper>
          <TextContent>
            <HeroTitle
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
             <FancyText>  Hi, I'm </FancyText><NameText>Jarius </NameText>
            </HeroTitle>
            <JustifiedParagraph
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
My four-year journey as a Computer Engineering student has been both challenging and rewarding. I built a strong foundation in programming and electronics, faced setbacks like failing a subject, and learned to bounce back with resilience. Through hands-on projects such as a library system, POS app, RC car, and a Raspberry Pi translator, I developed practical skills in both hardware and software. Despite personal and academic struggles, I pushed through and discovered a deeper passion for building real-world solutions. These experiences have shaped me into a more skilled, adaptable, and determined future engineer.

          <  Viewresume /></JustifiedParagraph>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Your CTA button or other components can go here */}
            </motion.div>
          </TextContent>

          
                  <FlipCard />

        </ContentWrapper>
      </HeroSection>

      <Projects />
      {/* <Timeline /> */}
      <About />
    </>
    </motion.div>
  );
}
