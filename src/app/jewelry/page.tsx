import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const products = [
  {
    img: "/product1.jpg", 
    title: "Gold Necklace",
    desc: "A stunning gold necklace with intricate detailing.",
    rating: 5,
    price: "500",
  },
  {
    img: "/product2.jpg", 
    title: "Diamond Earrings",
    desc: "Elegant diamond earrings perfect for special occasions.",
    rating: 4,
    price: "750",
  },
  {
    img: "/product3.jpg", 
    title: "Silver Bracelet",
    desc: "A sleek silver bracelet suitable for everyday wear.",
    rating: 4,
    price: "300",
  },
  {
    img: "/product4.jpg", 
    title: "Pearl Ring",
    desc: "A beautiful pearl ring that adds elegance to any outfit.",
    rating: 5,
    price: "400",
  },
  {
    img: "/product5.jpg", 
    title: "Platinum Pendant",
    desc: "An exquisite platinum pendant with a minimalist design.",
    rating: 5,
    price: "600",
  },
  {
    img: "/product6.jpg", 
    title: "Gemstone Anklet",
    desc: "A colorful gemstone anklet that adds a playful touch to your look.",
    rating: 4,
    price: "250",
  },
  {
    img: "/product4.jpg", 
    title: "Pearl Ring",
    desc: "A beautiful pearl ring that adds elegance to any outfit.",
    rating: 5,
    price: "400",
  },
  {
    img: "/product1.jpg", 
    title: "Gold Necklace",
    desc: "A stunning gold necklace with intricate detailing.",
    rating: 5,
    price: "500",
  },
];


const generateRating = (rating: number) => {
  return (
    <div className="flex gap-1 text-[20px] text-[#FF9529]">
      {[...Array(5)].map((_, index) => (
        index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
      ))}
    </div>
  );
};

const Jewelry = () => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Jewelry Section</h1>
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
              <h2 className="text-accent text-black font-medium uppercase">{product.title}</h2>
              <p className="text-gray-500 max-w-[150px]">{product.desc}</p>
              <div>{generateRating(product.rating)}</div>
              <div className="font-bold flex gap-4">
                Rs: {product.price}.00
                <del className="text-gray-500 font-normal">Rs: {parseInt(product.price) + 50}.00</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Jewelry;
