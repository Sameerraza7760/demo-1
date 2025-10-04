const Services = () => {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#4b0000] to-[#b31217] py-16 px-8">
      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 relative z-10">
        
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>

      {/* Vector Image pinned bottom-right */}
      <img
        src="/vector-service.svg"
        alt="Services Illustration"
        className="absolute bottom-[-58] right-0 w-[200px] sm:w-[380px] md:w-[350px] lg:w-[350px] h-auto object-contain"
      />
    </section>
  )
}

export default Services;
