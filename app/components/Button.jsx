import Link from "next/link";
import React from "react";

const Button = ({ button, icon,link }) => {
  return (
    <Link  href={`${link}`}  className="hover:border-white relative  group bg-red-500 text-xl pl-5 text-white flex items-center gap-5  mx-auto   mt-5 rounded-md hover:bg-red-700 transition-colors delay-100 hover:shadow-2xl hover:shadow-white bg-clip-padding  bg-gradient-to-r from-pink-500 to-violet-500">
      {button}
      <span className="darK:bg-white rounded-md border border-gray-200 group-hover:-rotate-90 dark:text-white h-full inline-block p-5">
        {icon}
      </span>
      
    </Link>
  );
};

export default Button;
