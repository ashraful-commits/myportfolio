import React from "react";
import Button from "./Button";
import { FaArrowDown } from "react-icons/fa";
import Divider from "../Divider";
import Line from "../components/Line/Line";
const Section = ({ children, title, subtitle, discription, button }) => {
  return (
    <section
      id="testimonial"
      className="w-full relative z-[500]  dark:bg-transparent text-gray-900 dark:text-white flex justify-center min-h-screen mx-auto items-center "
    >
      <div className=" text-center w-full my-20  flex flex-col gap-14 justify-center item-center">
        <div className="flex items-center  justify-center flex-col">
          <span
            className=" dark:bg-gray-800 rounded-3xl bg-white"
            style={{
              background: "rgba( 255, 255, 255, 0.25 )",
              backdropFilter: "blur( 14px )",
              webkitBackdropFilter: "blur( 14px )",
              borderRadius: "10px",
            }}
          >
            {title && (
              <h2 className="lg:text-[4.5rem]  rounded-lg  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:bg-slate-800 px-10     md:text-[4rem] text-[2rem] sm:text-[3rem] capitalize text-gray-100 font-bold my-5  ">
                {title}
              </h2>
            )}
          </span>
          {subtitle && (
            <h4
              style={{
                background: "rgba( 255, 255, 255, 0.20 )",
                backdropFilter: "blur( 14px )",
                webkitBackdropFilter: "blur( 14px )",
                borderRadius: "10px",
              }}
              className="text-3xl bg-clip-text text-white bg-gradient-to-r from-pink-500 to-violet-500 dark:bg-gray-900  px-5 py-4 capitalize text-gray-400 font-bold my-2"
            >
              {subtitle}
            </h4>
          )}
          <Divider />
          {discription && (
            <p className="text-gray-500 p-5 dark:bg-gray-900 w-[90%] text-justify  lg:w-[55%] capitalize my-2 text-xl">
              {discription}
            </p>
          )}
          {button && (
            <Button
              button="Download cv"
              icon={<FaArrowDown />}
              link="https://drive.google.com/file/d/1X9PJaW2kKcJNlXvPRcpkDZskC4SC_ThZ/view?usp=sharing"
            />
          )}
        </div>
        <div className="w-full flex flex-col items-center">{children}</div>
      </div>
    </section>
  );
};

export default Section;
