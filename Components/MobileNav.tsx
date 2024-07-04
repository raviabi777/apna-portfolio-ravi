// MobileNav.tsx
import { XMarkIcon } from "@heroicons/react/20/solid"; // Corrected the import path for the XMarkIcon
import React from "react";
import { Link } from "react-scroll";

interface Props {
  nav: boolean;
  closeNav: () => void;
  onContactClick: () => void;
}

const MobileNav = ({ nav, closeNav, onContactClick }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000000] bg-[#09101a]`}>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center space-y-4">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          HOME
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          ABOUT
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          SERVICES
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          SKILLS
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          PROJECTS
        </Link>
        <button
          className="nav-link-mobile cursor-pointer text-white"
          onClick={onContactClick}
        >
          CONTACT
        </button>
      </div>
      <div onClick={closeNav} className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] text-yellow-400">
        <XMarkIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default MobileNav;
