import React from "react";

const restaurantData = [
  {
    name: "Starbucks Coffee",
    img: "ResImg/Startbucks.png",
    rating: 4.4,
    time: "15-20 mins",
    cuisine: "Cafe, Beverages, Snacks",
    location: "Willingdon Island",
    offer: "20% OFF",
  },
  {
    name: " Sri Mu Saravana Bhavan",
    img: "GridImg/item.png",
    rating: 4.6,
    time: "20-25 mins",
    cuisine: "South Indian",
    location: "Thevara",
    offer: "₹125 OFF ABOVE ₹199",
  },
  {
    name: "Pizza Hut",
    img: "GridImg/item1.png",
    rating: 4.3,
    time: "25-30 mins",
    cuisine: "Pizza, Fast Food",
    location: "Kaloor",
    offer: "15% OFF",
  },
  {
    name: "Sushi World",
    img: "GridImg/sushii.png",
    rating: 4.5,
    time: "30-40 mins",
    cuisine: "Japanese, Sushi",
    location: "Marine Drive",
    offer: "10% OFF",
  },
  {
    name: "Cafe Mocha",
    img: "ResImg/coffee.png",
    rating: 4.1,
    time: "10-15 mins",
    cuisine: "Cafe, Desserts",
    location: "Fort Kochi",
    offer: "",
  },
  {
    name: "Domino's Pizza",
    img: "GridImg/item2.png",
    rating: 4.0,
    time: "20-25 mins",
    cuisine: "Pizza, Fast Food",
    location: "Edapally",
    offer: "5% OFF",
  },
  {
    name: "Green Leaf",
    img: "GridImg/item3.png",
    rating: 4.2,
    time: "15-20 mins",
    cuisine: "Healthy, Salads",
    location: "Panampilly Nagar",
    offer: "20% OFF",
  },
  {
    name: "Noodle House",
    img: "GridImg/nood.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Asian, Noodles",
    location: "Kakkanad",
    offer: "10% OFF",
  },
  {
    name: "Cafe Itallo",      
    img: "GridImg/pancaqke.png",
    rating: 4.5,
    time: "55-65 mins",
    cuisine: "Snacks, Beverages, Salads, Continental, Burgers, Desserts, Grill",
    location: "Panambally Nagar",
    offer: "ITEMS AT ₹89",
  },{
    name: "Dakshin Veg",
    img: "GridImg/paneer.png",
    rating: 4.3,
    time: "30-45 mins",
    cuisine: "South Indian",
    location: "Mavoor Road",
    offer: "10% OFF",
  },{
    name: "Bhuvaneershary",
    img: "GridImg/dosava.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "South Indian",
    location: "Kakkanad",
    offer: "20% OFF",
  },{
    name: "Periyar Kitchen",
    img: "GridImg/chiken.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "South indian",
    location: "Calicut",
    offer: "20% OFF",
  },{
    name: "Rahmath",
    img:"GridImg/biriyani.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Biriyanni",
    location: "Puthiyastand",
    offer: "UPTO ₹999",
  },{
    name: "Traditionz Express",
   img: "GridImg/fish.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Traditionz Express",
    location: "Kochi",
    offer: "10% OFF",
  },{
    name: "Dindigul Thalappakatti ",
    img: "GridImg/pthi.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Biryani, Barbecue, South Indian, Chinese, North Indian",
    location: "Kakkanad",
    offer: "10% OFF",
  },{
    name: "Gokul Oottupura",
    img: "GridImg/shero.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Asian, Noodles",
    location: "Kakkanad",
    offer: "10% OFF",
  },{
    name: "Gokul Oottupura",
   img:"GridImg/paneer.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "Asian, Noodles",
    location: "Kakkanad",
    offer: "10% OFF",
  },{
    name: "Hotel Anugraha",
    img: "GridImg/kerala.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "",
    location: "Kakkanad",
    offer: "10% OFF",
  },{
    name:"Hotel Aryaas Park",
    img: "GridImg/porattapneer.png",
    rating: 4.3,
    time: "20-25 mins",
    cuisine: "South Indian",
    location: "Panampilly Naga",
    offer: "ITEMS AT ₹49",
  },{
    name: "Family Restuarant",
    img: "GridImg/vareity.png",
    rating: 4.6,
    time: "20-25 mins",
    cuisine: "South Indian",
    location: "Kallayi",
    offer: "10% OFF",
  },
];

export default function RestaurantGrid() {
  return (
    <div className="max-w-[90%] mx-auto py-10">
      
      <h2 className="text-2xl md:text-2xl font-bold mb-6 text-black">
        Restaurants with online food delivery in Calicut
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {restaurantData.slice(0, 32).map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm 
                       transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
          >
        
            <div className="relative overflow-hidden justify-items-center">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="w-full h-32 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              {item.offer && (
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                  {item.offer}
                </span>
              )}
            </div>

            
            <div className="px-3 py-2">
              <h3 className="font-bold text-sm truncate">{item.name}</h3>
              <div className="flex items-center text-xs mt-1 text-gray-700">
                <span className="text-green-600 font-semibold flex items-center">
                  ★ {item.rating}
                </span>
                <span className="mx-2">•</span>
                <span>{item.time}</span>
              </div>
              <p className="text-gray-500 text-xs truncate">{item.cuisine}</p>
              <p className="text-gray-600 text-xs truncate">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
