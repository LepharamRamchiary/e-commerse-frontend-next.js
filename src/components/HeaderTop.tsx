import React from "react";

import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedinIn />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagramSquare />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="language"
              id="language"
            >
              <option value="EN">English</option>
              <option value="HI">Hindi</option>
              <option value="BO">Bodo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
