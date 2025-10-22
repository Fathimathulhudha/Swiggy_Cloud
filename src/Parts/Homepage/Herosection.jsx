import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";
import heroVideo from "../../assets/Hero/heroVideo.mp4";
import { Link } from "react-router-dom";
import Login from "./Navbar/Login";

const Herosection = ({ onGetAppClick }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.nav
        className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-5 text-white z-30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-2xl font-bold flex items-center gap-4">
          <FaShoppingBag />
          <h1 className="hover:text-orange-400 transition">Swiggy</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/about" className="hover:text-orange-400 transition">
            Swiggy Corporate
          </Link>

          <Link to="/second" className="hover:text-orange-400 transition">
            Restaurant Part
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            className="border border-black px-4 py-2 rounded-full hover:bg-orange-500 transition"
            onClick={onGetAppClick}
          >
            Get the App ↗
          </button>
          <button
            className="bg-black/10 px-5 py-2 rounded-md hover:bg-orange-500 transition"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>
        </div>
      </motion.nav>

    
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-500 ease-in-out z-50 ${
          showLogin ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Login close={() => setShowLogin(false)} />
      </div>

      
      {showLogin && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setShowLogin(false)}
        ></div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
          Order food & groceries. <br />
          Discover best restaurants. <br /> <span>Swiggy it!</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4 w-full max-w-5xl">
          <div className="bg-white rounded-lg flex items-center px-4 py-3 w-full md:w-80 shadow-lg">
            <span className="text-black mr-2">📍</span>
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="flex-1 text-black focus:outline-none"
            />
          </div>
          <div className="bg-white rounded-lg flex items-center px-4 py-3 w-full md:w-96 shadow-lg">
            <span className="text-black mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="flex-1 text-black focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
