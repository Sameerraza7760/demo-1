import React from "react";

const Footer = () => {
  return (
   <footer className="w-full bg-[#20222D]">
  {/* Main Footer */}
  <div className="py-16 px-6 border-b border-gray-700">
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-white">
      {/* Column 1 */}
      <div>
        <div className="mb-4">
          <img src="/Logo-Final 2.svg" alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Tel: +1 (800) 826-8018 </a></li>
            <li><a href="#">Email: info@appicoders.com</a></li>
          </ul>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Appicoders Services</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#">IPHONE APPLICATION DEVELOPMENT</a></li>
          <li><a href="#">ANDROID APPLICATION DEVELOPMENT</a></li>
          <li><a href="#">ENTERPRISE APP DEVELOPMENT</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="py-4 text-center text-gray-500 text-sm">
    © 2025 APPICODERS. ALL RIGHTS RESERVED.
  </div>
</footer>

  );
};

export default Footer;
