"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { LogIn, FilePlus, Menu, X } from "lucide-react";
import { logoutAction } from "../actions/authActions"; // Import server action

interface NavLinksProps {
  user: any; // Adjust type according to your user object structure
  signInUrl: string;
}

export default function NavLinks({ user, signInUrl }: NavLinksProps) {
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu

  // Handle logout with server action
  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
      window.location.reload();
    });
  };

  return (
    <div className="relative">
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        <DesktopLinks
          user={user}
          signInUrl={signInUrl}
          handleLogout={handleLogout}
          isPending={isPending}
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <nav
        className={`absolute top-16 left-0 w-full bg-white z-50 flex-col items-center justify-center
        ${isMenuOpen ? "flex" : "hidden"}`}
      >
        <MobileLinks
          user={user}
          signInUrl={signInUrl}
          handleLogout={handleLogout}
          isPending={isPending}
          toggleMenu={toggleMenu}
        />
      </nav>
    </div>
  );
}

function DesktopLinks({
  user,
  signInUrl,
  handleLogout,
  isPending,
}: {
  user: any;
  signInUrl: string;
  handleLogout: () => void;
  isPending: boolean;
}) {
  return (
    <>
      <Link
        href="/"
        className="text-gray-700 hover:text-black transition font-medium"
      >
        Home
      </Link>
      <Link
        href="/find-job"
        className="text-gray-700 hover:text-black transition font-medium"
      >
        Find Job
      </Link>
      <Link
        href="/about"
        className="text-gray-700 hover:text-black transition font-medium"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="text-gray-700 hover:text-black transition font-medium"
      >
        Contact
      </Link>

      {user ? (
        <div className="flex items-center gap-3">
          <span className="text-red-500 text-2xl font-semibold">
            {user.firstName}
          </span>
          <button
            onClick={handleLogout}
            className={`bg-gray-200 px-4 py-2 rounded-full transition hover:bg-gray-300 hover:shadow-md
              ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isPending}
          >
            {isPending ? "Logging out..." : "Logout"}
          </button>
        </div>
      ) : (
        <Link
          href={signInUrl}
          className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full transition 
            hover:bg-gray-300 hover:shadow-md"
        >
          <LogIn size={20} /> Login
        </Link>
      )}

      <Link
        href="/new-listing"
        className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full transition hover:bg-gray-800 hover:shadow-lg"
      >
        <FilePlus size={20} /> Post a Job
      </Link>
    </>
  );
}

function MobileLinks({
  user,
  signInUrl,
  handleLogout,
  isPending,
  toggleMenu,
}: {
  user: any;
  signInUrl: string;
  handleLogout: () => void;
  isPending: boolean;
  toggleMenu: () => void;
}) {
  return (
    <>
      <Link
        href="/"
        className="text-gray-700 hover:text-black transition font-medium text-2xl mb-4"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        href="/find-job"
        className="text-gray-700 hover:text-black transition font-medium text-2xl mb-4"
        onClick={toggleMenu}
      >
        Find Job
      </Link>
      <Link
        href="/about"
        className="text-gray-700 hover:text-black transition font-medium text-2xl mb-4"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link
        href="/contact"
        className="text-gray-700 hover:text-black transition font-medium text-2xl mb-4"
        onClick={toggleMenu}
      >
        Contact
      </Link>

      {user ? (
        <div className="flex flex-col items-center gap-3 mb-4">
          <span className="text-red-500 text-2xl font-semibold">
            {user.firstName}
          </span>
          <button
            onClick={handleLogout}
            className={`bg-gray-200 px-4 py-2 rounded-full transition hover:bg-gray-300
              ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isPending}
          >
            {isPending ? "Logging out..." : "Logout"}
          </button>
        </div>
      ) : (
        <Link
          href={signInUrl}
          className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full transition 
            hover:bg-gray-300"
          onClick={toggleMenu}
        >
          <LogIn size={20} /> Login
        </Link>
      )}

      <Link
        href="/new-listing"
        className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full transition 
          hover:bg-gray-800"
        onClick={toggleMenu}
      >
        <FilePlus size={20} /> Post a Job
      </Link>
    </>
  );
}
