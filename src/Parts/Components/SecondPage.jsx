import React from 'react'
import Header from "./Header";
import Category from "./Category";
import RestaurantGrid from "./RestaurantGrid";
import TopRestaurants from "./TopRestaurants";
import Footer from '../Swiggy_Land/Footer';

const SecondPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Category />

      <TopRestaurants />
      <RestaurantGrid/>
      <Footer />
    </div>
  );
};

export default SecondPage;