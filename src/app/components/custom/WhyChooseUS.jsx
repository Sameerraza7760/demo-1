import React from "react";
import { Users, ClipboardCheck, CreditCard } from "lucide-react";

const WhyChooseUs = () => {
  return (
 <section className="w-full bg-gray-100 py-16 overflow-hidden">
  <div className="mx-auto text-center relative">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Why Choose Us?
    </h2>
    <p className="mt-3 text-gray-900 max-w-2xl font-semibold mx-auto">
      With our unique approach and cost-effective solutions, your business
      will prosper because quality is the top priority for us.
    </p>

    {/* Circles Row */}
    <div className="mt-12 flex items-start justify-center gap-6 relative">
      {/* Circle 1 - Half visible left */}
      <div className="flex flex-col items-center text-center -ml-24">
        <div className="w-80 h-80 rounded-full bg-white shadow-md flex flex-col items-center justify-center px-4 opacity-70">
          <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded mb-4">
            <img src="/brain.svg" alt="Brain Icon" className="h-6 w-6" />
          </div>
          <h3 className="text-md font-semibold text-gray-600">
            Focused Business
          </h3>
          <p className="mt-2 text-xs text-gray-500">
We research, plan, and execute - and these qualities make Appicoders`stand out from the crowd. We put the needs of our clients ahead of us.          </p>
        </div>
      </div>

      {/* Circle 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-80 h-80 rounded-full bg-white shadow-md flex flex-col items-center justify-center px-6 opacity-70">
          <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded mb-4">
            <img src="/brain.svg" alt="Strategy Icon" className="h-6 w-6" />
          </div>
          <h3 className="text-md font-semibold text-gray-600">Focused Business
</h3>
          <p className="mt-2 text-xs text-gray-500">
We research, plan, and execute - and these qualities make Appicoders`stand out from the crowd. We put the needs of our clients ahead of us.

          </p>
        </div>
      </div>

      {/* Circle 3 (Highlighted center) */}
      <div className="flex flex-col items-center text-center z-10">
        <div className="w-80 h-80 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center px-6">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
            <img src="/creative-team.svg" alt="Creative Team" className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-md font-bold text-gray-900">Professional Team</h3>
          <p className="mt-2 text-xs text-gray-600">
Our mobile development company has extremely professional & expert mobileapp developers who specialize in 2D, 3D, & Isometric apps for Android, IOS, & webapp platforms.          </p>
        </div>
      </div>

      {/* Circle 4 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-80 h-80 rounded-full bg-white shadow-md flex flex-col items-center justify-center px-6 opacity-70">
          <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded mb-4">
            <img src="/credit-card.svg" alt="Credit Card" className="h-6 w-6" />
          </div>
          <h3 className="text-md font-semibold text-gray-600">Flexible Payment</h3>
          <p className="mt-2 text-xs text-gray-500">
            Get your apps developed with affordable prices and flexible payment terms.
          </p>
        </div>
      </div>

      {/* Circle 5 - Half visible right */}
      <div className="flex flex-col items-center text-center -mr-24">
        <div className="w-80 h-80 rounded-full bg-white shadow-md flex flex-col items-center justify-center px-6 opacity-70">
          <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded mb-4">
            <img src="/support.svg" alt="Support Icon" className="h-6 w-6" />
          </div>
          <h3 className="text-md font-semibold text-gray-600">24/7 Support</h3>
          <p className="mt-2 text-xs text-gray-500">
            Dedicated support team always ready to help your business grow.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default WhyChooseUs;


