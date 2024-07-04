import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import { Icon } from '@iconify/react';
import { SocialIcon } from 'react-social-icons';
import styles from './Hero.module.css'; // Import CSS for styles

const Hero = () => {
  return (
    <div id="hero" className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'm <span className="text-yellow-400">Ravikant!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Hi! I'm Ravikant Prasad, a final year <span className="font-bold">Computer Science student with a specialization in Business System</span> at SRM University. Passionate about Web Dev, Machine Learning, AI and Human Resource Management, I'm on a journey of continuous learning and seeking opportunities to improve myself.
          </p>

          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:scale-110 transform transition-all duration-300 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <a href="images/resume.pdf"><p>Download CV</p></a>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <a href="https://t.me/rowdyoggy">
              <button className="hover:scale-110 transform transition-all duration-300 flex items-center space-x-2">
                <Icon className="w-[2.5rem] h-[4rem] hover:scale-150 transform transition-all duration-300 text-yellow-400 transition-all duration-200 text-[#55e6a5]" icon="vaadin:paperplane" />
                <p className="text-[20px] font-semibold text-white">Contact Me</p>
              </button>
            </a>
          </div>

          <div className='mt-6 flex space-x-4'>
            <SocialIcon url="https://www.instagram.com/ravi777sharma/" className={`${styles.socialIcon} ${styles.slideIn}`} />
            <SocialIcon url="https://www.facebook.com/ravi777sharma/" className={`${styles.socialIcon} ${styles.slideIn}`} />
            <SocialIcon url="https://www.github.com/raviabi777/" className={`${styles.socialIcon} ${styles.slideIn}`} />
            <SocialIcon url="https://www.linkedin.com/in/ravikant-prasad-04288b2a8/" className={`${styles.socialIcon} ${styles.slideIn}`} />
          </div>
        </div>
        
        <div className={`${styles.imageContainer} hidden lg:flex items-center`}>
          <Image src="/images/r3.jpeg" alt="user" layout="fill" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
