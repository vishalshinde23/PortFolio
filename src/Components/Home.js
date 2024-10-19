import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import '../App.css';
import './Home.css'; // Add custom styles here
import Man from "../assets/Man.png";
import bac1 from "../assets/bac2.jpg"

function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration for fade
      once: false, // Animation happens every time on scroll
    });

    // Hide welcome message after 1 second
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#e3f2fd] flex  items-center justify-center bg-cover bg-center min-h-screen"
   >
      {/* Welcome Message Overlay */}
      {showWelcome && (
        <div className="absolute inset-0 bg-[#124E66] flex items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-6xl  transition duration-1000">
          Welcome to the Portfolio
        </div>
      )}

      {/* Main Content */}
      <div className={`mx-auto max-w-screen-xl  flex flex-col lg:flex-row items-center justify-between  border-dotted border-2 gap-12 px-6 py-12 lg:h-screen transition duration-1000 ${showWelcome ? 'opacity-0 blur-md' : 'opacity-100'}`}>
        
        {/* Centered Image with Box Shadow */}
        <div className="relative flex-shrink-0 mx-auto" data-aos="fade-right">
          <img
            src={Man}
            alt="Man"
            className=" w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full shadow-lg object-cover border-dotted border-2 border-gray-600 transform hover:scale-105 transition-transform duration-500"
            style={{
              boxShadow: '0 20px 30px rgba(0, 0, 0, 0.7), 0 10px 20px rgba(255, 255, 255, 0.3)',
            }}
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-xl">
        <h1 className="text-4xl hidden md:block font-extrabold sm:text-5xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-4">
  Welcome to My Portfolio
</h1>


          {/* TypeAnimation */}
          <div className="text-xl sm:text-2xl lg:text-3xl mb-6 text-gray-900">
            My name is Vishal Shinde & 
            <p className=" block font-bold text-gray-900">
              <span>I am a</span>{' '}
              <TypeAnimation
                sequence={[
                  'MERN-Stack Developer',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'ReactJs Developer',
                  1000,
                ]}
                repeat={Infinity}
                wrapper="span"
                className="inline-block"
                style={{ color: 'blue', marginLeft: '10px' }}
              />
            </p>
            passionate about building web solutions.
          </div>

          {/* Icons Section with Gradient Box Shadows */}
          <div className="flex justify-center lg:justify-start gap-8 mb-6">
            {[
              {
                src: 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png',
                label: 'ReactJS',
              },
              {
                src: 'https://cdn.iconscout.com/icon/free/png-256/nodejs-1-1174935.png',
                label: 'NodeJS',
              },
              {
                src: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png',
                label: 'MongoDB',
              },
              {
                src: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png',
                label: 'JavaScript',
              },
            ].map((icon, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="group transform transition rounded-full duration-500  hover:scale-110"
                style={{
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(255, 215, 0, 0.3)',
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.label}
                  className="w-16 h-16 border-dotted border-2 shadow-lg rounded-full"
                />
                <p className="text-xs text-gray-900 mt-2 group-hover:text-white">
                  {icon.label}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
            {/* View My Work Button */}
            <Link to="projects" smooth duration={500} className="w-full lg:w-auto">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-[#4489D2] to-[#124E66] text-gray-900 font-semibold rounded-lg hover:bg-[#2E3944] border-dotted border-2 transition duration-300 text-center">
                View My Work
              </button>
            </Link>

            {/* Portfolio Link */}
            <Link to="projects" smooth duration={500} className="w-full lg:w-auto">
              <div className="group w-full px-4 py-2 bg-gradient-to-r from-[#124E66] to-[#4489D2] rounded-lg flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 border-dotted border-2 text-center shadow-lg">
                Portfolio
                <span className="ml-2 transition-transform group-hover:rotate-90 duration-300">
                  <MdOutlineArrowRightAlt size={25} />
                </span>
              </div>
            </Link>

            {/* GitHub Link */}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/vishalshinde23" className="w-full lg:w-auto">
              <div className="group bg-[#2E3944] px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer transition-transform border-dotted border-2 transform hover:scale-105 text-center shadow-lg">
                <BsGithub size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
