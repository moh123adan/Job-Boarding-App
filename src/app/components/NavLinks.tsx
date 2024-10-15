"use client";

import Link from "next/link";
import { LogIn, FilePlus } from "lucide-react";

interface NavLinksProps {
  user: any; // Adjust type according to your user object structure
  signInUrl: string;
  signUpUrl: string;
  onClick?: () => void;
  isMobile?: boolean;
}

export default function NavLinks({
  user,
  signInUrl,
  signUpUrl,
  onClick,
  isMobile,
}: NavLinksProps) {
  return (
    <>
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
          onClick={onClick}
          className="bg-gray-200 py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300"
        >
          <LogIn size={20} />
          Logout, {user.firstName}
        </button>
      )}

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
