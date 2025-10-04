import React from "react";

const Awards = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-10 sm:mb-12 underline underline-offset-8 decoration-red-600">
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-12 md:gap-16 place-items-center">
        
          <div className="flex items-center justify-center">
            <img
              src="/image 4.svg"
              alt="Award 1"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform hover:scale-105"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-black/80 backdrop-blur-sm shadow-md hover:shadow-lg transition">
              <img
                src="/outer-logo1.svg"
                alt="Outer Logo"
                className="absolute top-3 sm:top-4 h-20 sm:h-24 md:h-28 w-auto object-contain z-10"
              />
              <img
                src="/inner-logo.svg"
                alt="Inner Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain opacity-60 transition-opacity hover:opacity-90"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/image 13.svg"
              alt="Award 3"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/image 2.svg"
              alt="Award 4"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
