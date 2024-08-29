"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  LogIn,
  FilePlus,
  Home,
  Info,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4">
      <div className="px-6 md:px-44 flex items-center justify-between mx-auto my-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            <Briefcase className="mr-2 text-red-600" size={24} />
            Job Board
          </Link>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-white md:bg-transparent md:static md:flex md:flex-1 md:justify-center md:gap-8`}
        >
          <Link
            className="flex items-center gap-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-black p-4 md:p-0"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <Home size={20} />
            Home
          </Link>
          <Link
            className="flex items-center gap-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-black p-4 md:p-0"
            href="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            <Info size={20} />
            About
          </Link>
          <Link
            className="flex items-center gap-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-black p-4 md:p-0"
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <Mail size={20} />
            Contact
          </Link>
        </nav>

        {/* Login and Post a Job aligned to the right */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            className="bg-gray-200 py-2 px-4 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-200 hover:text-black hover:shadow-[0_0_15px_3px_rgba(128,128,128,0.5)] flex items-center gap-2"
            href="/login"
          >
            <LogIn size={20} />
            Login
          </Link>
          <Link
            className="bg-black text-white py-2 px-6 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-pink-500 hover:bg-black hover:text-white hover:shadow-[0_0_15px_3px_rgba(255,0,255,0.5)] flex items-center gap-2"
            href="/new-listing"
          >
            <FilePlus size={20} />
            Post a Job
          </Link>
        </div>
      </div>
    </header>
  );
}
