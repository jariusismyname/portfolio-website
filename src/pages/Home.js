// // pages/Home.js
// import { motion } from 'framer-motion';
// import styled from 'styled-components';
import Projects from './Projects';
import About from './About';
import Timeline from './Timeline';

// const HeroSection = styled(motion.section)`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 4rem 5%;
//   background: linear-gradient(45deg, #f3f4f6, #ffffff);
// `;

// const HeroContent = styled.div`
//   max-width: 800px;

//   h1 {
//     font-size: 3.5rem;
//     margin-bottom: 1.5rem;
//     color: #2d2d2d;
//   }

//   p {
//     font-size: 1.5rem;
//     color: #4b5563;
//     margin-bottom: 2rem;
//   }
// `;

// const CTAButton = styled(motion.button)`
//   padding: 1rem 2rem;
//   font-size: 1.1rem;
//   background: #646cff;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #4f56d6;
//   }
// `;

// export default function Home() {
//   return (
//     <>
//       <HeroSection
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <HeroContent>
//           <motion.h1
//             initial={{ y: 20 }}
//             animate={{ y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Hi, I'm Jarius
//           </motion.h1>
//           <motion.p
//             initial={{ y: 20 }}
//             animate={{ y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             A creative developer passionate about building digital experiences
//           </motion.p>

//         </HeroContent>
//       </HeroSection>
      
//       <Projects />
//     </>
//   );
// }


// pages/Home.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 5%;
  background: linear-gradient(45deg, #f3f4f6, #ffffff);
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
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
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
`;

// Add these new styled components
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

export default function Home() {
  return (
    <>
    <>
    <>

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
            Hi, I'm Jarius 👋
          </HeroTitle>
          <HeroSubtitle
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full-stack developer specializing in modern web applications
          </HeroSubtitle>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Your existing CTA button */}
          </motion.div>
        </TextContent>

        <ProfileImage
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img 
            src="/images/profile.jpg"  // Path to your image in public folder
            alt="Jarius - Web Developer"
          />
          
       
     </ProfileImage>
     </ContentWrapper>
    </HeroSection>
     
      <Projects />
     </>
     <Timeline/ >
        </>
     
     <About />
        </>
  );
}