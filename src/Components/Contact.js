import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { addFile } from '../services/AddFile';
import AOS from 'aos';
import 'aos/dist/aos.css';

const api = process.env.REACT_APP_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await addFile(formData);

    if (res?.status === 200) {
      toast.success('Message sent successfully!');
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } else {
      toast.error('Failed to send message.');
    }
  };

  return (
    
     
    <section name="contact" className="relative  text-white py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-800 opacity-60 -z-10"></div>
      <div className="flex flex-col items-center justify-center gap-6 mx-auto max-w-4xl">
        <p className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          Contact Me
        </p>
      
        <section class="container ml-8 mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
    <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <img class="  hidden lg:block rounded-md  bg-white p-2  md:ml-[-160px] md:max-w-5xl xl:max-w-6xl" src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1860" alt=""/>
        <div class="content lg:absolute top-[200px] w-full lg:right-5 mt-4 md:mt-10 px-4  md:w-[calc(100%-30%)] lg:w-[calc(100%-45%)] lg:ml-[-10px]">
            
            <h2 class="text-3xl font-semibold mt-4 md:mt-10">Coffee From Heaven</h2>
            <form className="bg-gradient-to-r from-emerald-400 via-teal-400 to-gray-400 p-4 rounded-md space-y-4"  onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-100">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 shadow-lg transition-transform transform hover:scale-105"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 shadow-lg transition-transform transform hover:scale-105"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-100">Message</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 h-40 resize-none shadow-lg transition-transform transform hover:scale-105"
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 py-3 rounded-lg font-medium shadow-lg transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
</section>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
          className="w-full bg-white rounded-lg shadow-lg p-6 md:p-8 bg-opacity-10 backdrop-blur-lg"
        >
          <h1 className="text-2xl font-bold leading-tight text-center text-gray-100">
            Let's Chat!
          </h1>
         
        </div>
      </div>
    </section>
  );
}

export default Contact;
