import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import '../App.css';
import Profile2 from "../assets/Profile2.jpg"

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-fixed bg-cover bg-center text-white">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col md:flex-row items-center justify-center py-6 px-4 gap-6">
        {/* Custom Element Section */}
        <div
          data-aos="fade-up"
          className="flex justify-center items-center w-full md:w-1/2"
        >
          {/* Rotating Box */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg transform hover:rotate-12 transition-transform duration-500 hover:scale-105 flex justify-center items-center">
            <img src={Profile2} className=" w-full h-full rounded-md text-3xl font-bold text-white text-center"/>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="flex p-2 md:mt-[120px] flex-col items-center text-center md:text-left md:items-start w-full md:w-1/2">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4"
          >
            Welcome to My Portfolio
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 text-center">
            My name is Vishal Shinde & I am a{' '}
            <span
              data-aos="fade-in"
              className="text-lg md:text-xl lg:text-2xl font-bold text-gradient-to-r from-green-400 to-blue-500 inline-block w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-[40px] md:h-[40px] lg:h-[40px] overflow-hidden"
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
                style={{ color: 'yellow', display: 'inline-block' }}
                repeat={Infinity}
              />
            </span>{' '}
            passionate about building web solutions.
          </p>

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
