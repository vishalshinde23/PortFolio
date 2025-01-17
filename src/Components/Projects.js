"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import { Project } from "../data/Project";
import "aos/dist/aos.css";

const tabsName = ["Mern-Stack", "ReactJs", "JavaScript"];

const SparklesCore = ({ background = "#020617", particleColor = "#ffffff", particleDensity = 120 }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {init && (
        <Particles
          options={{
            background: { color: { value: background } },
            fullScreen: { enable: false },
            fpsLimit: 120,
            particles: {
              number: {
                value: particleDensity,
                density: { enable: true, area: 800 },
              },
              color: { value: particleColor },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 2 },
              opacity: { value: 0.7 },
            },
          }}
        />
      )}
    </div>
  );
};

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
      easing: "ease-in-out",
      once: true, // Animation happens only once when scrolling
    });
  }, []);

  return (
    <div
      name="project"
      className="relative poppins-regular w-full min-h-screen flex flex-col items-center overflow-hidden text-white bg-slate-950"
    >
      {/* Particles Background */}
      <SparklesCore />

      {/* Section Title */}
      <h3
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-center text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mt-16"
      >
        Projects
      </h3>

      {/* Tabs */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="relative shadow-2xl w-[80%] md:w-[700px] p-2 flex flex-col rounded-lg md:flex-row justify-around gap-6 items-center  mt-8 overflow-hidden   hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-500 ease-out"
        style={{ perspective: "1000px" }} // Parallax effect
      >
        {tabsName.map((ele, index) => (
          <div
            key={index}
            className={`group relative p-2 text-md md:text-md font-sm text-center rounded-full cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 ${
              CurrenTab === ele
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-pink-500/50"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setMyCards(ele)}
          >
            <span className="relative z-10 block group-hover:animate-pulse">{ele}</span>
            <div className="absolute inset-0 z-0 rounded-full opacity-30 group-hover:opacity-70 group-hover:scale-110 bg-gradient-to-r from-pink-500 to-purple-600 transition-transform duration-500 ease-out"></div>
            <div className="absolute -inset-1 z-[-1] rounded-full blur-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 transition-opacity duration-700 ease-in-out"></div>
          </div>
        ))}
      </div>

      {/* Project Cards */}
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="w-full max-w-screen-lg grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-10 px-4"
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
