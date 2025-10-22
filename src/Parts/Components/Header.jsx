import React, { useState, useContext } from "react";
import swiggylogo from "../../assets/Head/swiggylogo.png";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn, CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import Login from "../Homepage/Navbar/Login";
import SearchPanel from "../Pages/SearchPanel";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showLoginPanel, setShowLoginPanel] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  const links = [
    { icon: <IoIosSearch />, name: "Search" },  
    { icon: <CiDiscount1 />, name: "Offers", sup: "NEW" },
    { icon: <IoHelpBuoyOutline />, name: "Help", route: "/help" },
    { icon: <CgProfile />, name: "Sign In" },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="absolute left-0 top-0 w-[350px] h-full bg-white p-6 transition-left duration-500 flex flex-col"
          style={{ left: toggle ? "0" : "-100%" }}
          onClick={hideSideMenu}
        >
          <div className="mt-20">
            <div className="mb-4 relative">
              <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for area, street name..."
                className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                onClick={() => setShowSearchPanel(true)}
              />
            </div>
            <div className="mb-4 relative">
              <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Get Current Location"
                className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
      <header className="p-[15px] shadow-md bg-white z-50 relative">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[70px]">
            <img src={swiggylogo} alt="logo" className="w-full" />
          </div>
          <div className="ml-4">
            <span className="font-semibold border-b-[2px] border-b-orange-600">
              others
            </span>{" "}
            <RxCaretDown
              fontSize={25}
              className="inline text-[#ff7300] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="flex list-none gap-8 ml-auto text-[18px] font-semibold items-center">
            {links.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer flex items-center gap-2 hover:text-[#ff7300] transition ${link.name === "Sign In" ? "text-black" : ""
                  }`}
                onClick={() => {
                  if (link.name === "Search") setShowSearchPanel(true);
                  else if (link.name === "Sign In") setShowLoginPanel(true);
                  else if (link.route) navigate(link.route);
                }}
              >
                {link.icon}
                {link.name}
                <sup className="text-orange-600 text-[10px]">{link.sup}</sup>
              </li>
            ))}
            <li
              className="relative cursor-pointer flex items-center gap-2 hover:text-[#ff7300]"
              onClick={() => navigate("/cart")}
            >
              <IoCartOutline size={22} />
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-5 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </li>
          </nav>
        </div>
      </header>
      {showSearchPanel && <SearchPanel onClose={() => setShowSearchPanel(false)} />}
      {showLoginPanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-300"
            onClick={() => setShowLoginPanel(false)}
          ></div>

          <div
            className={`relative bg-white w-[400px] h-full p-8 overflow-auto transform transition-transform duration-300 rounded-l-2xl ${showLoginPanel ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <Login close={() => setShowLoginPanel(false)} />
          </div>
        </div>
      )}
    </>
  );
}
