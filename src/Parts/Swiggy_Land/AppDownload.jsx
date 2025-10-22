import { motion } from "framer-motion";
import qr from "../../assets/App/qr.png";
import swiggylogo from "../../assets/App/swiggylogo.png";
import burgr from "../../assets/App/burgr.png"
import sushii from "../../assets/App/sushii.png";;
import foodbox from "../../assets/App/foodbox.png";

const AppDownload = () => {
  return (
    <section className="w-full bg-black py-16 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">


      <div className="text-white max-w-lg">
        <img src={swiggylogo} alt="logo" className="w-28 mb-4" />
        <h2 className="text-4xl font-bold leading-tight mb-3">Get the Swiggy App now!</h2>
        <p className="text-gray-900 text-lg">
          For best offers and discounts curated specially for you.
        </p>
      </div>


      <div className="relative mt-10 md:mt-0">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <img src={qr} alt="QR" className="w-40" />
          <p className="text-center text-orange-500 font-semibold mt-2">Scan to download</p>
        </div>


        <motion.img
          src={burgr}
          className="absolute -top-10 -left-14 w-20"
        />
        <motion.img
          src={sushii}
          className="absolute top-6 -right-20 w-20"
        />
        <motion.img
          src={foodbox}
          className="absolute bottom-0 -right-24 w-24"
        />
      </div>
    </section>
  );
};

export default AppDownload;

