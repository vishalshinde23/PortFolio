import React from 'react';

function Experience() {
  return (
    <div className="w-full p-6 poppins-regular bg-gradient-to-r from-blue-300 to-purple-400">
      <h3 data-aos="fade-up" data-aos-delay="900" className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
        Professional Experience
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out transform hover:rotate-2"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/developer-420-1174624.png"
            alt="Experience"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h4 className="text-lg font-bold text-gray-800">
            <span className="text-yellow-500">MERN Stack Developer</span> at Mind Spark Technology
          </h4>
          <p className="text-gray-500">June 2022 - Present</p>
          <ul className="list-disc text-left mt-4 pl-5 text-gray-800">
            <li>Developed scalable web applications using React.js, Node.js, and MongoDB.</li>
            <li>Implemented dynamic user interfaces with Tailwind CSS for enhanced UX/UI.</li>
            <li>Worked on RESTful APIs to ensure seamless data flow between frontend and backend.</li>
          </ul>
        </div>

        {/* Company Logos Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/mind-spark-technology-1174691.png"
              alt="Mind Spark Technology"
              className="w-20 h-20 transition-transform transform hover:scale-110 hover:rotate-3 duration-500"
            />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/codehelp-1174692.png"
              alt="CodeHelp"
              className="w-20 h-20 transition-transform transform hover:scale-110 hover:rotate-3 duration-500"
            />
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg text-gray-100 font-bold">Mind Spark Technology</span>
            <span className="text-lg text-gray-100"> | </span>
            <span className="text-lg text-gray-100 font-bold">MERN Stack Development by codehelp.in</span>
          </div>
        </div>
      </div>

      {/* Parallax Scroll Effect Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-300 to-red-400 mt-16 p-10 rounded-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center parallax-image"></div>
        <div className="relative z-10 text-center text-white">
          <h4 className="text-2xl font-semibold mb-4">Enhancing Experience with Technology</h4>
          <p className="text-lg">We bring the best solutions for every business need with cutting-edge technology and dedication.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
