import React,{useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { addFile } from '../services/AddFile'
import AOS from 'aos';
import 'aos/dist/aos.css';


const api=process.env.REACT_APP_URL

function Contact() {
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })
 useEffect(()=>{
  AOS.init({
    duration:1000
  })
 })

  const {name,email,message}=formData;

  const handleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}) ) }

    const onSubmit=async(e)=>{
      e.preventDefault();
      const res=await addFile(formData)

    
      // console.log("this is res",res?.data)
      setFormData({
        name:"",
        email:"",
        message:""
      });

    }

  return (
    <section  name="contact" class=" h-[980px]  mt-[180px] md:mt-[-240px]    dark:bg-gray-900">
    <div  class="flex flex-col items-center justify-center gap-6 px-6   mx-auto md:h-full lg:py-0">
        <p href="#" class="flex  pb-6   text-6xl font-semibold text-gray-50 dark:text-[#EDF4F2]">
           Let's Chat     
        </p>
        <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" class="w-full bg-blue-900 outline-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div smooth duration={500} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                    Send Email to me For contact
                </h1>
                <form class="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit}>
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Your name</label>
                        <input type="name" name="name" id="name"  value={name} onChange={handleChange} class="bg-blue-900 outline-white border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your name" required="" />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" value={email}  onChange={handleChange} class="bg-blue-900 outline-white  border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-white">message</label>
                        <textarea name="message" id="message" value={message} placeholder="my message" onChange={handleChange} class="bg-blue-900 outline-white  resize-none border   border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    
                    <button type="submit" class="w-full bg-slate-600 text-white  p-4 py-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Contact
