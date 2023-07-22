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
import Section from "./Section";
import { BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramer, TbBrandNextjs } from "react-icons/tb";
const SkillSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const skills = [
    { name: "JavaScript", icon: <FaJs size={80} />, color: "text-yellow-400" },
    { name: "React.js", icon: <FaReact size={80} />, color: "text-blue-400" },

    {
      name: "MongoDB",
      icon: <FaDatabase size={80} />,
      color: "text-green-400",
    },
    { name: "Node.js", icon: <FaNodeJs size={80} />, color: "text-green-400" },
    {
      name: "Express.js",
      icon: <FaServer size={80} />,
      color: "text-gray-600",
    },
    {
      name: "TypeScript.js",
      icon: <BiLogoTypescript size={80} />,
      color: "text-sky-400",
    },
    {
      name: "Redux",
      icon: <BiLogoRedux size={80} />,
      color: "text-violet-400",
    },
    {
      name: "Next.js",
      icon: <TbBrandNextjs size={80} />,
      color: "text-gray-600",
    },
    {
      name: "Framer Motion",
      icon: <TbBrandFramer size={80} />,
      color: "text-violet-400",
    },
    // Add more skills here
  ];

  return (
    <Section title="Skill" subtitle="What i have !" discription="" button="">
      <div className="w-[100%] flex md:w-[70%] lg:w-[70%] my-10 flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            style={{
              background: "rgba( 255, 255, 255, 0.25 )",
              backdropFilter: "blur( 14px )",
              webkitBackdropFilter: "blur( 14px )",
              borderRadius: "10px",
            }}
            className="w-[100%] px-10 hover:bg-red-500 dark:hover:bg-gradient-to-b dark:hover:from-red-500 dark:hover:to-gary-300 group transition-all md:w-[45%] lg:w-[30%] bg-white dark:bg-gray-800 dark:text-white rounded-lg border-gray-200 dark:border-gray-800 border mx-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            data-aos="zoom-in"
          >
            <div className="px-5 py-10">
              <div className="md:flex lg:flex items-center  justify-center text-center mb-4 gap-2">
                <span
                  className={` dark:text-white group-hover:text-white inline-block ${skill.color}`}
                >
                  {skill.icon}
                </span>
                <h3 className="text-2xl font-bold dark:text-white group-hover:text-white text-gray-800">
                  {skill.name}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default SkillSection;
