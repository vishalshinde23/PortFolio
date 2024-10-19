import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from './Experience';
import bac1 from "../assets/bac2.jpg"

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="relative bg-[#e3f2fd]   py-16 px-6 md:px-12 crelative bg-cover bg-center min-h-screen text-white"
    >
      <div className="container mx-auto border-dotted border-2 border-gray-300 p-4 text-center">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold sm:text-5xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-6"
        >
          My Skills
        </h2>

        {/* Experience Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl font-extrabold sm:text-1xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-12"
        >
          2 years of experience as a{' '}
          <span className="font-semibold text-yellow-300">MERN Stack Developer</span>{' '}
          at Mind Spark Technology.
        </p>

        {/* Skills Cards with Dotted Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8">
  {/* Skill Box Layout */}
  <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-lg p-6 text-left bg-[#e0e4e7] text-gray-800 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-dotted border-2 border-gray-300">
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png"
      alt="Frontend Skills"
      className="w-16 h-16 mb-4"
    />
    <h3 className="text-lg  sm:text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text font-bold mb-2">Frontend Skills</h3>
    <p className='font-bold sm:text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text'>
      React.js <br />
      JavaScript <br />
      Tailwind CSS <br />
      CSS <br />
      REST APIs
    </p>
  </div>

  <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-lg p-6 text-left bg-[#e0e4e7]  text-gray-800 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-dotted border-2 border-gray-300">
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
      alt="Backend Skills"
      className="w-16 h-16 mb-4"
    />
    <h3 className="text-lg sm:text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text font-bold mb-2">Backend Skills</h3>
    <p className='font-bold sm:text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text'>
      Node.js <br />
      Express.js <br />
      MongoDB
    </p>
  </div>

  <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-lg p-6 text-left bg-[#e0e4e7]  text-gray-800 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-dotted border-2 border-gray-300">
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/github-1521500-1288242.png"
      alt="Other Skills"
      className="w-16 h-16 mb-4"
    />
    <h3 className="text-lg  sm:text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text font-bold mb-2">Other Skills</h3>
    <p className='font-bold sm:text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text'>
      C++ <br />
      DSA <br />
      Postman <br />
      Render <br />
      Vercel <br />
      Git
    </p>
  </div>
</div>


        {/* Experience Section with Dotted Border */}
        <div className="mt-16">
          <h2 className="text-4xl md:text-6xl font-extrabold sm:text-5xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-6">
            Professional Experience
          </h2>
          <div className="flex flex-col items-center">
            <div className="relative w-full p-6 bg-[#e0e4e7]  text-gray-800 rounded-lg border-dotted border-2 border-gray-300 mb-6">
              <h3 className="text-4xl md:text-xl font-extrabold sm:text-5xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-6 ">MERN Stack Developer</h3>
              <p className=" mt-2">Mind Spark Technology</p>
              <p className=" mt-2">2022 - Present</p>
              <ul className="list-disc text-xl md:text-xl  sm:text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-6 list-inside mt-2">
                <li>Developed and maintained web applications using React.js and Node.js.</li>
                <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                <li>Participated in code reviews and ensured code quality and best practices.</li>
              </ul>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
