import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import cartImg from "../../assets/App/cart.png"; // your empty cart image

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // If cart is empty, show empty cart image
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
        <img src={cartImg} alt="Empty Cart" className="w-64 h-64 mb-6" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500">
          You can go to home page to view more restaurants
        </p>
      </div>
    );
  }

  // If cart has items
  return (
    <div className="max-w-[90%] mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
      <div className="flex flex-col space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center shadow-md rounded-lg p-4"
          >
            <div>
              <p className="font-bold text-xl">{item.name}</p>
              <p className="text-orange-600">₹{item.price}</p>
            </div>
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <button
              className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <p className="mt-4 font-bold text-lg">
        Total: ₹{cart.reduce((total, item) => total + item.price, 0)}
      </p>

      <button
        className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        onClick={clearCart}
      >
        Checkout
      </button>
    </div>
  );
}
