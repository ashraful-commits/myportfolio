import React from "react";

const Divider = () => {
  return (
    <div className="flex w-full h-[.7px]  justify-center items-center">
      <span className=" w-[45%] h-[.7px] bg-gray-300"></span>
      <span className="w-5 h-5 rounded-full bg-teal-500 mx-5"></span>
      <span className="w-[45%] h-[.7px] bg-gray-300"></span>
    </div>
  );
};

export default Divider;
