"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Link } from "react-scroll";
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
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Line from "./Line/Line";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
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
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 1000 || window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="max-w-screen z-[500] relative mx-auto dark:bg-slate-900">
      <Line />
      <header
        style={{ display: isVisible ? "block" : "none" }}
        className={`border-b-2 dark:border-b-gray-800 w-full z-[99999] fixed top-0 left-0 bg-white dark:bg-slate-900 text-gray-900 dark:text-white py-4 lg:px-10 md:px-10 px-12 `}
      >
        <nav
          className={`flex items-center lg:px-10 md:px-10  z-30 justify-between `}
        >
          <div className="flex items-center">
            <h1 className="text-2xl  font-bold text-blue-600 dark:text-white lowercase bg-clip-text text-transparent bg-gradient-to-r  from-pink-500 to-violet-500">{`</code>`}</h1>
          </div>
          <motion.button
            className="text-white lg:ml-60 ml- focus:outline-none"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {theme === "dark" ? (
              <FaMoon className="text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:text-white " />
            ) : (
              <FaSun className="text-gray-900  dark:text-white" />
            )}
          </motion.button>
          <div>
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
                  <FaTimes
                    className=" bg-clip-text text-blue-400 bg-gradient-to-r from-pink-500 dark:text-white to-violet-500"
                    size={24}
                  />
                ) : (
                  <BiMenuAltRight
                    className=" bg-clip-text text-blue-400 bg-gradient-to-r dark:text-white from-pink-500 to-violet-500"
                    size={24}
                  />
                )}
              </motion.button>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="text-gray-900 dark:text-white flex">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group h-8 overflow-hidden p-1 "
              >
                <Link smooth={true} duration={800} offset={-100} to="home">
                  <span className="flex items-center flex-col  text-gray-900 dark:text-white cursor-pointer">
                    <FaHome
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className="text-blue-500 dark:text-white font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 hover:shadow-2xl flex flex-col">
                      Home
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link smooth={true} duration={800} offset={-100} to="about">
                  <span className="flex items-center flex-col  text-gray-900 dark:text-white cursor-pointer">
                    <FaUser
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className="text-blue-500 dark:text-white font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 hover:shadow-2xl flex flex-col">
                      About
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link smooth={true} duration={800} offset={-100} to="projects">
                  <span className="flex items-center flex-col  text-gray-900 dark:text-white cursor-pointer">
                    <FaCode
                      size={18}
                      className="text-blue-600 dark:text-white  shadow-white shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className="text-blue-500 dark:text-white font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 hover:shadow-2xl flex flex-col">
                      Projects
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link
                  smooth={true}
                  duration={800}
                  offset={-100}
                  to="testimonial"
                >
                  <span className="flex items-center flex-col  text-gray-900 dark:text-white cursor-pointer">
                    <FaComments
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className="text-blue-500 dark:text-white font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 hover:shadow-2xl flex flex-col">
                      Testimonial
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link smooth={true} duration={800} offset={-100} to="contact">
                  <span className="flex items-center flex-col  text-gray-900 dark:text-white cursor-pointer">
                    <FaEnvelope
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className="text-blue-500 dark:text-white font-bold  opacity-0 group-hover:-translate-y-6 delay-100 transition-all duration-100 group-hover:opacity-100 hover:shadow-2xl flex flex-col">
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
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link smooth={true} duration={800} offset={-100} to="home">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaHome
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-blue-800 font-bold  ">Home</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link smooth={true} duration={800} offset={-100} to="about">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaUser
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-blue-800 font-bold ">About</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link smooth={true} duration={800} offset={-100} to="projects">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaCode
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-blue-800 font-bold  ">Projects</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link
                  smooth={true}
                  duration={800}
                  offset={-100}
                  to="testimonial"
                >
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaComments
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-blue-800 font-bold  ">
                      Testimonial
                    </span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative group h-8 overflow-hidden p-1"
              >
                <Link smooth={true} duration={800} offset={-100} to="contact">
                  <span className="flex items-center  space-x-2 text-gray-900 dark:text-white cursor-pointer">
                    <FaEnvelope
                      size={18}
                      className=" text-blue-600 dark:text-white  shadow-white font-extrabold shadow-2xl hover:text-blue-700 opacity-100 group-hover:opacity-0"
                    />
                    <span className=" text-blue-800 font-bold  ">Contact</span>
                  </span>
                </Link>
              </motion.li>
            </ul>
          </div>
        )}
      </header>
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
