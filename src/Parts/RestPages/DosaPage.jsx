import React, { useContext , useState } from "react";
import Header from "../Components/Header";
import { CartContext } from "../Context/CartContext";

import masala from "../../assets/Add/masala.png";
import gheeroast from "../../assets/Add/gheeroast.png";
import butter from "../../assets/Add/butter.png";
import butterroast from "../../assets/Add/butterroast.png";
import spl from "../../assets/Add/spl.png";

export default function DosaPage() {
  const { addToCart } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]); 
  const restaurant = {
    name: "Gokul Oottupura",
    rating: 4.7,
    location: "Kochi",
    offer: "₹200 for two",
    cuisine: "South Indian , North Indian",
    img: masala,
  };

  const recommendedFoods = [
    {
      id: 1,
      name: "Ghee Roast Dosa",
      price:119,
      img: gheeroast,
      ingredients: ["ghee"],
      description:
        "Dosa roasted in ghee and served with sambar & chutney.",
    },
    {
      id: 2,
      name: "Ghee Masala Dosa",
      price:119,
      img: butter ,
      ingredients: ["Roasted, potatao cruches"],
      description:"Roasted thin dosa stuffed with spiced potato based masala inside, served with chutney & sambar"
    },
    {
      id: 3,
      name: "Oottupura Spl Masala Dosa",
      price:119 ,
      img: spl,
      ingredients: [" Masala"],
      description:"House special Masala dosa."
    },
    {
      id: 4,
      name: "Butter Roast Dosa",
      price:159 ,
      img: butterroast,
      ingredients: ["Butter roast"],
      description:"Dosa roasted with lots of butter served with sambar & chutney.",
    },
  ];

 const handleAddToCart = (food) => {
    addToCart(food);
    setAddedItems((prev) => [...prev, food.id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== food.id));
    }, 1000); 
  };

  return (
    <div>
      <Header />
      <div className="max-w-[90%] mx-auto py-10">
     
        <div className="mb-6 pb-4 flex flex-col md:flex-row md:items-center md:space-x-6 shadow-md rounded-lg p-4">
          <img
            src={restaurant.img}
            alt={restaurant.name}
            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center text-gray-700 mb-1">
              <span className="text-orange-600 font-semibold mr-2">
                ★ {restaurant.rating}
              </span>
              <span>{restaurant.location}</span>
            </div>
            <p className="text-gray-500">{restaurant.cuisine}</p>
            {restaurant.offer && (
              <p className="mt-2 text-sm bg-black/70 text-white inline-block px-2 py-1 rounded">
                {restaurant.offer}
              </p>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Recommended Foods
        </h2>
        <div className="flex flex-col space-y-4">
          {recommendedFoods.map((food) => (
            <div
              key={food.id}
              className="flex flex-col md:flex-row justify-between items-center shadow-md rounded-lg p-4"
            >
              <div className="flex-1 mb-4 md:mb-0 md:pr-4">
                <p className="font-bold text-2xl">{food.name}</p>
                <p className="text-orange-600 mb-2">₹{food.price}</p>
                <p className="text-gray-700 mb-1">{food.description}</p>
                {food.ingredients && (
                  <p className="text-gray-500 text-sm mb-1">
                    Ingredients: {food.ingredients.join(", ")}
                  </p>
                )}
              </div>

              <img
                src={food.img}
                alt={food.name}
                className="w-full md:w-24 h-24 object-cover rounded-lg mb-2 md:mb-0"
              />

              <button
                className={`py-1 px-4 rounded mt-2 md:mt-0 md:ml-4 ${
                  addedItems.includes(food.id)
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:bg-orange-700"
                }`}
                onClick={() => handleAddToCart(food)}
              >
                {addedItems.includes(food.id) ? "ADDED" : "ADD"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}