import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import web from "/public/IMG_20230628_091420_1~2.jpg";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="bg-white  lg:flex lg:items-center  py-16 min-h-screen  dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto w-full md:px-10 lg:px-10 px-10 h-full dark:bg-gray-900 dark:text-white">
        <div className="dark:bg-gray-900 w-full dark:text-white grid grid-cols-1 text-center md:text-left lg:text-left md:grid-cols-2 mx-4 md:mx-0 lg:mx-0 gap-8">
          <motion.div
            className="flex dark:bg-gray-900 dark:text-white flex-col items-center md:items-start lg:items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <h2 className="text-4xl dark:text-white font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <h4 className="text-2xl mb-4">Who I Am</h4>
            <motion.p
              className="text-lg dark:text-white text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I am a professional MERN stack developer with a passion for
              creating high-quality web applications. With years of experience
              in front-end and back-end development, I specialize in building
              scalable and efficient solutions. My expertise includes React,
              Node.js, Express, and MongoDB.
            </motion.p>
            <motion.button
              className="px-6 w-[200px] py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src={web}
                alt="Profile"
                width={200}
                height={200}
                className="w-72 h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
