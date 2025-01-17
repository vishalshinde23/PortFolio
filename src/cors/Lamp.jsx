import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Lamp = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text flex flex-col text-center gap-4 text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
      >
        <span>Transforming ideas into <br /> Reality</span>
        <div className="text-3xl md:text-4xl font-light text-white/90 mb-[-150px]">
          My name is{" "}
          <span className="font-semibold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Vishal Shinde
          </span>{" "}
          & I Am{" "}
          <div className="h-20 mt-4">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "FrontEnd Developer",
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
      </motion.h1>
    </LampContainer>
  );
};

const LampContainer = ({ children }) => {
  return (
    <div className="relative flex poppins-regular min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full">
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate">
        {/* Left Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-purple-400 via-pink-500 to-red-400 text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 left-0 bg-slate-950 bottom-0 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var (--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-red-400 via-pink-500 to-purple-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Center Visuals */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "5rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export default Lamp;