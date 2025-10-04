import React from "react"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Client Testimonials"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover [filter:blur(2px)]"
        style={{ backgroundImage: "url('/bg-7.svg')" }}
      />
         {/* <div className="relative bottom-[-80] left-[20] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
        <img src="/quote.svg" className="h-6 w-6" alt="" />
      </div> */}

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Red rectangle container */}
        <div className="relative rounded-lg overflow-hidden shadow-xl">
  {/* 🔴 Red overlay ONLY */}
  <div
    className="absolute inset-0"
    style={{
      backgroundColor: "#E01923",
      mixBlendMode: "multiply",
      boxShadow: `
        0px 20px 150px rgba(0,0,0,0.1), 
        inset 0px 20px 50px rgba(0,0,0,0.1)
      `,
    }}
  />

  {/* ✅ Content stays normal, no transparency */}
  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-12">
    {/* Left side content */}
    <div className="mt-12" >
   

      <p className="text-xs tracking-[0.2em] font-semibold text-white/80">
        CLIENT TESTIMONIALS
      </p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
        What our clients
        <br />
        are <span className="text-white">Saying.</span>
      </h2>
    </div>

    {/* Right side testimonial card */}
    <div className="flex items-center justify-center">
      <article className="relative rounded-lg bg-white p-6 sm:p-8 shadow-lg ring-2 ring-gray-200">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative">
            <img
              src="/clientimg.svg"
              alt="Scarlett Lawrence"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-white">
        <img className="h-2 w-2" src="/quote.svg" alt="" />
            </span>
          </div>
         <div>
  <h3 className="text-sm font-semibold text-gray-900 inline-block relative">
    Scarlett Lawrence
    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#E01923] to-transparent rounded-full"></span>
  </h3>
</div>

        </div>

        <p className="text-sm leading-5 text-gray-700">
          Thank you Team Appicoders—you guys have a great understanding of
          what’s current, and get things done very quickly compared to others.
          Reliable communication and collaborative suggestions on useful
          functionality during the planning stage made for a final product that
          surpassed initial expectations. Their project management is amazing.
          Tight deadlines were reliably met without issue. Our strong
          recommendation if you’re looking for quality work.
        </p>

        <div className="mt-6 flex justify-end gap-2">
          <span className="block h-[3px] w-10 rounded-full bg-[#E01923]" />
          <span className="block h-[3px] w-6 rounded-full bg-[#E01923]/70" />
        </div>
      </article>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}
