import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import web from "/public/IMG_20230628_091420_1~2.jpg";
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
      title="About me"
      subtitle="Who am I ?"
      discription="I am a professional MERN stack developer with a passion for creating high-quality web applications. With years of experience in front-end and back-end development, I specialize in building scalable and efficient solutions. My expertise includes React, Node.js, Express, and MongoDB."
      button="Download Cv"
    >
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
          className=" rounded-full w-[400px] h-[400px] overflow-hidden border-4 border-white"
        >
          <Image
            src={web}
            alt="Profile"
            width={400}
            height={100}
            className=" rounded-full"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
