import React from "react";

const Button = ({ button, icon }) => {
  return (
    <button className="bg-teal-500 text-xl flex items-center  gap-5  mx-auto px-5 py-2 my-9 rounded-md hover:bg-teal-700 transition-colors delay-100 hover:shadow-2xl hover:shadow-white">
      {button}
      <span className="">{icon}</span>
    </button>
  );
};

export default Button;
