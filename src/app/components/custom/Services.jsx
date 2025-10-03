const Services = () => {
  return (
 <section className="w-full bg-gradient-to-r from-[#4b0000] to-[#b31217] py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">
        
        {/* Left Section */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl font-bold text-white mb-2">
            Our Services
          </h2>
          <p className="text-lg text-gray-200 mb-10">
            Get to know about what we're good at.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Custom Mobile Applications */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <img src="/custom-mobile-animation.svg" alt="Mobile Apps" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Custom Mobile Applications
                </h3>
                <p className="text-gray-200">iOS, Android and Wearable Apps</p>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <img src="/artificial-intelligence 1.svg" alt="AI" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-200">Innovative AI &amp; ML Solutions</p>
              </div>
            </div>

            {/* Custom Web Development */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <img src="/web-optimization 1.svg" alt="Web Development" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Custom Web Development
                </h3>
                <p className="text-gray-200">Robust Webs, Progressive Web Apps</p>
              </div>
            </div>

            {/* Blockchain Development */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <img src="/blockchain.svg" alt="Blockchain" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Blockchain Development
                </h3>
                <p className="text-gray-200">Custom Blockchain Solutions</p>
              </div>
            </div>

            {/* Augmented Reality */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <img src="/augmented-reality 1.svg" alt="AR" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Augmented Reality
                </h3>
                <p className="text-gray-200">Futuristic AR Apps</p>
              </div>
            </div>

            {/* MVP Development */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <img src="/mvp 1.svg" alt="MVP" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  MVP Development
                </h3>
                <p className="text-gray-200">For Startups &amp; Entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Placeholder for Vector */}
        <div className="flex items-center justify-center">
          <div className="w-full h-72 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
            <span className="text-white/70">[ Vector Placeholder ]</span>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Services