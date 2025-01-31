// components/Footer.js
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const FooterContainer = styled(motion.footer)`
  background: #2d2d2d;
  color: white;
  padding: 4rem 5%;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
`;

const FooterSection = styled.div`
  h3 {
    color: #646cff;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #646cff;
      transform: translateY(-2px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  svg {
    flex-shrink: 0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  opacity: 0.8;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <FooterContent>
        <FooterSection>
          <h3>Jarius</h3>
          <p>Full-stack developer creating digital experiences with modern technologies.</p>
          <SocialLinks>
            <a href="https://github.com/jariusismyname" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ballesteros-jarius-miguel-c-4b7a43277/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="mailto:jrsmglctpngbllstrs@gmail.com">
              <FiMail />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <ContactInfo>
            <div>
              <FiMail />
              <span>jrsmglctpngbllstrs@gmail.com</span>
            </div>
            <div>
              <FiPhone />
              <span>+63 (9667) 148 - 056</span>
            </div>
            <div>
              <FiMapPin />
              <span>Antipolo, Philippines</span>
            </div>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Jarius. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}