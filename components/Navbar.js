"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-10 py-6 flex items-center justify-between">

        <h1 className="text-xl font-semibold tracking-tight">
          Foodle
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-sm">
          <NavLink href="/" active={isActive("/")}>
            Home
          </NavLink>

          <NavLink href="/shop" active={isActive("/shop")}>
            Shop
          </NavLink>

          <NavLink href="/service" active={isActive("/service")}>
            Service
          </NavLink>

          <NavLink href="/menu" active={isActive("/menu")}>
            Menu
          </NavLink>

          <NavLink href="/about" active={isActive("/about")}>
            About Us
          </NavLink>
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
          <ul className="flex flex-col px-10 py-6 gap-6 text-sm">
            <MobileLink href="/" active={isActive("/")}>Home</MobileLink>
            <MobileLink href="/shop" active={isActive("/shop")}>Shop</MobileLink>
            <MobileLink href="/service" active={isActive("/service")}>Service</MobileLink>
            <MobileLink href="/menu" active={isActive("/menu")}>Menu</MobileLink>
            <MobileLink href="/about" active={isActive("/about")}>About Us</MobileLink>
          </ul>
        </div>
      )}
    </nav>
  );
}


function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`relative font-medium transition ${
        active ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
      }`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary rounded-full" />
      )}
    </Link>
  );
}

function MobileLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`font-medium ${
        active ? "text-primary" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}
