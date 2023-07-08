import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaServer,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
const SkillSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const skills = [
    { name: "JavaScript", icon: <FaJs size={80} /> },

    { name: "React.js", icon: <FaReact size={80} /> },
    { name: "Next.js", icon: <FaCode size={80} /> },
    { name: "MongoDB", icon: <FaDatabase size={80} /> },
    { name: "Node.js", icon: <FaNodeJs size={80} /> },
    { name: "Express.js", icon: <FaServer size={80} /> },
    // Add more skills here
  ];

  return (
    <section
      id="skill"
      className="bg-white md:px-10 flex  lg:flex lg:items-center  justify-center lg:px-10 px-10 py-16 min-h-screen  dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto lg:flex md:flex w-full h-full dark:bg-gray-900 dark:text-white">
        <div className="w-[100%] md:w-[30%]  text-center lg:text-left md:text-left lg:w-[30%]">
          <h2 className="text-4xl font-bold dark:text-white text-gray-800 mb-12">
            Skills
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            tempora.
          </p>
        </div>
        <div className="w-[100%] flex md:w-[70%] lg:w-[70%] my-10 flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-[100%] md:w-[45%] lg:w-[30%] bg-white rounded-lg shadow-md  mx-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              data-aos="zoom-in"
            >
              <div className="p-4">
                <div className="md:flex lg:flex items-center  justify-center text-center mb-4 gap-2">
                  <span className="text-teal-500 inline-block">
                    {skill.icon}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
