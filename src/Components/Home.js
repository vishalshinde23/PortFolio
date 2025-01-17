import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import Lamp from "../cors/Lamp";

function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = {
    damping: 25,
    stiffness: 700,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="w-full poppins-regular  bg-slate-950 text-white relative overflow-hidden">
      <motion.div
        className=" bg-white/30 rounded-full fixed blur-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    
      <main className="max-w-6xl mx-auto px-8 py-20">
        <motion.div
          
          className="text-center"
        >
         
            <Lamp/>

          <div className="flex flex-col justify-center items-center" >

            
            <div className="absolute animate-bounce  text-4xl font-bold p-4 z-10">
        We are born to 
        <span className="text-orange-500">😊
        <Typewriter 
          options={{
            strings: ['Build Something', 'Experience', 'Love Technology'],
            autoStart: true,
            loop: true,
          }} 
        />
        </span>
      </div>
          </div>

        </motion.div>
      
      </main>
    </div>
  );
}


export default Home;