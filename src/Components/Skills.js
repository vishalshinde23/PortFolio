import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Server, Github, Briefcase } from "lucide-react";
function Skills() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const skills = {
    frontend: ["React.js", "JavaScript", "Tailwind CSS", "CSS", "REST APIs"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    other: ["C++", "DSA", "Postman", "Render", "Vercel", "Git"],
  };
  return (
    <div className="w-full poppins-regular min-h-screen bg-slate-950 text-white relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-sm opacity-10 animate-float"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            2 years of experience as a{" "}
            <span className="font-semibold text-purple-400">
              MERN Stack Developer
            </span>{" "}
            at Mind Spark Technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <SkillCard
            icon={<Code2 className="w-8 h-8" />}
            title="Frontend Skills"
            skills={skills.frontend}
            delay={0.2}
          />
          <SkillCard
            icon={<Server className="w-8 h-8" />}
            title="Backend Skills"
            skills={skills.backend}
            delay={0.4}
          />
          <SkillCard
            icon={<Github className="w-8 h-8" />}
            title="Other Skills"
            skills={skills.other}
            delay={0.6}
          />
        </div>
        <motion.div
          style={{
            scale,
          }}
          className=" flex justify-center items-center min-h-screen px-4 relative backdrop-blur-lg bg-white/5 rounded-2xl p-4 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                MERN Stack Developer
              </h3>
              <p className="text-white/70">Mind Spark Technology</p>
              <p className="text-white/70">2022 - Present</p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>
                  Developed and maintained web applications using React.js and
                  Node.js.
                </li>
                <li>
                  Collaborated with cross-functional teams to define, design,
                  and ship new features.
                </li>
                <li>
                  Participated in code reviews and ensured code quality and best
                  practices.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
const SkillCard = ({ icon, title, skills, delay }) => {
  return (
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
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
      <div className="relative backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={skill} className="relative">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${Math.random() * 40 + 60}%`,
                  }}
                  transition={{
                    delay: delay + index * 0.1,
                    duration: 1,
                  }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
              <p className="text-sm text-white/70 mt-1">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
 export default Skills; 