import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar({scrollToSection}) {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'project',
    },
    {
      id: 3,
      link: 'skills',
    },
    {
      id: 4,
      link: 'contact',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-gray-900 via-black to-gray-900 fixed top-0 left-0 right-0 z-40'>
      <div className='flex flex-row gap-1'>
        <h3 className='text-4xl font-itim ml-4'>PortFolio</h3>
      </div>

      <ul className='hidden md:flex'>
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:text-blue-400 hover:scale-105 duration-200'
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-50'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200'>
          <Link
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            className='absolute m-6 top-0 right-0 cursor-pointer'
            onClick={() => setNav(!nav)}
            to='home'
          >
            <FaTimes size={30} />
          </Link>
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-blue-400 duration-200'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
