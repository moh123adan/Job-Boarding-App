import Link from "next/link";
import { Briefcase, LogIn, FilePlus, Home, Info, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between mx-auto my-4">
        {/* Logo aligned to the left */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            <Briefcase className="mr-2 text-red-600" size={24} />
            Job Board
          </Link>
        </div>

        {/* Centered navigation links */}
        <nav className="flex-1 flex justify-center gap-8">
          <Link
            className="flex items-center gap-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-black"
            href="/"
          >
            <Home size={20} />
            Home
          </Link>
          <Link
            className="flex items-center gap-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-black"
            href="/about"
          >
            <Info size={20} />
            About
          </Link>
          <Link
            className="flex items-center gap-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-black"
            href="/contact"
          >
            <Mail size={20} />
            Contact
          </Link>
        </nav>

        {/* Login and Post a Job aligned to the right */}
        <div className="flex items-center gap-4">
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
