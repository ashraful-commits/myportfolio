"use client";
import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import heroBg from "../../public/bg-img.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
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
  return (
    <div
      style={{ backgroundImage: `url(${"../../public/bg-img.jpg"})` }}
      className="bg-cover text-gray-900 bg-blend-overlay bg-white dark:bg-gray-900 min-h-screen dark:text-white "
    >
      <div className="container w-screen h-screen  mx-auto flex justify-center items-center ">
        <div className="hero-container w-screen h-screen  mx-auto flex justify-center items-center">
          <div className="text-center">
            <h1 className="lg:text-[4.5rem] md:text-[3.8rem] text-[3rem] font-bold mb-8 md:flex justify-center">
              <span className="text-gray-500 dark:text-teal-600">
                Hi, I&apos;m
              </span>
              <span className="text-teal-600 dark:text-white mx-2">
                Md Ashraful Alam
              </span>
            </h1>
            <h1 className="text-4xl font-bold mb-8 md:flex text-gray-500 dark:text-white justify-center">
              I &apos;m
              <span className=" text-teal-700 mx-2 font-light">
                <Typewriter
                  options={{
                    strings: ["Mern Stack", "JavaScript", "Next"],
                    autoStart: true,
                    loop: true,
                    delayPerChar: 50,
                    cursorClassName: "text-teal-500 font-bold",
                  }}
                />
              </span>
              Developer
            </h1>
            <p
              className="text-lg text-gray-500 md:w-[50%] dark:text-gray-300 md:ml-[25%] lg:w-[50%] lg:ml-[25%] mb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              I build robust and scalable web applications using the MERN
              (MongoDB, Express.js, React.js, Node.js) stack.
            </p>
            <div className="flex justify-center gap-5 w-full h-full my-5">
              <span className="inline-block p-2 group hover:shadow-2xl hover:shadow-white shadow-white border rounded-full border-teal-600 cursor-pointer hover:bg-teal-500">
                <AiFillGithub className=" text-xl text-teal-500  group-hover:text-white  dark:text-white" />
              </span>
              <span className="inline-block p-2 group hover:shadow-2xl hover:shadow-white shadow-white border rounded-full border-teal-600 cursor-pointer hover:bg-teal-500">
                <AiFillLinkedin className=" text-xl text-teal-500  group-hover:text-white  dark:text-white" />
              </span>
              <span className="inline-block p-2 group hover:shadow-2xl hover:shadow-white shadow-white border rounded-full border-teal-600 cursor-pointer hover:bg-teal-500">
                <AiFillFacebook className=" text-xl text-teal-500  group-hover:text-white  dark:text-white" />
              </span>
              <span className="inline-block p-2 group hover:shadow-2xl hover:shadow-white shadow-white border rounded-full border-teal-600 cursor-pointer hover:bg-teal-500">
                <AiOutlineMail className=" text-xl text-teal-500  group-hover:text-white  dark:text-white" />
              </span>
            </div>
            <motion.button
              className="px-8  hover:shadow-2xl text-2xl hover:shadow-white font-bold py-3 my-5 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300"
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
