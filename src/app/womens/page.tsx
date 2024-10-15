import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const products = [
  {
    img: "/product1.jpg",
    title: "Women's T-Shirt",
    desc: "A comfortable and stylish t-shirt for women.",
    rating: 4,
    price: "100",
  },
  {
    img: "/product2.jpg",
    title: "Women's Jeans",
    desc: "Trendy jeans perfect for every occasion.",
    rating: 5,
    price: "150",
  },
  {
    img: "/product3.jpg",
    title: "Women's Sneakers",
    desc: "Comfortable and versatile sneakers for everyday use.",
    rating: 3,
    price: "80",
  },
  {
    img: "/product1.jpg",
    title: "Women's T-Shirt",
    desc: "A comfortable and stylish t-shirt for women.",
    rating: 4,
    price: "100",
  },
  {
    img: "/product2.jpg",
    title: "Women's Jeans",
    desc: "Trendy jeans perfect for every occasion.",
    rating: 5,
    price: "150",
  },
  {
    img: "/product3.jpg",
    title: "Women's Sneakers",
    desc: "Comfortable and versatile sneakers for everyday use.",
    rating: 3,
    price: "80",
  },
  {
    img: "/product1.jpg",
    title: "Women's T-Shirt",
    desc: "A comfortable and stylish t-shirt for women.",
    rating: 4,
    price: "100",
  },
  {
    img: "/product3.jpg",
    title: "Women's Sneakers",
    desc: "Comfortable and versatile sneakers for everyday use.",
    rating: 3,
    price: "80",
  },
];

const generateRating = (rating: number) => {
  return (
    <div className="flex gap-1 text-[20px] text-[#FF9529]">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <AiFillStar key={index} />
        ) : (
          <AiOutlineStar key={index} />
        )
      )}
    </div>
  );
};

const Womens = () => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Women's Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-2 border border-gray-200 rounded-xl">
            <div>
              <Image
                className="w-full h-48 object-cover"
                src={product.img}
                width={200}
                height={200}
                alt={product.title}
              />
            </div>

            <div className="space-y-2 py-2">
              <h2 className="text-accent text-black font-medium uppercase">
                {product.title}
              </h2>
              <p className="text-gray-500 max-w-[150px]">{product.desc}</p>
              <div>{generateRating(product.rating)}</div>
              <div className="font-bold flex gap-4">
                Rs: {product.price}.00
                <del className="text-gray-500 font-normal">
                  Rs: {parseInt(product.price) + 50}.00
                </del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Womens;
