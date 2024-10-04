import React, { useEffect, useState } from 'react';
import { Project } from "../data/Project";
import ProjectCard from './ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabsName = [
  "Mern-Stack",
  "ReactJs",
  "JavaScript"
];

function Projects() {
  const [CurrenTab, SetCurrentTab] = useState(tabsName[0]);
  const [project, setProject] = useState(Project[0].project);
  const [currentCard, setCurrentCard] = useState(Project[0].project[0].heading);

  const setMyCards = (value) => {
    SetCurrentTab(value);
    const result = Project.filter((tab) => tab.tag === value);
    setProject(result[0].project);
    setCurrentCard(result[0].project[0].heading);
  };

  useEffect(() => {
    AOS.init({
      duration: 600, // Fade-up duration
      easing: 'ease-in-out',
      once: true // Animation happens only once when scrolling
    });
  }, []);

  return (
    <div name="project" className="relative text-white w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-700 via-teal-700 to-slate-700 overflow-hidden">
      {/* Background Parallax Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>

      <h3
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-center text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mt-16"
      >
        Projects
      </h3>

      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="relative shadow-2xl w-[90%] md:w-[700px] p-4 flex flex-col rounded-md md:flex-row justify-around gap-4 md:gap-12 items-center bg-gradient-to-r from-gray-800 to-gray-900 mt-6 overflow-hidden"
        style={{ perspective: '1000px' }} // Parallax effect
      >
        {tabsName.map((ele, index) => (
          <div
            className={`group relative p-4 text-[16px] transition-transform transform hover:scale-110 hover:translate-y-[-4px] flex items-center justify-center ${CurrenTab === ele
              ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg shadow-blue-600/50"
              : "text-gray-300"} px-7 py-2 rounded-full cursor-pointer transition-all duration-500 ease-out`}
            key={index}
            onClick={() => setMyCards(ele)}
          >
            {/* Bounce effect on hover */}
            <span className="block group-hover:animate-bounce">{ele}</span>
            
            {/* Stylish border effect */}
            <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out bg-gradient-to-r from-blue-400 to-purple-600"></div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="w-full max-w-screen-lg grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-8 px-4"
      >
        {project.map((data, index) => (
          <ProjectCard
            key={index}
            data={data}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Projects;
