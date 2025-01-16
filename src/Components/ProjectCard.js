import React from 'react';

function ProjectCard({ data, currentCard, setCurrentCard }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
      className={`relative bg-gradient-to-r from-pink-500 via-purple-500  text-gray-900 shadow-md hover:shadow-2xl border-dotted border-2 transition-all duration-300 ease-in-out transform rounded-lg p-4 flex flex-col items-center justify-between w-[260px] h-[350px] m-4 ${
        currentCard === data?.heading ? 'hover:scale-105' : ''
      }`}
      onClick={() => setCurrentCard(data?.heading)}
      style={{ perspective: '1000px' }} // Add perspective for parallax
    >
      {/* Image Section */}
      <div className="relative w-full h-[150px] mb-4 overflow-hidden rounded-t-lg">
        <img
          src={data?.src}
          alt={data?.heading}
          className="object-cover w-full h-full rounded-lg transition-transform duration-700 hover:scale-110"
        />
      </div>

      {/* Title Section */}
      <div
        className={`text-lg font-bold mb-2 ${
          currentCard === data?.heading ? 'text-blue-500' : 'text-gray-800'
        }`}
      >
        {data?.heading}
      </div>

      {/* Buttons for Demo and Code */}
      <div className="flex flex-row justify-between w-full gap-2">
        <a
          href={data?.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-2 rounded-md text-white transition-all duration-500 ease-out hover:scale-105 ${
            currentCard === data?.heading
              ? 'bg-gradient-to-r from-purple-500 to-pink-600'
              : 'bg-gradient-to-r from-blue-500 to-teal-500'
          }`}
        >
          Demo
        </a>
        <a
          href={data?.code}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-2 rounded-md text-white transition-all duration-500 ease-out hover:scale-105 ${
            currentCard === data?.heading
              ? 'bg-gradient-to-r from-purple-500 to-pink-600'
              : 'bg-gradient-to-r from-blue-500 to-teal-500'
          }`}
        >
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
