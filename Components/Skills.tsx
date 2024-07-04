import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
  return (
    <div id="skills" className="pt-[4rem] md:pr-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">Education & <span className="text-yellow-400">Skill</span></h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-start">
        <div className="space-y-[3rem]">
          <SkillsItem
            title="Python Developer"
            year="2021 - 2022"
            description="I am skilled in Django and Flask for web development, and proficient in data science libraries like Pandas and NumPy. My expertise ensures robust, scalable solutions tailored to modern software challenges."
          />
          <SkillsItem
            title="Front-end Developer"
            year="2022 - 2023"
            description="Experienced in modern frontend technologies like React, Angular, and Vue. Skilled in creating responsive, user-friendly interfaces with a focus on performance and accessibility."
          />
          <SkillsLanguage skill1="Python" skill2="HTML & CSS" skill3="PHP" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
        </div>
        <div className="space-y-[7.65rem]">
          <SkillsItem
            title="React Developer"
            year="2023 - 2024"
            description="Proficient in React and Next.js for building scalable web applications. Skilled in JavaScript and modern frontend development practices."
          />
          <SkillsItem
            title="MERN Stack Developer"
            year="2022 - 2024"
            description="Skilled in developing full-stack applications using MongoDB, Express.js, React, and Node.js. Experienced in RESTful API design and integration."
          />
          <SkillsLanguage skill1="React JS" skill2="Next JS" skill3="JavaScript" level1="w-[80%]" level2="w-[85%]" level3="w-[89%]" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
