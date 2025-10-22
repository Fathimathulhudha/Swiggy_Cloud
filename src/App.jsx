import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Parts/Context/CartContext";
import HomePage from './Parts/Swiggy_Land/HomePage';
import AboutUs from './Parts/Pages/AboutUs';
import SecondPage from './Parts/Components/SecondPage';
import CakePage from './Parts/RestPages/CakePage';
import CurryPage from './Parts/RestPages/CurryPage';
import DosaPage from './Parts/RestPages/DosaPage';
import FriesPage from './Parts/RestPages/FriesPage';
import NoodlesPage from './Parts/RestPages/NoodlesPage';
import PizzaHutPage from './Parts/RestPages/PizzaHutPage';
import RestaurantPage from './Parts/RestPages/RestaurantPage';
import SushiPage from './Parts/RestPages/SushiPage';
import Cart from './Parts/Pages/Cart';
import SearchPanel from './Parts/Pages/SearchPanel';
import Login from './Parts/Homepage/Navbar/Login';
import Help from './Parts/Pages/Help';

function App() {
  return (
    <div className="font-sans">
       <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/second" element={<SecondPage />} />
          <Route path="/search" element={<SearchPanel/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/cake" element={<CakePage />} />
          <Route path="/curry" element={<CurryPage/>} />
          <Route path="/dosa" element={<DosaPage/>} />
          <Route path="/fries" element={<FriesPage/>} />
          <Route path="/noodles" element={<NoodlesPage/>} />
          <Route path="/pizza" element={<PizzaHutPage/>} />
          <Route path="/restaurant" element={<RestaurantPage/>} />
          <Route path="/sushi" element={<SushiPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;