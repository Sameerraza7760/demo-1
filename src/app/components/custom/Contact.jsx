const Contact = () => {
  return (
    <section className="w-full"> {/* reduced height */}
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Left Side - Red Form (take more width) */}
        <div className="bg-[#E01923] text-white p-18 md:w-2/3  flex flex-col justify-center">
          <h4 className="text-sm uppercase tracking-wider mb-2">LET’S TALK</h4>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Got an idea? Let’s get in touch!
          </h2>
          <p className="mb-6 text-sm md:text-base">
            Have queries? Not sure of your App Strategy? Discuss with us and
            we’ll guide you the way forward.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
            ></textarea>

          <button type="submit" className="w-full py-3 bg-gradient-to-b from-red-600 to-red-800 text-white rounded-md font-semibold hover:opacity-90 transition" > LET’S GET IN TOUCH </button>
          </form>
        </div>

        {/* Right Side (take less width) */}
        <div className="md:w-1/3 flex flex-col">
          {/* Top Image */}
          <div className="flex-1 relative h-[250px] md:h-full"> 
            <img
              src="/contact.svg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Dark Contact Info */}
          <div className="bg-[#20222D] text-white text-center p-6">
            <p className="mb-3 text-sm md:text-base">
              Please submit your inquiry and our App Development Strategist will
              contact you shortly
            </p>
            <div className="flex flex-col items-center">
         <img src="/Phone.svg" className="h-8 w-8" alt="" />
              <span className="text-lg md:text-xl mt-5 font-bold">
                +1-(800) 826 8018
              </span>
              <p className="text-sm md:text-base mt-1">info@appcoders.com</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
