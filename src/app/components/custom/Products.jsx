import React from 'react'

const Products = () => {
  return (
    <section className="relative w-full bg-[#D11725] py-16 px-8 overflow-hidden">

      {/* Vector Pattern (Top + Bottom) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10"
        style={{ backgroundImage: "url('/Vector (2).svg')" }}
      ></div>

      <div
        className="absolute inset-0 bg-no-repeat bg-cover -z-10"
        style={{ backgroundImage: "url('/Vector (1).svg')" }}
      ></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-12">Products</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          
          {/* Box 1 */}
          <div className="bg-white rounded-xl shadow-lg  flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/ipad-2 1.svg" alt="Product 1" className="max-h-50" />
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl shadow-lg  flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/Laptop-2 1.svg" alt="Product 2" className="max-h-50" />
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/Mobile-1 1.svg" alt="Product 3" className="max-h-50" />
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/ipad-2 1.svg" alt="Product 4" className="max-h-50" />
          </div>

          {/* Box 5 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/Mobile-1 1.svg" alt="Product 5" className="max-h-50" />
          </div>

          {/* Box 6 */}
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/Laptop-2 1.svg" alt="Product 6" className="max-h-50" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
