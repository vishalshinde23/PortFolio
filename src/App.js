import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import bac1 from "./assets/bac2.jpg"; // Compressed and optimized image
import { Element, scroller } from 'react-scroll'; // Import from react-scroll

// Lazy load the components
const Home = lazy(() => import('./Components/Home'));
const Projects = lazy(() => import('./Components/Projects'));
const Skills = lazy(() => import('./Components/Skills'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));

function App() {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div 
      className="relative bg-cover bg-center min-h-screen  text-white"
      style={{ 
         // Set the compressed background image
        backgroundAttachment: 'fixed',  // Parallax effect
        backgroundSize: 'cover'         // Ensure full coverage
      }}
    >
      {/* Apply a 3D parallax effect */}
      <div className="absolute inset-0  ">
        <Navbar scrollToSection={scrollToSection} />
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
          <Element name="home" className="element">
            <Home />
          </Element>
          <Element name="projects" className="element">
            <Projects />
          </Element>
          <Element name="skills" className="element">
            <Skills />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
