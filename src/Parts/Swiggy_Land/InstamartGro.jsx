import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import vegetables from "../../assets/Instant/vegetables.png";
import fruits from "../../assets/Instant/fruits.png";
import dairy from "../../assets/Instant/dairy.png";
import snacks from "../../assets/Instant/snacks.png";
import cleaning from "../../assets/Instant/cleaning.png";
import beverages from "../../assets/Instant/beverages.png";
import instant from "../../assets/Instant/instant.png";
import kitchn from "../../assets/Instant/kitchn.png";

const groceryItems = [
  { name: "Fresh Vegetables", img: vegetables },
  { name: "Fresh Fruits", img: fruits },
  { name: "Dairy", img: dairy },
  { name: "Snacks", img: snacks },
  { name: "Cleaning", img: cleaning },
  { name: "Cooldrinks", img: beverages },
  { name: "Instant food", img: instant },
  { name: "Home Appliances", img: kitchn },
];

const InstamartGro = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-10 relative">
      <div className="flex justify-between items-center max-w-[90%] mx-auto mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Shop groceries on Instamart
        </h2>

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white border rounded-full p-1 shadow-sm hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border rounded-full p-1 shadow-sm hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>
     <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-hidden scroll-smooth max-w-[90%] mx-auto px-2"
>
  {groceryItems.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center flex-shrink-0 min-w-[150px]"
    >
      <div className="w-32 h-40 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-gray-800 text-base font-medium text-center">
        {item.name}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default InstamartGro;
