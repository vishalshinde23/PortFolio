import React,{useEffect, useState} from 'react'
import {Project} from "../data/Project"
import ProjectCard from './ProjectCard';
import AOS from 'aos'
import 'aos/dist/aos.css'


const tabsName=[
  "Mern-Stack",
  "ReactJs",
  "JavaScript"
 
]
function Projects() {
   const[CurrenTab,SetCurrentTab]=useState(tabsName[0]);
   const[project,setProject]=useState(Project[0].project);
   const[currentCard,setCurrentCard]=useState(Project[0].project[0].heading)
   const setMyCards=(value)=>{
    SetCurrentTab(value);
    const result=Project.filter((tab) =>tab.tag==value);
    setProject(result[0].project);
    setCurrentCard(result[0].project[0].heading)

   }
   useEffect(()=>{
    AOS.init({
      duration:1000
    })
   })

  return (
    <div name="project" className= ' text-white w-full min-h-min flex flex-col items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  gap-10 mb-8 '>
      <h3 smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className='text-center my-6   text-6xl '>
         Projects
      </h3>
      <div   smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className=' shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-[200px] p-4 md:w-[600px] flex flex-col rounded-md  md:flex-row justify-between gap-12 items-center bg-gradient-to-r from-black to-blue-900'>
        {
          tabsName.map((ele,index)=>(
            <div className={` p-4 text-[16px] flex flex-row items-center gap-2 ${
              CurrenTab==ele ?"bg-slate-600 text-white font-medium":"text-white "
            }
            }px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-blue-900 hover:text-white`}key={index}
            onClick={()=>setMyCards(ele)}>
              {ele}
              </div>
          ))
        }
      </div>
      <div   smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className=" max-w-screen grid grid-cols-1     place-items-center   gap-8  md:grid-cols-3 mb-8">
        {project.map((data, index) => {
          return (
            <ProjectCard
              key={index}
              data={data}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Projects
