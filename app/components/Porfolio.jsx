import React, { useEffect } from "react";
import { delay, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import food from "../../public/food.jpg";
import movie from "../../public/movie.jpeg";
import car from "../../public/car.png";
import electronics from "../../public/electronics.jpg";
import education from "../../public/education.png";
import ecommerce from "../../public/ecommerce.png";
import Section from "./Section";
const PortfolioSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "Movix",
      description:
        "This is a Movie website for New movie trailer show from youtube using Api!",
      image: movie,
      githubLink: "#",
      tools: ["React", "Redux", "Next js", "Api"],
      liveSiteLink: "https://movixproject01.netlify.app/",
    },
    {
      title: "Food",
      description: "Coming soon ...",
      image: food,
      githubLink: "#",
      tools: ["React", "Redux", "Next js", "Node js", "Express js"],
      liveSiteLink: "#",
    },

    {
      title: "Electronics",
      description: "Coming soon ...",
      image: electronics,
      githubLink: "#",
      tools: ["React", "Redux", "Next js", "Node js", "Express js"],
      liveSiteLink: "#",
    },
    {
      title: "Car",
      description: "Coming soon ...",
      image: car,
      githubLink: "#",
      tools: ["React", "Redux", "Next js", "Node js", "Express js"],
      liveSiteLink: "#",
    },
    {
      title: "Education",
      description: "Coming soon ...",
      image: education,
      githubLink: "#",
      tools: ["React", "Redux", "Next js", "Node js", "Express js"],
      liveSiteLink: "#",
    },
    {
      title: "E-commerce",
      description: "Coming soon ...",
      image: ecommerce,
      githubLink: "#",
      tools: ["React", "Redux", "Next js", "Node js", "Express js"],
      liveSiteLink: "#",
    },
  ];

  return (
    <Section
      title="Projects"
      id="projects"
      subtitle="What i have build !"
      discription=""
      button=""
    >
      <div className="w-[100%] lg:px-[150px] md:px-10 px-10  flex flex-wrap gap-5 items-center justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border-2  border-gray-100 dark:border-gray-800 px-30 lg:w-[30%] md:w-[45%] w-[100%] mb-2 relative group  overflow-hidden lg:h-[30vh] md:h-[50vh] sm:h-auto dark:bg-gray-900  dark:text-white rounded-lg "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            data-aos="zoom-in"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full relative"
            >
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-900  to-transparent opacity-100"></div>
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={500}
                className="w-[100%] object-cover h-full"
              />
            </motion.div>
            <div className="p-4 transition-all delay-100 duration-300  w-full h-full bg-gradient-to-b from-blue-500 to-blue-900  group-hover:block hidden absolute top-0 left-0 ">
              <motion.h3
                className="text-2xl  group-hover:text-white font-bold dark:text-white text-gray-800 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-700 group-hover:text-white dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex items-center group-hover:text-white justify-center mt-4  dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className="text-lg ">Tools:</h4>
                <ul className="flex flex-wrap">
                  {" "}
                  {project.tools.map((item, index) => {
                    return (
                      <li className="" key={index}>
                        {item},
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
              <motion.div
                className="flex group-hover:text-white justify-center mt-4  dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 group-hover:text-white dark:text-white hover:text-gray-500 mr-4"
                >
                  <FaGithub size={18} />
                </Link>
                <Link
                  href={project.liveSiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 group-hover:text-white dark:text-white hover:text-gray-500"
                >
                  <FaExternalLinkAlt size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default PortfolioSection;
