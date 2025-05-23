// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 1.5rem 5%;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-left: 1.5rem;

  a {
    font-size: 1.2rem;
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #646cff;
    }
  }
`;

const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background: rgba(251, 129, 129, 0.95);
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  z-index: 1100;
`;

const CloseIconContainer = styled.div`
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  a {
    color: #2d2d2d;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #646cff;
    }
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      
      <Nav>
         <MobileIcon onClick={() => setMenuOpen(true)}>
          <FiMenu size={28} />
        </MobileIcon>
        <LeftSection>
          <DesktopNavLinks>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/about">About</Link>
          </DesktopNavLinks>
        </LeftSection>

        <SocialLinks>
          <a href="https://github.com/jariusismyname">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/ballesteros-jarius-miguel-c-4b7a43277/">
            <FiLinkedin />
          </a>
          <a href="mailto:jrsmglctpngbllstrs@gmail.com">
            <FiMail />
          </a>
        </SocialLinks>

       
      </Nav>

      <SideNav open={menuOpen}>
        <CloseIconContainer onClick={() => setMenuOpen(false)}>
          <FiX size={28} />
        </CloseIconContainer>
        <MobileNavLinks>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/timeline" onClick={() => setMenuOpen(false)}>Timeline</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </MobileNavLinks>
      </SideNav>
    </HeaderContainer>
  );
}
