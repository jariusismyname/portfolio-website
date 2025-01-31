// components/Header.js
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 1.5rem 5%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  a {
    color: #2d2d2d;
    text-decoration: none;
    margin: 0 1.5rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #646cff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 1.2rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/about">About</Link>
        </div>
        <SocialLinks>
          <a href="https://github.com/jariusismyname"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/ballesteros-jarius-miguel-c-4b7a43277/"><FiLinkedin /></a>
          <a href="mailto:jrsmglctpngbllstrs@gmail.com"><FiMail /></a>
        </SocialLinks>
      </Nav>
    </HeaderContainer>
  );
}


