import React, { useContext, useState} from "react";
import Header from "../Components/Header";
import { CartContext } from "../Context/CartContext";


import sushi from "../../assets/Add/sushi.png";
import sushi1 from "../../assets/Add/sushi1.png";
import sushi2 from "../../assets/Add/sushi2.png";
import sushi3 from "../../assets/Add/sushi3.png";
import sushi4 from "../../assets/Add/sushi4.png";

export default function SushiPage() {
  const { addToCart } = useContext(CartContext); 
  const [addedItems, setAddedItems] = useState([]); 
  const restaurant = {
    name: "Sushi 's World",
    rating: 4.4,
    location: "Calicut",
    offer: "20% OFF",
    cuisine: "Sushi",
    img: sushi,
  };

  const recommendedFoods = [
    {
      id: 1,
      name: "Nigiri Sushi",
      price: 120,
      img: sushi1,
      ingredients: ["sushi"],
      description:"mall hand-pressed rice ball topped with raw or cooked fish",
      size: "1 kg",
      calories: 4500,
    },
    {
      id: 2,
      name: "Maki Sush",
      price: 350,
      img:sushi2,
      ingredients: ["Perfect balance of flavor and texture"],
      description:"Seaweed (nori) wrapped around rice and fillings",
      size: "1 kg",
      calories: 4000,
    },
    {
      id: 3,
      name: "Spicy Tuna Roll",
      price: 1120,
      img: sushi3,
      ingredients: ["Great choice for spice lovers"],
      description:"Often includes cucumber or scallion for crunch",
      size: "1 kg",
      calories: 4200,
    },
    {
      id: 4,
      name: "Sashimi",
      price: 334,
      img: sushi4,
      ingredients: ["Thinly sliced raw fish, served without rice"],
      description:"Often garnished with radish, wasabi, and soy sauce",
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