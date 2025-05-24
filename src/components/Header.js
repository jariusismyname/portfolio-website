// Header.js
import React from 'react';
// import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdFeedback } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const HeaderContainer = styled.header`
  padding: 2.5rem 5%;
  background: linear-gradient(to right,#4B3B2B,rgb(130, 92, 63));
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

  @media (max-width: 768px) {
    display: none;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left: 1rem; /* adjust to control horizontal position */
    top: 1.5rem;
    z-index: 1200;
  }
`;




const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background: rgba(251, 129, 129, 0.95);
  transition: left 0.3s ease;
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




// (your styled-components remain unchanged...)

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <HeaderContainer>
     
           <Nav>
       <MobileIcon onClick={() => setMenuOpen(!menuOpen)}>
  <FiMenu size={28} />
</MobileIcon>

          

        <LeftSection>
      <DesktopNavLinks>
  <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
    <FaHome /> Home
  </NavLink>
  <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
    <GoProjectSymlink /> Projects
  </NavLink>
  <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
    <FcAbout /> About
  </NavLink>
  <NavLink to="/timeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
    <MdFeedback /> Feedback
  </NavLink>
</DesktopNavLinks>

        </LeftSection>

        <SocialLinks>
          <a href="https://github.com/jariusismyname"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/ballesteros-jarius-miguel-c-4b7a43277/"><FiLinkedin /></a>
          <a href="mailto:jrsmglctpngbllstrs@gmail.com"><FiMail /></a>
        </SocialLinks>
      </Nav>

      <SideNav open={menuOpen}>
        <CloseIconContainer onClick={() => setMenuOpen(false)}>
          <FiX size={28} />
        </CloseIconContainer>
        <MobileNavLinks>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><FaHome /> Home</ NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><GoProjectSymlink /> Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><FcAbout /> About</NavLink>
          <NavLink to="/timeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><MdFeedback /> Feedback</NavLink>

        </MobileNavLinks>
      </SideNav>
    </HeaderContainer>
  );
}
