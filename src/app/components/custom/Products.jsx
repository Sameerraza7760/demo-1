"use client";
import React from "react";

const Products = () => {
  return (
    <section className="relative w-full bg-[#D11725] py-16 px-6 sm:px-8 overflow-hidden">
      {/* === Background Vectors === */}
      <div className="absolute inset-0 -z-10">
        {/* Rename your vector files in /public to vector1.svg and vector2.svg */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-30"
          style={{ backgroundImage: "url('/vector1.svg')" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-30"
          style={{ backgroundImage: "url('/vector2.svg')" }}
        ></div>
      </div>

      {/* === Main Content === */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Products
        </h2>

        {/* === Responsive Product Category List === */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-10 px-4">
          {[
            "All",
            "Health Supreme",
            "CRM 365",
            "OSDA",
            "MarketPlace Ecommerce Platform",
            "Support Training Apps",
            "Fitness",
          ].map((item, index) => (
            <li
              key={index}
              className={`list-none font-semibold text-sm sm:text-base cursor-pointer transition whitespace-nowrap ${
                item === "All"
                  ? "text-white underline underline-offset-4 decoration-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* === Product Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Box 1 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-56 hover:shadow-xl transition">
            <img src="/Laptop0.svg" alt="Product 1" className="max-h-40" />
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-56 hover:shadow-xl transition">
            <img src="/Laptop-2 1.svg" alt="Product 2" className="max-h-40" />
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-56 hover:shadow-xl transition">
            <img src="/Mobile-1 1.svg" alt="Product 3" className="max-h-40" />
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-56 hover:shadow-xl transition">
            <img src="/ipad-2 1.svg" alt="Product 4" className="max-h-40" />
          </div>

          {/* Box 5 — With Overlay */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-56 hover:shadow-xl transition">
            {/* Product Image */}
            <img
              src="/Mobile-1 1.svg"
              alt="Product 5"
              className="w-full h-full object-contain"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center text-center px-4">
              <img
                src="/square.svg"
                alt="Icon"
                className="w-10 h-10 mb-3 opacity-90"
              />
              <h3 className="text-white font-semibold text-lg">
                Health Supreme
              </h3>
              <p className="text-gray-200 text-sm mt-1 max-w-[250px] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas et mi condimentum.
              </p>
            </div>
          </div>

          {/* Box 6 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-56 hover:shadow-xl transition">
            <img src="/Laptop-2 1.svg" alt="Product 6" className="max-h-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
