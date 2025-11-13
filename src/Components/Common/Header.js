'use client';
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" fixed w-full my-2  top-0 z-[999]">
            <div className="container mx-auto min-h-16 rounded-lg backdrop-blur-sm px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">Logo</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <a href="#" className="hover:text-blue-600 transition">
                        Home
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                        About Us
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                        Contact Us
                    </a>
                </nav>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 cursor-pointer py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-100 transition">
                        Login
                    </button>
                    <button className="px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Register Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <RxCross1 className="text-3xl" /> : <IoMenuOutline className="text-3xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden rounded-lg backdrop-blur-sm bg-white/30 border-t border-gray-200">
                    <nav className="flex flex-col items-center space-y-3 py-4 text-gray-700 font-medium">
                        <a href="#" className="hover:text-blue-600 transition">
                            Home
                        </a>
                        <a href="#" className="hover:text-blue-600 transition">
                            About Us
                        </a>
                        <a href="#" className="hover:text-blue-600 transition">
                            Contact Us
                        </a>
                        <button className="w-4/5 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                            Login
                        </button>
                        <button className="w-4/5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Register Now
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
