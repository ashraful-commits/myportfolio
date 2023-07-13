import React from "react";
import Button from "./Button";
import { FaArrowDown } from "react-icons/fa";
import Divider from "../Divider";

const Section = ({ children, title, subtitle, discription, button }) => {
  return (
    <section
      id="testimonial"
      className="w-full dark:bg-gray-900 text-gray-900 dark:text-white flex justify-center min-h-screen mx-auto items-center"
    >
      <div className=" text-center w-full flex flex-col gap-14 justify-center item-center">
        <div className="flex items-center flex-col">
          {title && (
            <h2 className="text-[5rem] capitalize text-gray-600 font-bold my-5 dark:text-gray-300 ">
              {title}
            </h2>
          )}
          <Divider />
          {subtitle && (
            <h4 className="text-3xl capitalize text-gray-400 font-bold my-2">
              {subtitle}
            </h4>
          )}
          {discription && (
            <p className="text-gray-500 w-[50%] capitalize my-2 text-xl">
              {discription}
            </p>
          )}
          {button && <Button button="Download cv" icon={<FaArrowDown />} />}
        </div>
        <div className="w-full flex flex-col items-center">{children}</div>
      </div>
    </section>
  );
};

export default Section;
