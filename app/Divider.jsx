import React from "react";

const Divider = () => {
  return (
    <div className="flex w-full h-[1px] mb-5 z-[500] relative justify-center items-center">
      <span className=" w-[50%] h-[1px] bg-gray-200 dark:bg-gray-700 "></span>
      <span className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 mx-5"></span>
      <span className="w-[50%] h-[1px] bg-gray-200 dark:bg-gray-700 "></span>
    </div>
  );
};

export default Divider;
