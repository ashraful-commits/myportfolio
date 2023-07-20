import React from "react";

const Divider = () => {
  return (
    <div className="flex w-full h-[.2px] mb-5 z-[500] relative justify-center items-center">
      <span className=" w-[50%] h-[.2px] bg-gray-200 dark:bg-gray-200 shadow-2xl shadow-gray-100"></span>
      <span className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-200 mx-5"></span>
      <span className="w-[50%] h-[.2px] bg-gray-200 dark:bg-gray-200 shadow-2xl shadow-gray-100"></span>
    </div>
  );
};

export default Divider;
