import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full bg-white py-12 px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
        
        {/* Left Heading */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            <span className="bg-gradient-to-r from-[#4b0000] to-[#b31217] bg-clip-text text-transparent">
              Appicoders
            </span>{" "}
            – #1 Mobile App & Web Development Company in USA
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Appicoders</span>, your trusted partner for expert mobile app and web development. 
            With over 10+ years of experience, we specialize in designing, developing, and marketing 
            cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
          </p>

          <button className="self-start px-6 py-3 rounded bg-gradient-to-r from-[#4b0000] to-[#b31217] text-white font-semibold shadow-md hover:opacity-90 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
