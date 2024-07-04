// HomePage.tsx
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import About from "@/Components/About";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Testimonial from "@/Components/Testimonial";
import ContactForm from "@/Components/ContactForm";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
    closeNav();
  };

  const closeModal = () => {
    setIsContactOpen(false);
  };

  // Animation AOS setup
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} onContactClick={handleContactClick} />
        <Nav openNav={openNav} onContactClick={handleContactClick} />
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Testimonial />
          <Footer />
        </div>
      </div>
      {isContactOpen && <ContactForm closeModal={closeModal} />}
    </div>
  );
};

export default HomePage;
