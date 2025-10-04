import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Layers */}
        <img
          src="/Rectangle 38.svg"
          alt="Main Black Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-30"
        />
        <img
          src="/Rectangle 39.svg"
          alt="Outer Background Curve"
          className="absolute inset-0 w-full h-full object-fill -z-20"
        />
        <img
          src="/Rectangle 41.svg"
          alt="Inner Background Curve"
          className="absolute inset-0 w-full h-[96%] object-fill -z-10"
        />
{/* Arrows Inside the Curve */}
<div
  className="
    absolute
    bottom-[5%] sm:bottom-[5%] md:bottom-[10%] lg:bottom-[8%]
    left-1/2 md:left-auto
    right-auto md:right-[20%] lg:right-[25%]
    -translate-x-1/2 md:translate-x-0
    flex items-center gap-3 z-20
  "
>
  <div className="bg-white p-2 rounded-full hover:bg-white/20 cursor-pointer transition">
    <ArrowLeft color="black" size={20} />
  </div>
  <div className="bg-white p-2 rounded-full hover:bg-white/20 cursor-pointer transition">
    <ArrowRight color="black" size={20} />
  </div>
</div>

        <div className="relative z-10 container grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-4 px-6">
      
          <div className="flex mt-8 justify-center md:justify-start">
            <img
              src="/Mobile-Mockup.svg"
              alt="App Showcase"
              className="w-[200px] lg:w-[360px]"
            />
          </div>

          {/* Right - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              Leading the Way in App Development Innovation
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-100">
              We build Android &amp; iOS Mobile Apps that cater to all your business needs.
            </p>
            <button className="mt-6 px-5 py-2 rounded bg-gradient-to-r from-[#4b0000] to-[#b31217] text-white font-semibold shadow-md hover:opacity-90">
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
