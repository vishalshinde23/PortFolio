import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
// import { cn } from "@/lib/utils";

// FollowerPointerCard Component
export const FollowerPointerCard = ({
  children,
  className,
  title,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef(null);
  const [rect, setRect] = useState(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={className}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

// FollowPointer Component
export const FollowPointer = ({
  x,
  y,
  title,
}) => {
  const colors = [
    "rgb(14 165 233)", // sky-500
    "rgb(115 115 115)", // neutral-500
    "rgb(20 184 166)", // teal-500
    "rgb(34 197 94)", // green-500
    "rgb(59 130 246)", // blue-500
    "rgb(239 68 68)", // red-500
    "rgb(234 179 8)", // yellow-500
  ];

  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y.get(),
        left: x.get(),
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-sky-500 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-sky-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className="px-2 py-2 text-white bg-gradient-to-br from-cyan-500 via-transparent to-transparent  whitespace-nowrap min-w-max text-xs rounded-full"
      >
        {title || `My Project`}
      </motion.div>
    </motion.div>
  );
};

// ProjectCard Component with Follower Pointer Integration
function ProjectCard({ data, currentCard, setCurrentCard }) {
  return (
    <FollowerPointerCard title={data?.heading} className={`relative bg-gradient-to-r from-purple-500/10 to-pink-500/10  text-white shadow-md poppins-regular hover:shadow-2xl border-dotted border-2 transition-all duration-300 ease-in-out transform rounded-lg p-4 flex flex-col items-center justify-between w-[260px] h-[350px] m-4 ${currentCard === data?.heading ? 'hover:scale-105' : ''}`}>
      {/* Image Section */}
      <div className="relative w-full h-[150px] mb-4 overflow-hidden rounded-t-lg">
        <img
          src={data?.src}
          alt={data?.heading}
          className="object-cover w-full h-full rounded-lg transition-transform duration-700 hover:scale-110"
        />
      </div>

      {/* Title Section */}
      <div className={`text-lg font-bold mb-2 ${currentCard === data?.heading ? 'text-blue-500' : 'text-gray-800'}`}>
        {data?.heading}
      </div>

      {/* Buttons for Demo and Code */}
      <div className="flex flex-row justify-between w-full gap-2">
        <a
          href={data?.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-2 rounded-md text-white transition-all duration-500 ease-out hover:scale-105 ${currentCard === data?.heading ? 'bg-gradient-to-r from-purple-500 to-pink-600' : 'bg-gradient-to-r from-blue-500 to-teal-500'}`}
        >
          Demo
        </a>
        <a
          href={data?.code}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-2 rounded-md text-white transition-all duration-500 ease-out hover:scale-105 ${currentCard === data?.heading ? 'bg-gradient-to-r from-purple-500 to-pink-600' : 'bg-gradient-to-r from-blue-500 to-teal-500'}`}
        >
          Code
        </a>
      </div>
    </FollowerPointerCard>
  );
}

export default ProjectCard;