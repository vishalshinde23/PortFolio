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
      duration: 1000
    });
  }, []);

  return (
    <div name="project" className='text-white w-full min-h-screen mt-14 flex flex-col items-center '>
      <h3
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        className='text-center text-5xl md:my-6 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600'
      >
        Projects
      </h3>

      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        className='shadow-lg w-[90%] md:w-[700px] p-4 flex flex-col rounded-md md:flex-row justify-around gap-4 md:gap-12 items-center bg-gradient-to-r from-gray-800 to-gray-900'
      >
        {tabsName.map((ele, index) => (
          <div
            className={`p-4 text-[16px] flex items-center justify-center ${CurrenTab === ele
              ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg"
              : "text-gray-300"} px-7 py-2 rounded-full transition-transform transform hover:scale-105 cursor-pointer`}
            key={index}
            onClick={() => setMyCards(ele)}
          >
            {ele}
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-duration="1000"
        className='w-full max-w-screen-lg grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-8 px-4'
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
