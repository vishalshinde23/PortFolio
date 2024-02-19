import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 ">
    <Navbar/>
    <Home/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
