import Image from 'next/image';
import React from 'react';
import styles from './Hero.module.css';
const projectData = [
  { src: "/images/project1.png", alt: "Project 1", description: "This Automatic Number Plate Recognition Software project involves developing a system that uses image processing and machine learning to accurately detect and read vehicle license plates in real-time." },
  { src: "/images/proj2.jpeg", alt: "Project 2", description: "This food ordering website involves creating an online platform that allows users to browse menus, place orders, and make payments for food delivery or pickup from various restaurants." },
  { src: "/images/proj3.png", alt: "Project 3", description: "This RamGhar Hotel Booking web application project offers users a seamless experience to search, compare, and book accommodations with ease and convenience." },
/*  { src: "/images/p4.jpg", alt: "Project 4", description: "Description of Project 4" },
  { src: "/images/p5.jpg", alt: "Project 5", description: "Description of Project 5" },
  { src: "/images/p1.jpg", alt: "Project 6", description: "Description of Project 6" },*/
];

export const Projects = () => {
  return (
    <div id="projects" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectData.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 300}>
            <div className="project-container transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image src={project.src} alt={project.alt} layout="fill" className="object-contain" />
              <div className="project-overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                <p className="text-white text-center">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
