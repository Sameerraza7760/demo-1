"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const circles = [
    {
      icon: "/brain.svg",
      title: "Focused Business",
      desc: "We research, plan, and execute — and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlight: false,
    },
    {
      icon: "/brain.svg",
      title: "Focused Business",
      desc: "We research, plan, and execute — and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlight: false,
    },
    {
      icon: "/creative-team.svg",
      title: "Professional Team",
      desc: "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & Isometric apps for Android, iOS, & web app platforms.",
      highlight: true,
    },
    {
      icon: "/credit-card.svg",
      title: "Flexible Payment",
      desc: "Get your apps developed with affordable prices and flexible payment terms.",
      highlight: false,
    },
    {
      icon: "/creative-team.svg",
      title: "24/7 Support",
      desc: "Dedicated support team always ready to help your business grow.",
      highlight: false,
    },
  ];

  const doubled = [...circles, ...circles];

  return (
    <section className="w-full bg-gray-100 py-16 overflow-hidden">
      <div className="mx-auto text-center relative">
     
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us?
        </h2>
        <p className="mt-3 text-gray-900 max-w-2xl font-semibold mx-auto">
          With our unique approach and cost-effective solutions, your business
          will prosper because quality is the top priority for us.
        </p>

        {/* Infinite Carousel */}
        <div className="mt-12 relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {doubled.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center shrink-0 ${
                  i === 0 ? "-ml-24" : ""
                } ${i === doubled.length - 1 ? "-mr-24" : ""}`}
              >
                <div
                  className={`w-80 h-80 rounded-full bg-white shadow-md flex flex-col items-center justify-center px-6 ${
                    item.highlight
                      ? "shadow-2xl opacity-100"
                      : "opacity-70"
                  }`}
                >
                  <div
                    className={`${
                      item.highlight
                        ? "w-15 h-12 bg-red-600"
                        : "w-15 h-12 bg-gray-400"
                    } rounded-md flex items-center justify-center mb-4`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={`${item.highlight ? "h-8 w-8" : "h-6 w-6"}`}
                    />
                  </div>
                  <h3
                    className={`text-md font-semibold ${
                      item.highlight ? "text-gray-900 font-bold" : "text-gray-600"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs ${
                      item.highlight ? "text-gray-600" : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
