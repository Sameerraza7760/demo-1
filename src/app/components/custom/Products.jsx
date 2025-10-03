import React from 'react'

const Products = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#4b0000] to-[#b31217] py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-12">Products</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Box 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/ipad-2 1.svg" alt="Product 1" className="max-h-40" />
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/Laptop-2 1.svg" alt="Product 2" className="max-h-40" />
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/Mobile-1 1.svg" alt="Product 3" className="max-h-40" />
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition">
            <img src="/ipad-2 1.svg" alt="Product 1" className="max-h-40" />
          </div>

          {/* Box 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition">
           <img src="/Mobile-1 1.svg" alt="Product 3" className="max-h-40" />
          </div>

          {/* Box 6 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition">
              <img src="/Laptop-2 1.svg" alt="Product 2" className="max-h-40" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Products
