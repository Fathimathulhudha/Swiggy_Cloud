import React, { useRef } from "react";
import Herosection from "../Homepage/Herosection"
import Service from "../Homepage/Services";
import FoodOptions from "./FoodOptions";
import InstamartSection from "./InstamartGro";
import Restaurants from "./Restaurants";
import AppDownload from "./AppDownload"
import Footer from "./Footer";

export default function HomePage() {
  const appRef = useRef(null);


  const scrollToApp = () => {
    appRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Herosection onGetAppClick={scrollToApp} />

      <Service />
      <FoodOptions />
      <InstamartSection />
      <Restaurants />

      <div ref={appRef}>
        <AppDownload />
      </div>
      <Footer />
    </div>
  );
}