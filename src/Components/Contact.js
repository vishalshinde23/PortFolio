import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { addFile } from '../services/AddFile';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineMail } from 'react-icons/hi'; // Import contact icon
import bac1 from "../assets/bac2.jpg"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
    <section name="contact" className=" bg-[#e3f2fd]  lg:px-16 relative   py-16 px-6 md:px-12 crelative bg-cover bg-center min-h-screen "
    style={{ 
      backgroundImage: `url()`, // Set the compressed background image
      backgroundAttachment: 'fixed',  // Parallax effect
      backgroundSize: 'cover'         // Ensure full coverage
    }}>
      <div className="absolute inset-0 bg-white   text-gray-900  opacity-70 -z-10"></div>
      <div className="flex flex-col items-center justify-center mx-auto border-dotted border-2 border-gray-300 p-6 max-w-5xl">
        <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4489D2] via-[#D3D9D4] to-[#4489D2] mb-6">
          Contact Me
        </h1>

        <p className="text-lg text-gray-900 text-center mb-4">
          I'm here to help! Feel free to reach out for collaborations, projects, or just a chat.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 w-[80vw] md:w-9/12 ">
          <div className="flex-1 ">
            <h2 className="text-3xl font-semibold mt-4 md:mt-0 mb-4 text-center">Get In Touch</h2>
            <form className=" bg-[#e0e4e7]  text-gray-900 p-4 rounded-md border-dotted border-2 space-y-4 " onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  className=" border-b-[3px] border-dotted border-gray-700    text-gray-900 rounded-lg  focus:ring-[#4489D2] focus:border-[#4489D2] block w-full p-3  outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className=" border-b-[3px] border-dotted border-gray-900  rounded-lg focus:ring-[#4489D2] focus:border-[#4489D2] block w-full p-3  "
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
                  className="border-b-[3px] border-dotted border-gray-900 text-white rounded-lg focus:ring-[#4489D2] focus:border-[#4489D2] block w-full p-3 h-40 resize-none  "
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4489D2] to-[#D3D9D4] text-white p-4 py-3 rounded-lg font-medium  transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
          className="w-full bg-white border-dotted border-2 rounded-lg  p-6 md:p-8 bg-opacity-10 backdrop-blur-lg mt-8"
        >
          <h1 className="text-2xl  font-bold leading-tight text-center text-gray-100">
            Let's Chat! <HiOutlineMail className="inline-block ml-2" size={30} />
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Contact;
