"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-10 py-6 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight">
          Foodle
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-500">
          <li className="relative font-medium text-gray-900">
            Home
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary rounded-full" />
          </li>
          <li className="hover:text-gray-900 transition">Offer</li>
          <li className="hover:text-gray-900 transition">Service</li>
          <li className="hover:text-gray-900 transition">Menu</li>
          <li className="hover:text-gray-900 transition">About Us</li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button className="text-primary font-medium hover:opacity-80 transition">
            Login
          </button>
          <button className="px-5 py-2 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-gray-800" />
          <span className="w-6 h-[2px] bg-gray-800" />
          <span className="w-6 h-[2px] bg-gray-800" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col px-10 py-6 gap-6 text-sm text-gray-700">
            <li className="font-medium text-primary">Home</li>
            <li>Offer</li>
            <li>Service</li>
            <li>Menu</li>
            <li>About Us</li>

            <div className="pt-4 flex flex-col gap-4">
              <button className="text-primary font-medium text-left">
                Login
              </button>
              <button className="border border-primary text-primary py-2 rounded-full font-medium">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
