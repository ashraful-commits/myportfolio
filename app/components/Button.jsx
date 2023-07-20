import React from "react";

const Button = ({ button, icon }) => {
  return (
    <button className="hover:border-white relative  group bg-teal-500 text-xl pl-5 text-white flex items-center gap-5  mx-auto   mt-5 rounded-md hover:bg-teal-700 transition-colors delay-100 hover:shadow-2xl hover:shadow-white ">
      {button}
      <span className="darK:bg-white rounded-md border border-gray-200 group-hover:-rotate-90 dark:text-white h-full inline-block p-5">
        {icon}
      </span>
    </button>
  );
};

export default Button;
