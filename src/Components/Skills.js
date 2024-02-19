import React, { useEffect } from 'react'
// import  Profile from "../assets/Profile.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';



function Skills() {
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })
  return (
    <div name="skills" className='w-full min-h-screen  mt-5   '>
     <h3 smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className='text-7xl mt-8  text-center p-8 text-white'>Skills</h3>
     <div className='max-w-screen  grid grid-cols-1     place-items-center   gap-8  md:grid-cols-4   text-white'>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500"  className="   outline-white p-4 w-2/4 rounded-md flex flex-col h-[260px]  gap-4">
        <h3 className='text-2xl hover:border-[1px] w-[180px]  text-center p-2 rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white font-bold font-serif'>FrontEnd</h3>
        <p className='hover:border-[1px] w-[180px]  text-center p-2 rounded-md  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]   hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>ReactJs</p>
        <p className='hover:border-[1px] w-[180px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>JavaScript</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>HTML5</p>
        <p className='hover:border-[1px] w-[180px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>TailwindCss</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>CSS</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>REST API</p>

      </div>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className="   outline-white  p-4 w-2/4 h-[260px]  rounded-md flex flex-col  gap-4">
        <h3 className='text-2xl hover:border-[1px] w-[180px]  text-center p-2 rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white font-bold font-serif'>Backend</h3>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>NodeJs</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>ExpressJs</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>MongoDB</p>
      </div>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className="   outline-white p-4 w-2/4 h-[260px] rounded-md flex flex-col  gap-4">
        <h3 className='text-2xl hover:border-[1px] w-[180px]  text-center p-2 rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white font-bold font-serif'>Others</h3>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>C++</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>C</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>Data Structures & Algorithms</p>
        
      </div>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className="   outline-white p-4 w-2/4 h-[260px] rounded-md flex flex-col  gap-4">
        <h3 className='text-2xl w-[180px]  text-center p-2 hover:border-[1px] rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white font-bold font-serif'>Technologies</h3>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>Postman</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>Git</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>Github</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>Render</p>
        <p className='hover:border-[1px] w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif'>Vercel</p>

      </div>
    
     </div>
      
    </div>
  )
}

export default Skills
