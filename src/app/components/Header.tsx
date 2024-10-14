"use client"; // Enable client-side rendering

import { useState, useEffect } from "react";
import Link from "next/link";
import { Briefcase, LogIn, FilePlus, Menu, X } from "lucide-react";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

export default function Header() {
  const [user, setUser] = useState(null); // Store the user data
  const [signInUrl, setSignInUrl] = useState(""); // Store the login URL
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle mobile menu

  // Fetch user info and login URL when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUser = await getUser(); // Get the logged-in user (if any)
        const fetchedSignInUrl = await getSignInUrl(); // Get the login URL
        setUser(fetchedUser);
        setSignInUrl(fetchedSignInUrl);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle logout functionality
  const handleLogout = async () => {
    await signOut(); // Log the user out
    setUser(null); // Clear the user from state
  };

  return (
    <header className="py-4 fixed top-0 left-0 w-full bg-white z-50">
      <div className="px-6 md:px-44 flex items-center justify-between mx-auto my-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            <Briefcase className="mr-2 text-red-600" size={24} />
            NextHire
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks user={user} signInUrl={signInUrl} onLogout={handleLogout} />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-white flex-col items-center justify-center z-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>

        <NavLinks
          user={user}
          signInUrl={signInUrl}
          onLogout={handleLogout}
          isMobile
          onClick={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
}

// Navigation Links Component
function NavLinks({ user, signInUrl, onLogout, isMobile, onClick }) {
  return (
    <>
      {/* Navigation Links */}
      <Link
        href="/"
        className={`${
          isMobile ? "text-2xl mb-4" : "text-gray-700"
        } transition-all duration-300 ease-in-out hover:text-black`}
        onClick={onClick}
      >
        Home
      </Link>
      <Link
        href="/find-job"
        className={`${
          isMobile ? "text-2xl mb-4" : "text-gray-700"
        } transition-all duration-300 ease-in-out hover:text-black`}
        onClick={onClick}
      >
        Find Job
      </Link>
      <Link
        href="/about"
        className={`${
          isMobile ? "text-2xl mb-4" : "text-gray-700"
        } transition-all duration-300 ease-in-out hover:text-black`}
        onClick={onClick}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`${
          isMobile ? "text-2xl mb-4" : "text-gray-700"
        } transition-all duration-300 ease-in-out hover:text-black`}
        onClick={onClick}
      >
        Contact
      </Link>

      {/* Login/Logout Logic */}
      {!user ? (
        <Link
          href={signInUrl}
          className="bg-gray-200 py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300"
          onClick={onClick}
        >
          <LogIn size={20} />
          Login
        </Link>
      ) : (
        <button
          onClick={onLogout}
          className="bg-gray-200 py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300"
        >
          <LogIn size={20} />
          Logout, {user.firstName}
        </button>
      )}

      {/* Post a Job Button */}
      <Link
        href="/new-listing"
        className="bg-black text-white py-2 px-6 rounded-full transition-all duration-300 hover:bg-gray-800"
        onClick={onClick}
      >
        <FilePlus size={20} />
        Post a Job
      </Link>
    </>
  );
}
