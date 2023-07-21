"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

import { loadFull } from "tsparticles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import Icons from "../components/Icons/Icons"
import Image from "next/image";
import Link from "next/link";
const Hero = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };
  const icons = [
    {  icon: <AiFillFacebook/> ,link:"https://www.facebook.com/beautyformind" },
    {  icon: <AiFillGithub/> ,link:"https://github.com/ashraful-commits"  },
    {  icon: <AiFillLinkedin/>,link:"https://www.linkedin.com/in/beautifulmind/" },
    {  icon: <AiOutlineMail/> ,link:"www.ashrafulalam10000@gmail.com"  },
   
    // Add more skills here
  ];
  return (
    <div
  
      className={`relative text-gray-900 bg-blend-screen z-[500] pt-42 lg:pt-28 md:pt-20  mb-32 to-white dark:bg-transparent min-h-screen dark:text-white`}
    >
      <div className="relative container w-screen h-screen  mx-auto flex justify-center items-center ">
        <div className="hero-container w-screen h-screen  mx-auto flex justify-center items-center">
          <div className="text-center">
            <h1 className="lg:text-[6rem]  bg-white leading-tight dark:bg-slate-900   md:text-[4rem] text-[3rem] font-bold mb-8  ">
              <span className="text-gray-600 dark:text-red-600 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 ">
                Hi, I&apos;m
              </span>
              <span className="text-red-700 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:text-white mx-2">
                Md Ashraful Alam
              </span>
            </h1>
            <h1 className="lg:text-[3rem] text-[1.4rem] sm:text-[2rem] flex  md:flex-row bg-white dark:bg-slate-900  font-bold mb-8 md:flex text-gray-600 dark:text-white justify-center">
              I &apos;m
              <span className=" text-red-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mx-2 font-light">
                <Typewriter
                  options={{
                    strings: ["Mern Stack", "JavaScript", "Next js"],
                    autoStart: true,
                    loop: true,
                    delayPerChar: 50,
                    cursorClassName: "text-red-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
                  }}
                />
              </span>
              Developer
            </h1>
            <p
              className="text-lg dark:bg-slate-900 bg-white  text-gray-700 md:w-[50%] dark:text-gray-300 md:ml-[25%] lg:w-[50%] lg:ml-[25%] mb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              I build robust and scalable web applications using the MERN
              (MongoDB, Express.js, React.js, Node.js) stack.
            </p>
            <div className="flex justify-center gap-5 w-full h-full my-5">
             
           {icons.map((items,index)=>{
            return   <Icons icon={items.icon} link={items.link} key={index}/>
           })}
            </div>
            <motion.button
       
              className="px-8 bg-clip-padding text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:shadow-2xl text-2xl hover:shadow-white font-bold py-3 my-5 bg-red-500  rounded hover:bg-red-600 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              Let&apos;s Connect
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
