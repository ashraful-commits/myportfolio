import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import web from "/public/myphoto.jpg";
import Section from "./Section";

// import bolb from "../../public/blob.svg";
const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Section
      id="about"
      title="About me"
      subtitle="Who am I ?"
      discription="I am a professional MERN stack developer with a passion for creating high-quality web applications. With years of experience in front-end and back-end development, I specialize in building scalable and efficient solutions. My expertise includes React, Node.js, Express, and MongoDB."
      button="Download Cv"
      link="https://drive.google.com/file/d/1X9PJaW2kKcJNlXvPRcpkDZskC4SC_ThZ/view?usp=sharing"
    >
      <motion.div
        className="flex justify-center sm:my-10 "
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        data-aos="fade-left"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className=" bg-teal-900 rounded-full w-[350px] h-[350px]   border-4 overflow-hidden  border-white relative z-1 flex justify-center "
        >
          <Image
            src={web}
            alt="Profile"
            width={350}
            height={350}
            className=" rounded-full mix-blend-screen relative z-20 h-[110%]  w-[100%]  "
          />
          <div className="overlay absolute w-full h-full   bg-gray-900 z-19"></div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
