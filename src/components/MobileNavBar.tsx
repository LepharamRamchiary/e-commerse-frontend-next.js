import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const MobileNavBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-1/2 transform -translate-x-1/2 max-w-[100%] sm:max-w-[500px] px-6 sm:px-8 overflow-x-hidden">
      <div className="flex justify-between text-[24px] sm:text-[28px] py-2">
        <IoMenuOutline />
        <div className="relative">
          <HiOutlineShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] text-[10px] sm:text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>
        <AiOutlineHome />
        <div className="relative">
          <FiHeart />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] text-[10px] sm:text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>
        <AiOutlineAppstore />
      </div>
    </div>
  );
};

export default MobileNavBar;
