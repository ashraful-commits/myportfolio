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

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="flex w-screen h-[.5px]  justify-center items-center">
        <span className="md:w-[10%] lg:w-[10%] w-[50%] h-[.5px] bg-gray-100"></span>
        <span className="w-5 h-5 rounded-full bg-teal-500 mx-5"></span>
        <span className="md:w-[90%] lg:w-[90%] w-[50%] h-[.5px] bg-gray-100"></span>
      </div>
      <AboutSection />
      <div className="flex w-screen h-[.5px]  justify-center items-center">
        <span className="md:w-[10%] lg:w-[10%] w-[50%] h-[.5px] bg-gray-100"></span>
        <span className="w-5 h-5 rounded-full bg-teal-500 mx-5"></span>
        <span className="md:w-[90%] lg:w-[90%] w-[50%] h-[.5px] bg-gray-100"></span>
      </div>
      <PortfolioSection />

      <div className="flex w-screen h-[.5px]  justify-center items-center">
        <span className="md:w-[10%] lg:w-[10%] w-[50%] h-[.5px] bg-gray-100"></span>
        <span className="w-5 h-5 rounded-full bg-teal-500 mx-5"></span>
        <span className="md:w-[90%] lg:w-[90%] w-[50%] h-[.5px] bg-gray-100"></span>
      </div>
      <SkillSection />

      <div className="flex w-screen h-[.5px]  justify-center items-center">
        <span className="md:w-[10%] lg:w-[10%] w-[50%] h-[.5px] bg-gray-100"></span>
        <span className="w-5 h-5 rounded-full bg-teal-500 mx-5"></span>
        <span className="md:w-[90%] lg:w-[90%] w-[50%] h-[.5px] bg-gray-100"></span>
      </div>
      <TestimonialSection />
      <div className="flex w-screen h-[.5px] justify-center items-center">
        <span className="w-[50%] h-[.5px] bg-gray-100"></span>
        <span className="w-5 h-5 rounded-full bg-teal-500 mx-5"></span>
        <span className="w-[50%] h-[.5px] bg-gray-100"></span>
      </div>
      <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-10">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} mdashrafulalam. All rights
            reserved.
          </p>
          <ScrollToTop
            smooth
            className="w-32 h-32 flex justify-center items-center text-sm"
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
