"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";

import { FaArrowUp } from "react-icons/fa";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import AboutSection from "./components/About";
import PortfolioSection from "./components/Porfolio";
import SkillSection from "./components/Skill";
import TestimonialSection from "./components/Testimonial";
import Contact from "./components/Contact";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Layout id="/">
      <Hero />

      <AboutSection />

      <PortfolioSection  />

      <SkillSection />

      <TestimonialSection   />

      <Contact  />
    

      <footer className="bg-white relative z-[600] dark:bg-gray-900 text-gray-900 dark:text-white py-10">
        <div className="container   mx-auto text-center">
          <p className="bg-white  relative inline-block z-[500] dark:bg-gray-900 p-5">
            &copy; {new Date().getFullYear()} mdashrafulalam. All rights
            reserved.
          </p>
          <ScrollToTop
            smooth
            className="w-32 h-32 absolute z-[999999] flex justify-center items-center text-sm"
            color="#000000"
            top={100}
            icon={<FaArrowUp />}
          />
        </div>
      </footer>
    </Layout>
  );
};

export default Home;
