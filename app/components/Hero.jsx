"use client";
import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
    <div className="text-gray-900 bg-white dark:bg-gray-900 min-h-screen dark:text-white py-16">
      <div className="container mx-auto mt-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8 md:flex justify-center">
            <span className="text-teal-900 dark:text-teal-900">
              Hi, I&apos;m
            </span>
            <span className="text-teal-600 dark:text-teal-900 mx-2">
              Md Ashraful Alam
            </span>
          </h1>
          <h1 className="text-3xl font-bold mb-8 md:flex justify-center">
            I &apos;m
            <span className=" text-teal-500 mx-2 font-light">
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
            className="text-lg text-gray-300 md:w-[50%] md:ml-[25%] lg:w-[50%] lg:ml-[25%] mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            I build robust and scalable web applications using the MERN
            (MongoDB, Express.js, React.js, Node.js) stack.
          </p>
          <motion.button
            className="px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
