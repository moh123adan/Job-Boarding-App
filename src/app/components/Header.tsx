"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Briefcase, LogIn, FilePlus, Menu, X } from "lucide-react";
import { fetchSignInUrl, fetchUser, fetchSignUpUrl } from "../auth/authUtils";

interface User {
  id: string;
  email: string;
  firstName?: string; // Optional since it's used in your logout button
  [key: string]: any;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [signInUrl, setSignInUrl] = useState<string>("");
  const [signUpUrl, setSignUpUrl] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const fetchedUser = await fetchUser();
      const fetchedSignInUrl = await fetchSignInUrl();
      const fetchedSignUpUrl = await fetchSignUpUrl(); // Fixed the typo here
      setUser(fetchedUser);
      setSignInUrl(fetchedSignInUrl);
      setSignUpUrl(fetchedSignUpUrl); // Now this variable is correctly named
    }
    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 fixed top-0 left-0 w-full bg-white z-50">
      <div className="px-6 md:px-44 flex items-center justify-between mx-auto my-4">
        {/* Logo (Always Visible) */}
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

        {/* Desktop Links (Visible only on larger screens) */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks user={user} signInUrl={signInUrl} signUpUrl={signUpUrl} />
        </div>
      </div>

      {/* Mobile Menu (Visible only when toggled) */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-white flex-col items-center justify-center z-50`}
      >
        {/* Cancel "X" Button in the Top Right */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>

        <NavLinks
          user={user}
          signInUrl={signInUrl}
          signUpUrl={signUpUrl}
          onClick={() => setIsMenuOpen(false)}
          isMobile
        />
      </nav>
    </header>
  );
}

interface NavLinksProps {
  user: User | null;
  signInUrl: string;
  signUpUrl: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({
  user,
  signInUrl,
  signUpUrl,
  onClick,
  isMobile,
}) => (
  <>
    <Link
      className={`${
        isMobile ? "text-2xl mb-4" : "text-gray-700"
      } transition-all duration-300 ease-in-out hover:text-black`}
      href="/"
      onClick={onClick}
    >
      Home
    </Link>
    <Link
      className={`${
        isMobile ? "text-2xl mb-4" : "text-gray-700"
      } transition-all duration-300 ease-in-out hover:text-black`}
      href="/about"
      onClick={onClick}
    >
      About
    </Link>
    <Link
      className={`${
        isMobile ? "text-2xl mb-4" : "text-gray-700"
      } transition-all duration-300 ease-in-out hover:text-black`}
      href="/contact"
      onClick={onClick}
    >
      Contact
    </Link>

    {!user ? (
      <Link
        className="bg-gray-200 py-2 px-4 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-200 hover:text-black hover:shadow-[0_0_15px_3px_rgba(128,128,128,0.5)] flex items-center gap-2 mt-4"
        href={signInUrl}
        onClick={onClick}
      >
        <LogIn size={20} />
        Login
      </Link>
    ) : (
      <Link
        className="bg-gray-200 py-2 px-4 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-200 hover:text-black hover:shadow-[0_0_15px_3px_rgba(128,128,128,0.5)] flex items-center gap-2 mt-4"
        href={signUpUrl}
        onClick={onClick}
      >
        <LogIn size={20} />
        Logout {user.firstName}
      </Link>
    )}

    <Link
      className="bg-black text-white py-2 px-6 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-pink-500 hover:bg-black hover:text-white hover:shadow-[0_0_15px_3px_rgba(255,0,255,0.5)] flex items-center gap-2 mt-4"
      href="/new-listing"
      onClick={onClick}
    >
      <FilePlus size={20} />
      Post a Job
    </Link>
  </>
);
