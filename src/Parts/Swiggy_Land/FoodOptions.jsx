import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
import icecream from "../../assets/Food/icecream.png";
import falooda from "../../assets/Food/falooda.png";
import friedtuna from "../../assets/Food/friedtuna.png";
import italianpasta from "../../assets/Food/italianpasta.png";
import cusine from "../../assets/Food/cusine.png";
import pinecake from "../../assets/Food/pinecake.png";
import soup from "../../assets/Food/soup.png";

// 🍴 Food list
const foodItems = [
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
  { name: "Ice Cream", img: icecream },
  { name: "Falooda", img: falooda },
  { name: "Fried Tuna", img: friedtuna },
  { name: "Italian Pasta", img: italianpasta },
  { name: "Cusine", img: cusine },
  { name: "Pine Cake", img: pinecake },
  { name: "Soup", img: soup },
];

const FoodOptions = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -containerWidth : containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 relative w-full">

      <div className="flex justify-between items-center max-w-[90%] mx-auto mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Order our best food options
        </h2>


        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white border rounded-full p-1 shadow-sm hover:bg-gray-200 transition"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border rounded-full p-1 shadow-sm hover:bg-gray-200 transition"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth hide-scrollbar max-w-[90%] mx-auto"
      >
        <div className="grid grid-rows-2 grid-flow-col gap-6 px-2">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 object-contain select-none transform transition duration-300 hover:scale-110 shadow-lg rounded-xl image-reflect"
              />
              <p className="text-gray-800 text-sm font-medium text-center mt-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodOptions;






