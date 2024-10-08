import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="container pt-16 pb-16 grid-cols-2">
      <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
      <div className="grid lg:grid-cols-[300px,1fr] gap-4">
        <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
          <div className="text-center flex flex-col items-center gap-1">
            <Image
              className="rounded-full inline-block h-[100px] w-[100px]"
              src="/ang.jpeg"
              width={80}
              height={80}
              alt="user-image"
            />
            <h2 className="text-gray-500 font-black text-[20px]">
              Lepharam Ramchiary
            </h2>
            <p>CEO & Founder</p>
            <Image
              className="inline-block py-2"
              src="/qoute.png"
              width={30}
              height={30}
              alt="qoutes"
            />
            <p>This is a simple website creating using NextJS and Tailwind</p>
          </div>
        </div>

        <div className="bg-red-600 bg-[url(/new-collection.png)] bg-cover h-[500px] rounded-2xl grid place-items-center">
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-blackish text-white p-2 rounded-md">
              25% DISCOUNT
            </button>
            <h1 className="font-extrabold text-2xl text-[#272727]">
              Summer Collection
            </h1>
            <p>
              Starting @ Rs: 150 <b>Shop Now</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
