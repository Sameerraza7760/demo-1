"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import bgimage from "./../../../../public/bg-00.svg"

function Pill({ children, className }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium 
      text-red-600 border border-red-600
      bg-background/70 shadow-sm
      ${className || ""}`}
    >
      {children}
    </span>
  )
}

export default function CaseStudy() {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (!carouselRef.current) return
    const scrollAmount = 260 + 12 
    if (direction === "up") {
      carouselRef.current.scrollBy({ top: -scrollAmount, behavior: "smooth" })
    } else {
      carouselRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-10 rotate-[-6deg] transform bg-[oklch(var(--color-destructive))] opacity-90"
      />

      <div className="relative">
        <Image
          src={bgimage}
          alt=""
          width={1920}
          height={1080}
          priority
          className="h-[720px] w-full object-cover brightness-50"
        />
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 mx-auto flex max-w-6xl px-6">
        <div className="pointer-events-auto my-auto grid max-w-xl gap-5">
          <div className="flex items-center gap-3">
            <Pill>iOS Development</Pill>
            <Pill>Android Development</Pill>
            <Pill>UI/UX Design</Pill>
          </div>

          <h1 className="text-pretty text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl">
            Caviar – Order Food Delivery
          </h1>

          <p className="max-w-prose text-base leading-relaxed text-white">
            Get food delivered from curated lists of local restaurants right at
            your fingertips with Caviar. Enjoy quality dining at home and make
            any night a special occasion.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <img
              src="/appleStore.svg"
              alt="Download on the App Store"
              className="h-10 w-auto"
            />
            <img
              src="/playstore.svg"
              alt="Get it on Google Play"
              className="h-10 w-auto"
            />
          </div>

          <div>
            <button
              type="button"
              className="self-start px-6 py-3 rounded bg-gradient-to-r from-[#4b0000] to-[#b31217] text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>

        
        <div className="pointer-events-auto absolute right-6 top-1/2 hidden -translate-y-1/2 md:flex flex-row gap-2">
          <div className="relative flex flex-col items-center justify-center w-[280px] h-[860px] rounded-2xl p-3 gap-3 shadow-xl overflow-hidden">
            <div
              ref={carouselRef}
              className="flex flex-col space-y-3 overflow-y-auto scroll-smooth h-full scrollbar-hide"
            >
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-full rounded-xl bg-white/20 backdrop-blur-md p-2 shadow-md flex-shrink-0"
                  >
                    <img
                      src={`/crousal2.svg`}
                      alt={`Slide ${i + 1}`}
                      className="h-[260px] w-full object-cover rounded-lg"
                    />
                  </div>
                ))}
            </div>
          </div>

          
          <div className="flex flex-col gap-2 items-center justify-center">
            <button
              type="button"
              aria-label="Scroll up"
              onClick={() => scroll("up")}
              className="size-10 rounded-full border border-border bg-background/80 shadow-md backdrop-blur hover:bg-background"
            >
              <ChevronUp className="mx-auto size-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll down"
              onClick={() => scroll("down")}
              className="size-10 rounded-full border border-border bg-background/80 shadow-md backdrop-blur hover:bg-background"
            >
              <ChevronDown className="mx-auto size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
