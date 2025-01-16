import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

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
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-600 to-gray-900  text-white relative overflow-hidden">
      <motion.div
        className="w-8 h-8 bg-white/30 rounded-full fixed blur-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    
      <main className="max-w-6xl mx-auto px-8 py-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-5xl md:text-7xl font-bold m-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Welcome to My Portfolio
          </motion.div>
          <div className="text-3xl md:text-4xl font-light text-white/90 mb-8">
            My name is{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Vishal Shinde
            </span>{" "}
            & I Am{" "}
            <div className="h-20 mt-4">
              <Typewriter
                options={{
                  strings: [
                    "  Full Stack Developer",
                    "FrontEnd developer",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </div>
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-gradient-to-r from-pink-500 to-indigo-500 px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-lg shadow-lg shadow-purple-500/20"
          >
            View My Work
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Frontend",
              description: "React, Next.js, Tailwind CSS",
            },
            {
              title: "Backend",
              description: "Node.js, Express, MongoDB",
            },
            {
              title: "Tools",
              description: "Git, Docker, AWS",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
              }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                {skill.title}
              </h3>
              <p className="text-white/70">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}


export default Home;