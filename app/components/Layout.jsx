"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  FaBars,
  FaCode,
  FaComments,
  FaEnvelope,
  FaHome,
  FaMoon,
  FaSun,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <header
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4  lg:px-10 md:px-10 px-12"
        data-aos="fade-down"
      >
        <nav className="flex items-center lg:px-10 md:px-10 justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-teal-600 uppercase">
              Md Ashraful Alam
            </h1>
          </div>
          <div className="md:hidden">
            <motion.button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isMenuOpen ? (
                <FaTimes className="text-gray-900 dark:text-white" size={24} />
              ) : (
                <FaBars className="text-gray-900 dark:text-white" size={24} />
              )}
            </motion.button>
          </div>
          <div>
            <motion.button
              className="text-white ml- focus:outline-none"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {theme === "dark" ? (
                <FaMoon className="text-gray-900 dark:text-white" />
              ) : (
                <FaSun className="text-gray-900 dark:text-white" />
              )}
            </motion.button>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="text-gray-900 dark:text-white flex">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group h-8 overflow-hidden border-b p-2 "
              >
                <Link href="#home">
                  <span className="flex items-center flex-col space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaHome
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 flex flex-col">
                      Home
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#about">
                  <span className="flex items-center flex-col space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaUser
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 flex flex-col">
                      About
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#projects">
                  <span className="flex items-center flex-col space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaCode
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 flex flex-col">
                      Projects
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#testimonial">
                  <span className="flex items-center flex-col space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaComments
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 flex flex-col">
                      Testimonial
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#contact">
                  <span className="flex items-center flex-col space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaEnvelope
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 flex flex-col">
                      Contact
                    </span>
                  </span>
                </Link>
              </motion.li>
            </ul>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden mt-4 text-center">
            <ul className="text-gray-900 dark:text-white flex flex-col items-center gap-10">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#home">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaHome
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  ">Home</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#about">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaUser
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold ">About</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#projects">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaCode
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  ">Projects</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#testimonial">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaComments
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  ">
                      Testimonial
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative group h-8 overflow-hidden border-b p-2"
              >
                <Link href="#contact">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaEnvelope
                      size={18}
                      className=" text-teal-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-teal-800 font-bold  ">Contact</span>
                  </span>
                </Link>
              </motion.li>
            </ul>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
