import React, { useContext, useState} from "react";
import Header from "../Components/Header";
import { CartContext } from "../Context/CartContext";

import starbucksImg from "../../assets/Add/starbucks.png";
import cappuccinoImg from "../../assets/Add/cappuccino.png";
import latteImg from "../../assets/Add/latte.png";
import muffinImg from "../../assets/Add/muffin.png";
import espressoImg from "../../assets/Add/espresso.png";

export default function RestaurantPage() {
  const { addToCart } = useContext(CartContext); 
  const [addedItems, setAddedItems] = useState([]); 
  const restaurant = {
    name: "Starbucks Coffee",
    rating: 4.4,
    location: "Willingdon Island",
    offer: "20% OFF",
    cuisine: "Cafe, Beverages, Snacks",
    img: starbucksImg,
  };

  const recommendedFoods = [
    {
      id: 1,
      name: "Cappuccino",
      price: 120,
      img: cappuccinoImg,
      ingredients: ["Espresso", "Steamed Milk", "Foam"],
      description:
        "A classic Italian coffee drink with rich espresso and creamy steamed milk.",
      calories: 150,
      size: "Medium",
    },
    {
      id: 2,
      name: "Latte",
      price: 150,
      img: latteImg,
      ingredients: ["Espresso", "Steamed Milk", "Vanilla Syrup"],
      description:
        "Smooth espresso with steamed milk and a hint of vanilla syrup.",
      calories: 180,
      size: "Medium",
    },
    {
      id: 3,
      name: "Blueberry Muffin",
      price: 80,
      img: muffinImg,
      ingredients: ["Flour", "Sugar", "Blueberries", "Butter"],
      description: "Soft and fluffy muffin loaded with fresh blueberries.",
      calories: 250,
      size: "1 piece",
    },
    {
      id: 4,
      name: "Espresso",
      price: 100,
      img: espressoImg,
      ingredients: ["Espresso Beans", "Water"],
      description: "Strong and bold espresso shot with rich aroma.",
      calories: 50,
      size: "Small",
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
        {/* Restaurant Info */}
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