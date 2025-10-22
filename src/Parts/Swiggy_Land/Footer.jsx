import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-gray-200 pt-12 mt-16 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Team</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Swiggy Blog</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-orange-500">Partner with Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Ride with Us</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Refund & Cancellation</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Available In</h3>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm w-full">
            <option>685 Cities</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Kolkata</option>
          </select>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Life at Swiggy</h3>
          <ul className="flex gap-3 text-gray-600 mt-2">
            <li><a href="#" className="hover:text-orange-500"><FaFacebookF size={18} /></a></li>
            <li><a href="#" className="hover:text-orange-500"><FaTwitter size={18} /></a></li>
            <li><a href="#" className="hover:text-orange-500"><FaInstagram size={18} /></a></li>
            <li><a href="#" className="hover:text-orange-500"><FaLinkedinIn size={18} /></a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600">Download the app for the best experience</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <FaApple size={24} />
            <div className="flex flex-col text-left">
              <span className="text-xs">Download on the</span>
              <span className="font-semibold">App Store</span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <FaGooglePlay size={24} />
            <div className="flex flex-col text-left">
              <span className="text-xs">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm py-4 border-t border-gray-300">
        &copy; {new Date().getFullYear()} FoodieApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

