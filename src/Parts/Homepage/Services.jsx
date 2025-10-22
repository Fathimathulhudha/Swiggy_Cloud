import React from "react";
import food from "../../assets/Servs/food.png";
import grocery from "../../assets/Servs/grocery.png";
import dine from "../../assets/Servs/dine.png";


const services = [
  { title: "FOOD DELIVERY", desc: "From Restaurants", offer: "UPTO 60% OFF", img: food },
  { title: "INSTAMART", desc: "Instant Grocery", offer: "UPTO 60% OFF", img: grocery },
  { title: "DINEOUT", desc: "Eat Out & Save More", offer: "UPTO 50% OFF", img: dine },
];

const Services = () => {
  return (
    <section className="grid md:grid-cols-3 gap-8 p-16 bg-white">
      {services.map((s, i) => (
        <div
          key={i}
          className="relative bg-white border border-gray-200 text-black rounded-2xl shadow-md p-6 h-64 w-full overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-lg font-bold mb-1">{s.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
          <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md mb-4">
            {s.offer}
          </span>

          <img
            src={s.img}
            alt={s.title}
            className="absolute bottom-2 right-2 w-28 h-28 object-contain pointer-events-none"
          />
        </div>
      ))}
    </section>
  );
};

export default Services;


