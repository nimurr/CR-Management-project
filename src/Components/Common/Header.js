'use client';
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed w-full my-2 top-0 z-[999]">
      <div className="container mx-auto min-h-16 border border-blue-200 rounded-lg backdrop-blur-sm px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <img className="w-12 cursor-pointer" src="/Images/Auth/logo2.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                pathname === item.href
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className={`px-4 py-2 border border-blue-300 rounded-lg transition cursor-pointer ${
              pathname === "/login"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-blue-600 hover:bg-blue-100"
            }`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`px-4 py-2 rounded-lg transition cursor-pointer ${
              pathname === "/register"
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <RxCross1 className="text-3xl" />
          ) : (
            <IoMenuOutline className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden rounded-lg backdrop-blur-sm bg-white/30 border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-3 py-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  pathname === item.href
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className={`w-4/5 px-4 py-2 text-center border rounded-lg transition ${
                pathname === "/login"
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className={`w-4/5 px-4 py-2 text-center rounded-lg transition ${
                pathname === "/register"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;