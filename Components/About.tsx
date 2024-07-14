import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react';
import styles from './Hero.module.css';

export const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Vision</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[75px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-100 w-[80%]">
              I am a motivated and dedicated third-year Computer Science student with a passion for problem-solving and a keen interest in software development. I possess a solid foundation in programming languages such as Java, Python, and C++, and I'm enthusiastic about learning new technologies. I am a team player, having actively contributed to group projects, and I thrive in environments that challenge me to think critically and creatively. I am eager to apply my skills and knowledge in a practical setting and am committed to continuous learning and growth in the field of technology.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image src="/images/megauri.jpeg" alt="user" layout="fill" objectFit="cover" className="relative z-[11] w-[100%] h-[100%] object-contain" />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>  
        </div>
      </div>
    </div>
  );
};

export default About;
