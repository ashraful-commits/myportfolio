import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web from "../../public/web.png";

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
    {
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
    {
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
    {
      name: "Jane Smith",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
    {
      name: "Michael Johnson",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
    {
      name: "Michael Johnson",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
    {
      name: "Michael Johnson",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
    {
      name: "Michael Johnson",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: web,
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: "red",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className="bg-white min-h-screen lg:flex lg:items-center dark:bg-gray-900 dark:text-white px-10 md:py-10 lg:py-10 py-10"
    >
      <div className="container w-full text-center lg:text-left md:text-left h-full md:flex lg:flex lg:gap-4 px-10 md:gap-5 mx-auto  ">
        <div className=" lg:w-[30%] mr-10  md:w-[30%]">
          <h2 className="text-4xl  dark:text-white font-bold text-gray-800 text-center lg:text-left md:text-left mb-12">
            Testimonials
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, saepe.
          </p>
        </div>
        <div className="lg:w-[70%] my-5 lg:my-0 md:my-0 md:w-[70%] ">
          <Slider {...settings} className="w-[100%]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="lg:w-[30%] relative group md:w-[25%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                data-aos="zoom-in"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className=" overflow-hidden "
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={"100%"}
                    height={"100%"}
                    className="w-auto  h-auto"
                  />
                </motion.div>
                <div className="p-4 w-full h-full bg-teal-600 group-hover:block  text-center hidden absolute top-0 left-0">
                  <motion.h3
                    className="text-xl group-hover:text-white font-bold dark:text-white text-gray-800 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 group-hover:text-white dark:text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {testimonial.quote}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
