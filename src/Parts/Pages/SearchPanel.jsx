import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

// Example search data
const searchData = [
  "Pizza",
  "Biryani",
  "Burgers",
  "Sushi",
  "Ice Cream",
  "Paneer Butter Masala",
  "Chai",
  "Sandwiches",
  "Pasta",
  "Dosa",
  "Pav Bhaji",
];

export default function SearchPanel() {
  const [query, setQuery] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  // Filter suggestions based on input
  const filteredData = searchData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto mt-50">
      {/* Search Input */}
      <div className="flex items-center border rounded-lg shadow-sm px-4 py-2 bg-white">
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          className="flex-grow outline-none text-gray-700 placeholder-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowPanel(true)}
          onBlur={() => setTimeout(() => setShowPanel(false), 100)} // Delay to allow click
        />
        {query && (
          <RxCross2
            className="text-gray-500 cursor-pointer ml-2"
            size={20}
            onClick={() => setQuery("")}
          />
        )}
      </div>

      {/* Search Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full bg-white mt-2 border rounded-lg shadow-lg max-h-80 overflow-y-auto"
          >
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-orange-100 cursor-pointer transition"
                  onMouseDown={() => {
                    setQuery(item);
                    setShowPanel(false);
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No results found</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
