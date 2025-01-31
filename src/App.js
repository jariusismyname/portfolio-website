import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Fixed casing
import Home from './pages/Home';           // Fixed casing
import Projects from './pages/Projects';
import About from './pages/About';         // Fixed casing
import Footer from './components/Footer';
import Timeline from './pages/Timeline';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Footer" element={<Footer />} />   
        <Route path="pages/script" element={<Footer />} />   
        <Route path="timeline" element={<Timeline />} />   

      </Routes>
      
         <Footer />
    </Router>
  );
}

export default App;