import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import res from "../../assets/Res/res.png";
import res1 from "../../assets/Res/res1.png";
import res2 from "../../assets/Res/res2.png";
import res3 from "../../assets/Res/res3.png";
import res4 from "../../assets/Res/res4.png";
import res5 from "../../assets/Res/res5.png";
import res6 from "../../assets/Res/res6.png";
import res7 from "../../assets/Res/res7.png";
import res8 from "../../assets/Res/res8.png";
import res9 from "../../assets/Res/res9.png";

const restaurants = [
  { name: "ZAM ZAM", cuisine: "North Indian • South Indian", price: "₹900 for two", rating: 3.4, img: res, distance: "2.3 km", offer: "10% off" },
  { name: "Le Papillon", cuisine: "North Indian • South Indian", price: "₹700 for two", rating: 3.4, img: res1, distance: "3.1 km", offer: "Bank offers" },
  { name: "The Eatery", cuisine: "North Indian • Asian", price: "₹1000 for two", rating: 4.3, img: res2, distance: "1.5 km", offer: "Flat 15% off" },
  { name: "Ciao Cochin", cuisine: "Italian • Beverages", price: "₹1200 for two", rating: 4.2, img: res3, distance: "4.5 km", offer: "Free Dessert" },
  { name: "Grill & Chill", cuisine: "BBQ • Grill", price: "₹800 for two", rating: 4.5, img: res4, distance: "2.0 km", offer: "10% off" },
  { name: "Arabian Treat", cuisine: "Shawarma • Juices", price: "₹600 for two", rating: 4.1, img: res5, distance: "2.8 km", offer: "Special combo" },
  { name: "Spice Garden", cuisine: "Indian • Chinese", price: "₹900 for two", rating: 4.0, img: res6, distance: "3.2 km", offer: "10% off" },
  { name: "Urban Bites", cuisine: "Continental • Desserts", price: "₹750 for two", rating: 4.3, img: res7, distance: "2.7 km", offer: "Free mocktail" },
  { name: "Tandoori Nights", cuisine: "Mughlai • North Indian", price: "₹1100 for two", rating: 4.4, img: res8, distance: "4.9 km", offer: "Weekend offer" },
  { name: "Pizza Street", cuisine: "Pizza • Beverages", price: "₹500 for two", rating: 4.2, img: res9, distance: "1.2 km", offer: "Buy 1 Get 1" },
];

const Restaurants = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 16;
      const scrollAmount = cardWidth * 4;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-10 relative">

      <div className="flex justify-between items-center max-w-[90%] mx-auto mb-6 px-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          Discover best restaurants on Dineout
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
        className="flex gap-4 overflow-x-auto scroll-smooth px-2 max-w-[90%] mx-auto hide-scrollbar"
      >
        {restaurants.map((r, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] rounded-xl bg-white shadow hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={r.img}
                alt={r.name}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2 flex justify-between items-end rounded-b-xl">
                <p className="text-white font-semibold truncate max-w-[180px]">
                  {r.name}
                </p>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  ⭐ {r.rating}
                </span>
              </div>
            </div>

            <div className="p-3 text-sm">
              <p className="text-gray-600 truncate">{r.cuisine}</p>
              <div className="flex justify-between text-gray-600 text-xs mt-1">
                <span>{r.price}</span>
                <span>{r.distance}</span>
              </div>
              <div className="mt-2 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded text-center">
                {r.offer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;  
