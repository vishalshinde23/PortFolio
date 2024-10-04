import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Element, scroller } from 'react-scroll'; // Import from react-scroll
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
    <div className="bg-gradient-to-r from-blue-700 via-teal-700 to-slate-700 text-white min-h-screen">
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
  );
}

export default App;
