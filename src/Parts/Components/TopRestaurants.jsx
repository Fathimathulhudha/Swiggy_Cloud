import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const restaurants = [
  { name: "Starbucks Coffee", route: "/restaurant", rating: 4.4, cuisine: "Beverages, Cafe, Snacks, Desserts", price: "₹200 per person", distance: "2.1 km", offer: "20% OFF", img: "ResImg/Startbucks.png" },
  { name: "Gokul Oottupura", route: "/dosa", rating: 4.7, cuisine: "South Indian, North Indian, Snacks", price: "₹180 per person", distance: "3.4 km", offer: "ITEMS AT ₹69", img: "ResImg/gokulpalaram.png" },
  { name: "Palaaram", route: "/curry", rating: 4.6, cuisine: "South Indian, Chinese, Arabian", price: "₹220 per person", distance: "1.9 km", offer: "₹125 OFF ABOVE ₹399", img: "ResImg/palaram.png" },
  { name: "Noodles", route: "/noodles", rating: 4.8, cuisine: "Beverages, Snacks, Desserts", price: "₹250 per person", distance: "2.3 km", offer: "10% OFF UPTO ₹40", img: "ResImg/noodd.png" },
  { name: "French Toast", route: "/sushi", rating: 4.7, cuisine: "Continental, Bakery", price: "₹300 per person", distance: "3.1 km", offer: "201% OFF ABOVE ₹999", img: "ResImg/dish.png" },
  { name: "Pandal Cake Shop", route: "/cake", rating: 4.8, cuisine: "Bakery", price: "₹150 per person", distance: "2.8 km", offer: "ITEMS AT ₹119", img: "ResImg/pandal.png" },
  { name: "Pandhal Cafe & Deli David Hall", route: "/pizza", rating: 4.6, cuisine: "Beverages, Bakery", price: "₹260 per person", distance: "4.2 km", offer: "10% UPTO ₹40", img: "ResImg/coffee.png" },
  { name: "Burger King", route: "/fries", rating: 4.6, cuisine: "Beverages, Bakery", price: "₹260 per person", distance: "4.2 km", offer: "10% UPTO ₹40", img: "ResImg/burger.png" },
];

export default function TopRestaurants() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-10 relative">
     
      <div className="flex justify-between items-center max-w-[90%] mx-auto mb-6 px-2">
        <h2 className="text-2xl font-bold text-gray-800">
          Top restaurant chains in Kochi
        </h2>
        <div className="flex items-center gap-3">
          <div
            onClick={() => scroll("left")}
            className="cursor-pointer flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full hover:bg-gray-200 transition"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={() => scroll("right")}
            className="cursor-pointer flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full hover:bg-gray-200 transition"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2 max-w-[90%] mx-auto hide-scrollbar"
      >
        {restaurants.map((r, i) => (
          <div
            key={i}
            onClick={() => navigate(r.route)}
            className="flex-shrink-0 w-[280px] rounded-xl bg-white shadow hover:shadow-xl transition cursor-pointer"
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
}
