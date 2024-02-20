// import { useEffect } from "react"
import React,{ useEffect }  from 'react'
import Profile from "../assets/Profile.jpeg"
import { TypeAnimation } from 'react-type-animation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

function Home() {

    useEffect(()=>{
        AOS.init({
            duaration:1000
        })
    })

  return (
    <div name="home" className=" w-full h-[500px]  ">
       <div className='max-w-screen h-[500px] py-6  flex flex-col justify-center items-center mx-auto gap-6    md:flex-row text-white  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
     
       <div  smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className=" w-[300px]  md:w-1/2 p-2  block flex-col gap-8 justify-center items-center  mt-10 mx-auto " >
            <h2 data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1000" className=' mt-10 text-3xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold text-center md:text-5xl md:mt-4 mb-4 text-sky-300'>
         HI, I Am Vishal Shinde
            </h2>
            <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000" className=" flex flex-col justify-center items-center mx-auto gap-2 my-4 mt-4 mb-4 ">
            
           <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000" className=" text-[30px]   ml-10 text-center w-[310px] h-[60px]  md:h-[100px] md:w-[500px] md:text-[40px] flex  md:mt-4 md:mb-4">
           <TypeAnimation
  sequence={[
    'Mern-Stack Developer ',
    1000,
    'Full Stack Developer', 
    1000,
    'Coder',
    1000,
    'ReactJs Developer',
    1000,
    
    
  ]}
  style={{  color:'yellow' }}
  repeat={Infinity}
/>

           </div>
           <div className='flex flex-row gap-2'>
                        <Link to="project" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group rounded bg-gradient-to-r from-blue-600 to-cyan-600 w-1/3 h-8 flex items-center justify-center cursor-pointer mt-5 px-2 ' >Portfolio

                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                        <a target='_blank' rel="noreferrer"  href="mailto:vishalshinde18122000@gmail.com" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2500" className='group hover:scale-105 rounded   h-8 px-5 flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-600 justify-center cursor-pointer mt-5 ' >

                            <span className='pr-2    '>
                                <HiOutlineMail size={25} />
                            </span>
                            Hire 
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/vishalshinde12/" smooth duration={550} data-aos="fade-up" data-aos-delay="2000" data-aos-duration="3000" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 ' >

                            <span >
                            <BsLinkedin size={25}></BsLinkedin>
                            </span>
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/vishalshinde23" smooth duration={600} data-aos="fade-up" data-aos-delay="3000" data-aos-duration="3500" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 ' >

                            <span >
                            <BsGithub size={25}></BsGithub>
                            </span>
                        </a>
                       
                    </div>
          
    
            </div>
      </div >
      
    <div className='w-1/3'>
        
            <img src={Profile} alt="my profile"smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className=' bg-blue-900 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg w-[200px]  lg:w-[320px] my-5  hover:scale-105 duration-300 sm:ease-in'/>
       
    </div>
  
        </div>
       </div>
      
    
  )
}

export default Home
