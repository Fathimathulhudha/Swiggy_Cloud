import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  { q: "How do I track my order?", a: "Go to Orders → Select Active Order → Live tracking will show ETA and delivery details." },
  { q: "Can I cancel my order?", a: "If the restaurant hasn't started preparing, you can cancel from Orders section." },
  { q: "Payment deducted but order failed?", a: "Refund is automatic and usually reflects within 3–7 business days depending on bank." },
  { q: "How can I change my phone number?", a: "Go to Profile → Edit Phone Number → Verify using OTP to update." },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Blue Header */}
      <div className="bg-blue-600 py-6 text-center">
        <h1 className="text-white text-2xl font-semibold">Help & Support</h1>
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto mt-6 bg-white shadow border rounded-md">
        {faqs.map((item, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <span className="text-black font-medium">{item.q}</span>
              {openIndex === index ? <FiMinus className="text-black" /> : <FiPlus className="text-black" />}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-3 text-gray-700 text-sm">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}