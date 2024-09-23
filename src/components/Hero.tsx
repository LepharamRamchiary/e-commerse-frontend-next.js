"use client"

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner4.jpg",
      title: "Trending Item",
      mainTitle: "Women's Latest Fashion Sale",
      price: "Rs:200",
    },
    {
      id: 1,
      img: "/banner5.jpg",
      title: "Trending Accessories",
      mainTitle: "Modern Sunglasses",
      price: "Rs:150",
    },
    {
      id: 2,
      img: "/banner6.jpg",
      title: "Sale Offer",
      mainTitle: "New Fashion Summer Sale",
      price: "Rs:300",
    },
  ];

  return (
    <div className="">
      <div className="container pt-6 lg:pt-0">
        <Slider className="sm:mx-0 md:mx-0 lg:mx-3" {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
