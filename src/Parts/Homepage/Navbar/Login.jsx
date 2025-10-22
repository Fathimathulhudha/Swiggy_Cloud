import React, { useState } from "react";

const Login = ({ close }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Phone Number: ${phone}`);
  };

  return (
    <div className="p-8 flex flex-col h-full text-gray-800">
      
      {/* Close Button */}
      <button onClick={close} className="text-2xl mb-4 text-gray-500 hover:text-black">
        ×
      </button>

      {/* Title Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-gray-500">
            or <span className="text-amber-700 font-semibold cursor-pointer hover:underline">create an account</span>
          </p>
          <div className="w-10 h-1 bg-gray-300 rounded mt-2"></div>
        </div>

        {/* Right-side Icon */}
        <img
          src="https://img.freepik.com/premium-vector/paper-grocery-bag-filled-with-food-flat-style_198278-34.jpg"
          className="w-16"
          alt="Icon"
        />
      </div>

      {/* Input Field */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="border border-gray-300 rounded-md px-4 py-3">
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full outline-none"
            maxLength="10"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-black hover:bg-amber-700 text-white font-semibold py-3 rounded-md transition"
        >
          LOGIN
        </button>
      </form>

      {/* Terms & Privacy */}
      <p className="text-sm text-gray-500 mt-4">
        By clicking on Login, I accept the{" "}
        <span className="font-semibold text-gray-700 cursor-pointer">Terms & Conditions</span> &{" "}
        <span className="font-semibold text-gray-700 cursor-pointer">Privacy Policy</span>
      </p>
    </div>
  );
};

export default Login;
