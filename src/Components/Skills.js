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
    <div name="skills" className='w-full h-full  mt-5 pt-[50px]    '>
     <h3 smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className=' text-5xl md:text-7xl mt-8  text-center p-8 text-white '>Skills</h3>
     <div className='max-w-screen  grid grid-cols-2 mx-auto ml-[18px] md:ml-[-10px]   md:place-items-center gap-2  md:gap-8  md:grid-cols-4   text-white'>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500"  className="   outline-white p-4 w-[100px] md:w-2/4 rounded-md flex flex-col md:flex-1 h-[320px]  md:h-screen  gap-4">
        <h3 className='text-xl md:text-2xl hover:border-[1px] w-[120px] md:w-[180px]  text-center p-2 rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-black border-white font-bold font-serif'>FrontEnd</h3>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  text-center p-2 rounded-md  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]   hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif  bg-black '>ReactJs</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] bg-black border-white font-bold font-serif'>JavaScript</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black '>HTML5</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black '>TailwindCss</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>CSS</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>REST API</p>

      </div>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className="   outline-white  p-4 w-2/4   rounded-md    h-[320px]  md:h-screen flex flex-col  gap-4">
        <h3 className=' text-xl  md:text-2xl hover:border-[1px] w-[120px] md:w-[180px]  text-center p-2 rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white font-bold font-serif bg-black'>Backend</h3>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>NodeJs</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>ExpressJs</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black '>MongoDB</p>
      </div>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className="   outline-white mt-[100px] md:mt-2 p-4 w-2/4 h-[320px]  md:h-screen rounded-md flex flex-col  gap-4 ">
        <h3 className='text-xl md:text-2xl hover:border-[1px] w-[120px] md:w-[180px]  text-center p-2 rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white font-bold font-serif bg-black'>Others</h3>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>C++</p>
       
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>Data Structures & Algorithms</p>
        
      </div>
      <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" className="  mt-[100px] md:mt-2 outline-white p-4 w-2/4 h-[320px]  md:h-screen rounded-md flex flex-col  gap-4">
        <h3 className='text-xl md:text-2xl w-[160px] md:w-[180px]   text-center p-2 hover:border-[1px] rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white font-bold font-serif bg-black'>Technologies</h3>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>Postman</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>Git</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>Github</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>Render</p>
        <p className='hover:border-[1px] w-[120px] md:w-[180px]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  text-center p-2 rounded-md hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white font-bold font-serif bg-black'>Vercel</p>

      </div>
    
     </div>
      
    </div>
  )
}

export default Skills
