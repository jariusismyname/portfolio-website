// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
// import Timeline from './pages/Timeline';
import About from './pages/About';
import styled from 'styled-components';

const MainContent = styled.div`
  margin-left: ${({ open }) => (open ? '250px' : '0')};
  transition: margin-left 0.3s ease;
  padding-top: 80px; /* adjust for fixed header */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ensures full screen height */
`;


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <MainContent open={menuOpen}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
            </MainContent>

    </Router>
  );
}

export default App;
