import React from 'react'

const Industries = () => {
  return (
    <section className="w-full bg-[#EAEDEF] py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Industries</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Box 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/pills.svg" alt="Medical Icon" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Medical & Pharma Services
              </h3>
            </div>
            <p className="text-gray-600">
              We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/running-shoes.svg" alt="Training Icon" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Training & Fitness
              </h3>
            </div>
            <p className="text-gray-600">
              We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/digital-economy.svg" alt="Fintech Icon" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Fintech
              </h3>
            </div>
            <p className="text-gray-600">
              We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/healthcare.svg" alt="Health Icon" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Health & Fitness
              </h3>
            </div>
            <p className="text-gray-600">
              We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.
            </p>
          </div>

          {/* Box 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/briefcase (1).svg" alt="Business Icon" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Business & Services
              </h3>
            </div>
            <p className="text-gray-600">
              We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.
            </p>
          </div>

          {/* Box 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/cleaning.svg" alt="Cleaning Icon" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Cleaning Services
              </h3>
            </div>
            <p className="text-gray-600">
              We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Industries
