import React from 'react'
import Link from 'next/link'
import Logo from "./../../../../public/Logo-Final-White 1.svg"
import Image from 'next/image'
import { Phone } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="w-full bg-red-500">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">
        <Image 
    src={Logo}  // put your logo in /public/logo.png
    alt="Logo" 
    width={190}       // adjust size
    height={110} 
    priority 
  />
        </div>

       <div className="flex flex-col items-end text-white font-medium">
          {/* Links in a row */}
          <div className="flex gap-6">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Why Choose us</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Products</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Technologies</Link>
            <Link href="#">Contact</Link>
          </div>

          {/* Call Button aligned under Contact */}
          <button className="mt-2 flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-red-600 transition">
            <Phone className="w-4 h-4" />
            +1 (800) 826-8018
          </button>
        </div>
      </div>

    </nav>  
  )
}

export default Navbar