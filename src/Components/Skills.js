import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className=" py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-6"
        >
          My Skills
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl text-gray-300 mb-12"
        >
          2 years of experience as a{' '}
          <span className="font-semibold text-yellow-300">MERN Stack Developer</span>{' '}
          at Mind Spark Technology.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Frontend Skills */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Frontend Skills</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="skill-item">React.js</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">Tailwind CSS</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">REST APIs</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Backend Skills</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="skill-item">Node.js</li>
              <li className="skill-item">Express.js</li>
              <li className="skill-item">MongoDB</li>
            </ul>
          </div>

          {/* Other Skills */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Other Skills</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="skill-item">C++</li>
              <li className="skill-item">Data Structures & Algorithms (DSA)</li>
              <li className="skill-item">Postman</li>
              <li className="skill-item">Render</li>
              <li className="skill-item">Vercel</li>
              <li className="skill-item">Git</li>
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <h3
            data-aos="fade-up"
            data-aos-delay="900"
            className="text-3xl font-extrabold text-gray-100 mb-4"
          >
            Professional Experience
          </h3>
          <div className="bg-gray-800 shadow-xl rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-yellow-300">MERN Stack Developer</span> at Mind Spark Technology
              <br />
              <span className="text-gray-500">June 2022 - Present</span>
            </p>
            <ul className="list-disc text-left mt-4 pl-5 text-gray-300">
              <li>Developed scalable web applications using React.js, Node.js, and MongoDB.</li>
              <li>Implemented dynamic user interfaces with Tailwind CSS for enhanced UX/UI.</li>
              <li>Worked on RESTful APIs to ensure seamless data flow between frontend and backend.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
