import React, { useContext , useState } from "react"; // ✅ import useContext
import { CartContext } from "../Context/CartContext"; // ✅ CartContext
import Header from "../Components/Header";

// Import images
import dajaj from "../../assets/Add/dajaj.png";
import alfam from "../../assets/Add/alfam.png";
import rice from "../../assets/Add/rice.png";
import turkish from "../../assets/Add/turkish.png";
import tabaq from "../../assets/Add/tabaq.png";

export default function CurryPage() {
  const { addToCart } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);  // ✅ get addToCart

  const restaurant = {
    name: "Palaaram",
    rating: 4.4,
    location: "South Indian, Chinese",
    offer: "₹300 for two",
    cuisine: "Malabari",
    img: tabaq,
  };

  const recommendedFoods = [
    {
      id: 1,
      name: "Arabic Rice With Grilled Chicken",
      price: 371,
      img: rice,
      ingredients: ["Chicken", "Spices"], // ✅ array
      description:
        "Succulent grilled chicken marinated in a blend of aromatic Middle Eastern spices. Served with fragrant Arabic rice and tomato dip.",
      size: "1 kg",
      calories: 4500,
    },
    {
      id: 2,
      name: "Al Faham",
      price: 528.94,
      img: alfam,
      ingredients: ["2 Chapathi", "Mint Chutney", "Garlic Mayo", "Veg Salad"], // ✅ array
      description:
        "Tender grilled chicken served with Arabic rice and tomato dip.",
      size: "1 kg",
      calories: 4000,
    },
    {
      id: 3,
      name: "Turkish Al Fahm (Half)",
      price: 548,
      img: turkish,
      ingredients: ["Chicken", "Spices", "Sauce"], // ✅ array
      description:
        "Succulent grilled chicken marinated in aromatic Turkish spices. Served with Arabic rice and tomato dip.",
      size: "½ kg",
      calories: 4200,
    },
    {
      id: 4,
      name: "Dajaj Tabaq",
      price: 2134.84,
      img: dajaj,
      ingredients: [
        "Fiery Al Fahm Qtr",
        "BBQ Al Fahm Qtr",
        "Turkish Al Fahm Qtr",
        "4pc Afghani Grill Chicken",
        "2 Butter Naan",
        "2 Butter Roti",
        "Mint Chutney",
        "Garlic Mayo",
        "Veg Salad",
        "French Fries",
        "Spicy Cuts",
      ], // ✅ array
      description:
        "A grand platter with multiple grilled chicken varieties, naan, roti, dips, and fries — perfect for sharing.",
      size: "1 plate",
      calories: 6000,
    },
  ];

 const handleAddToCart = (food) => {
    addToCart(food);
    setAddedItems((prev) => [...prev, food.id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== food.id));
    }, 1000); // button green effect lasts 1s
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

        {/* Recommended Foods */}
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