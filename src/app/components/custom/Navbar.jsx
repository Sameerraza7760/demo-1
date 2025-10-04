"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from "./../../../../public/Logo-Final-White 1.svg"
import Image from 'next/image'
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image 
            src={Logo}
            alt="Logo"
            width={190}
            height={110}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-col items-end text-white font-medium">
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

          <button className="mt-2 flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-red-600 transition">
            <Phone className="w-4 h-4" />
            +1 (800) 826-8018
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#20222D] text-white px-6 py-6 space-y-4">
          <Link href="#" className="block">Home</Link>
          <Link href="#" className="block">About</Link>
          <Link href="#" className="block">Services</Link>
          <Link href="#" className="block">Why Choose us</Link>
          <Link href="#" className="block">Portfolio</Link>
          <Link href="#" className="block">Products</Link>
          <Link href="#" className="block">Testimonials</Link>
          <Link href="#" className="block">Technologies</Link>
          <Link href="#" className="block">Contact</Link>

          <button className="w-full flex items-center justify-center gap-2 border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-red-600 transition">
            <Phone className="w-4 h-4" />
            +1 (800) 826-8018
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
