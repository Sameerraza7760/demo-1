import React from "react";

const Awards = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Awards & Recognition
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
          {/* Large Logo 1 */}
          <div className="flex items-center justify-center">
            <img
              src="/Image 2.svg"
              alt="Award 1"
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Large Logo 2 */}
          <div className="flex items-center justify-center">
            <img
              src="/Image 4.svg"
              alt="Award 2"
              className="h-40 w-auto object-contain"
            />
          </div>

          {/* Small Logo 3 */}
          <div className="flex items-center justify-center">
            <img
              src="/Image 13.svg"
              alt="Award 3"
             className="h-28 w-auto object-contain"
            />
          </div>

          {/* Small Logo 4 */}
          <div className="flex items-center justify-center">
            <img
              src="/Image 2.svg"
              alt="Award 4"
           className="h-28 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
