import React from "react";
import ProductCard from "./ProductCard";

const productDatas = [
  {
    img: "/product1.jpg",
    title: "Trending Item",
    desc: "Women's Latest Fashion Sale",
    rating: 3,
    price: "200",
  },
  {
    img: "/product2.jpg",
    title: "Stylish Sneakers",
    desc: "Comfortable and trendy footwear",
    rating: 4,
    price: "120",
  },
  {
    img: "/product3.jpg",
    title: "Classic Handbag",
    desc: "Elegant design for every occasion",
    rating: 5,
    price: "250",
  },
  {
    img: "/product4.jpg",
    title: "Cool Sunglasses",
    desc: "Protect your eyes in style",
    rating: 4,
    price: "80",
  },
  {
    img: "/product5.jpg",
    title: "Stylish Jacket",
    desc: "Perfect for chilly evenings",
    rating: 4,
    price: "150",
  },
  {
    img: "/product6.jpg",
    title: "Elegant Dress",
    desc: "For a night out or special occasions",
    rating: 5,
    price: "300",
  },
  {
    img: "/product7.jpg",
    title: "Trendy Backpack",
    desc: "Fashionable and functional for use",
    rating: 4,
    price: "90",
  },
  {
    img: "/product8.jpg",
    title: "Luxury Watch",
    desc: "Timeless elegance and precision",
    rating: 4,
    price: "500",
  },
];

const NewProtucts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl py-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productDatas.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProtucts;
