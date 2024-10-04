import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import '../App.css';
import './Home.css'; // Add this file for custom bubble animations
import Man from "../assets/Man.png"

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration for fade
      once: false, // Animation happens every time on scroll
    });
  }, []);

  return (
    <div name="home" className="relative w-full mt-12 md:m-4 lg:m-8 lg:mt-8 h-screen bg-gradient-to-r from-blue-700 via-teal-700 to-slate-700 text-white">
      {/* Bouncing Water Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto h-full flex flex-col md:flex-row items-center justify-between py-6 px-4 gap-6 text-center md:text-left">
        
        {/* Man Image Section */}
        <div className="flex-shrink-0" data-aos="fade-right">
          <img
            src={Man}
            alt="Man"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-3/4 lg:w-8/12">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4"
          >
            Welcome to My Portfolio
          </h1>

          <div className="text-lg md:text-xl w-80 md:w-full  lg:text-2xl text-gray-300 mb-6">
            My name is Vishal Shinde & I am a{' '}
            <span
              data-aos="fade-in"
              className="text-2xl w-68 md:w-32 pb-8 md:text-xl lg:text-2xl font-bold text-gradient-to-r from-green-400 to-blue-500 md:inline inline max-w-60  h-[45px] md:h-[30px] overflow-hidden"
            >
              <TypeAnimation
                sequence={[
                  'MERN-Stack Developer',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'Coder',
                  1000,
                  'ReactJs Developer',
                  1000,
                ]}
                style={{ color: 'yellow', display: 'inline-block', margin: '10px' }}
                repeat={Infinity}
              />
            </span>{' '}
            <p>passionate about building web solutions.</p>
          </div>

          {/* 3D Icons Section */}
          <div className="flex justify-center md:justify-start gap-8 mb-6">
            {/* React Icon */}
            <div data-aos="zoom-in" className="group transform transition duration-500 hover:scale-110">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
                alt="ReactJS"
                className="w-16 h-16 shadow-lg rounded-full border-white border-2px border-dotted"
              />
              <p className="text-xs text-gray-400 mt-2 group-hover:text-white">ReactJS</p>
            </div>
               
            {/* NodeJS Icon */}
            <div data-aos="zoom-in" className="group transform transition duration-500 hover:scale-110">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/nodejs-1-1174935.png"
                alt="NodeJS"
                className="w-16 h-16 shadow-lg rounded-full"
              />
              <p className="text-xs text-gray-400 mt-2 group-hover:text-white">NodeJS</p>
            </div>

            {/* MongoDB Icon */}
            <div data-aos="zoom-in" className="group transform transition duration-500 hover:scale-110">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png"
                alt="MongoDB"
                className="w-16 h-16 shadow-lg rounded-full"
              />
              <p className="text-xs text-gray-400 mt-2 group-hover:text-white">MongoDB</p>
            </div>

            {/* JavaScript Icon */}
            <div data-aos="zoom-in" className="group transform transition duration-500 hover:scale-110">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt="JavaScript"
                className="w-16 h-16 shadow-lg rounded-full border-white border-2px border-dotted"
              />
              <p className="text-xs text-gray-400 mt-2 group-hover:text-white">JavaScript</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full px-4 py-6">
            {/* View My Work Button */}
            <Link to="projects" smooth duration={500} className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 text-center">
                View My Work
              </button>
            </Link>

            {/* Portfolio Link */}
            <Link to="projects" smooth duration={500} className="w-full md:w-auto">
              <div className="group w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 text-center shadow-lg border border-blue-700 hover:border-blue-800">
                Portfolio
                <span className="ml-2 transition-transform group-hover:rotate-90 duration-300">
                  <MdOutlineArrowRightAlt size={25} />
                </span>
              </div>
            </Link>

            {/* GitHub Link */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vishalshinde23"
              className="w-full md:w-auto"
            >
              <div className="group bg-gray-800 px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 text-center shadow-lg border border-gray-700 hover:border-gray-800">
                <BsGithub size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
