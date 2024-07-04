// Nav.tsx
import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-scroll';

interface Props {
  openNav: () => void;
  onContactClick: () => void;
}

const Nav = ({ openNav, onContactClick }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          PORT
          <span className="text-yellow-300">FOLIO</span>
        </h1>
        <div className="hidden md:flex space-x-6">
          <Link className="nav-link cursor-pointer text-white" to="hero" smooth={true} duration={500}>
            Home
          </Link>
          <Link className="nav-link cursor-pointer text-white" to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link className="nav-link cursor-pointer text-white" to="services" smooth={true} duration={500}>
            Services
          </Link>
          <Link className="nav-link cursor-pointer text-white" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link className="nav-link cursor-pointer text-white" to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <span onClick={onContactClick} className="nav-link cursor-pointer text-white">
            Contact
          </span>
        </div>
        <div onClick={openNav} className="md:hidden">
          <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
