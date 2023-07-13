import React from "react";

const Divider = () => {
  return (
    <div className="flex w-full h-[.2px] mb-10 justify-center items-center">
      <span className=" w-[30%] h-[.2px] bg-teal-200 shadow-2xl shadow-gray-100"></span>
      <span className="w-2 h-2 rounded-full bg-teal-500 mx-5"></span>
      <span className="w-[30%] h-[.2px] bg-teal-200 shadow-2xl shadow-gray-100"></span>
    </div>
  );
};

export default Divider;
