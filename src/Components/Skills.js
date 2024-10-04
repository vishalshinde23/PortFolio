import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from './Experience';


function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="relative py-16 px-6 md:px-12 ">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-6"
        >
          My Skills
        </h2>

        {/* Experience Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl text-gray-300 mb-12"
        >
          2 years of experience as a{' '}
          <span className="font-semibold text-yellow-300">MERN Stack Developer</span>{' '}
          at Mind Spark Technology.
        </p>

        {/* Skills Cards */}
        <div data-aos="fade-up" data-aos-delay="600" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Frontend Skills */}
          <div className="relative bg-gradient-to-b from-cyan-200 to-blue-300 rounded-lg p-6 text-left shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">→</span>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png"
              alt="Frontend Skills"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend Skills</h3>
            <p className="text-gray-700">
              React.js <br />
              JavaScript <br />
              Tailwind CSS <br />
              CSS <br />
              REST APIs
            </p>
          </div>

          {/* Backend Skills */}
          <div className="relative bg-gradient-to-b from-cyan-200 to-blue-300 rounded-lg p-6 text-left shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">→</span>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
              alt="Backend Skills"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Backend Skills</h3>
            <p className="text-gray-700">
              Node.js <br />
              Express.js <br />
              MongoDB
            </p>
          </div>

          {/* Other Skills */}
          <div className="relative bg-gradient-to-b from-cyan-200 to-blue-300 rounded-lg p-6 text-left shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">→</span>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/github-1521500-1288242.png"
              alt="Other Skills"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Other Skills</h3>
            <p className="text-gray-700">
              C++ <br />
              Data Structures & Algorithms <br />
              Postman <br />
              Render <br />
              Vercel <br />
              Git
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16">
        
         <Experience/>
        </div>
      </div>
     
    </section>
  );
}

export default Skills;
