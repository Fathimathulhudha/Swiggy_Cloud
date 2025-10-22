import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Header from "../Components/Header";

import BlackForestCake from "../../assets/Add/BlackForestCake.png";
import white from "../../assets/Add/white.png";
import bluberry from "../../assets/Add/bluberry.png";
import Rasmalaicup from "../../assets/Add/Rasmalaicup.png";
import german from "../../assets/Add/german.png";

export default function CakePage() {
  const { addToCart } = useContext(CartContext);
const [addedItems, setAddedItems] = useState([]); 

  const restaurant = {
    name: "Cutiepie Cakes",
    rating: 4.4,
    location: "Fort Kochi",
    offer: "20% OFF",
    cuisine: "Ice Cream Cakes",
    img: BlackForestCake,
  };

  const recommendedFoods = [
    {
      id: 1,
      name: "German Blackforest Cake",
      price: 1200,
      img: german,
      ingredients: ["Chocolate Sponge", "Cherries", "Whipped Cream"],
      description:
        "Experience the classic taste of our 1kg German Black Forest Cake, made with layers of moist chocolate sponge, fresh cherries, and whipped cream.",
      size: "1 kg",
      calories: 4500,
    },
    {
      id: 2,
      name: "White Forest Cake",
      price: 350,
      img: white,
      ingredients: ["Vanilla Sponge", "White Chocolate", "Cherries"],
      description:
        "Experience the delicate flavors of our White Forest Cake, featuring layers of vanilla sponge, white chocolate shavings, and fresh cherries.",
      size: "1 kg",
      calories: 4000,
    },
    {
      id: 3,
      name: "Blueberry Cake",
      price: 1120,
      img: bluberry,
      ingredients: ["Sponge", "Blueberry Compote", "Fresh Blueberries"],
      description:
        "Indulge in our Blueberry Cake, featuring layers of soft sponge filled with tangy blueberry compote and topped with fresh blueberries.",
      size: "1 kg",
      calories: 4200,
    },
    {
      id: 4,
      name: "Rasmalaicup",
      price: 334,
      img: Rasmalaicup,
      ingredients: ["Rasgulla", "Vanilla Sponge", "Mixed Nuts", "Rasmalai Milk"],
      description:
        "A rich and creamy fusion dessert made with soft rasgulla, vanilla sponge, mixed nuts, and fresh rasmalai milk, topped with saffron-infused sauce.",
      size: "1 cup",
      calories: 600,
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