import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import pottichur from "../../assets/Food/pottichur.png";
import burger from "../../assets/Food/burger.png";
import biryani from "../../assets/Food/biryani.png";
import shawarma from "../../assets/Food/shawarma.png";
import cake from "../../assets/Food/cake.png";
import parotta from "../../assets/Food/parotta.png";
import rolls from "../../assets/Food/rolls.png";
import salad from "../../assets/Food/salad.png";
import momo from "../../assets/Food/momo.png";
import pasta from "../../assets/Food/pasta.png";
import noodles from "../../assets/Food/noodles.png";

export default function Category() {
  const [category, setCategory] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    setCategory([
    { name: "Pottichur", img: pottichur },
  { name: "Burger", img: burger },
  { name: "Biryani", img: biryani },
  { name: "Shawarma", img: shawarma },
  { name: "Cake", img: cake },
  { name: "Parotta", img: parotta },
  { name: "Rolls", img: rolls },
  { name: "Salad", img: salad },
  { name: "Momo", img: momo },
  { name: "Pasta", img: pasta },
  { name: "Noodles", img: noodles },
    ]);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-12 px-6">
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">What's on your mind?</h2>
        <div className="flex gap-3">
          <div
            onClick={() => scroll("left")}
            className="cursor-pointer flex justify-center items-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={() => scroll("right")}
            className="cursor-pointer flex justify-center items-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

     
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide py-2"
      >
        {category.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 border-gray-200 rounded-xl cursor-pointer flex flex-col items-center px-4 py-4"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 object-contain" 
            />
            <h3 className="mt-3 font-semibold text-gray-800 text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
