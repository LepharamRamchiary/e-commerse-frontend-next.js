import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    return (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {[...Array(5)].map((_, index) => (
          index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="p-2 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto object-cover"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4">
            Rs:{price}.00
            <del className="text-gray-500 font-normal">Rs:{parseInt(price) + 50}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
