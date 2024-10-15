"use client";

import { useTransition } from "react";
import Link from "next/link";
import { LogIn, FilePlus } from "lucide-react";
import { logoutAction } from "../actions/authActions"; // Import server action

interface NavLinksProps {
  user: any; // Adjust type according to your user object structure
  signInUrl: string;
}

export default function NavLinks({ user, signInUrl }: NavLinksProps) {
  const [isPending, startTransition] = useTransition();

  // Handle logout by calling the server action
  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction(); // Call server-side logout action
      window.location.reload(); // Refresh the page after logout
    });
  };

  return (
    <div className="flex items-center gap-6">
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

      {/* Display User Info or Login Button */}
      {user ? (
        <div className="flex items-center gap-3">
          <span className="text-red-500 text-2xl font-semibold">
            {user.firstName}
          </span>
          <button
            onClick={handleLogout}
            className={`bg-gray-200 px-4 py-2 rounded-full transition 
              hover:bg-gray-300 hover:shadow-md hover:text-black
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
            hover:bg-gray-300 hover:shadow-md hover:text-black"
        >
          <LogIn size={20} /> Login
        </Link>
      )}

      <Link
        href="/new-listing"
        className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full 
          transition hover:bg-gray-800 hover:shadow-lg"
      >
        <FilePlus size={20} /> Post a Job
      </Link>
    </div>
  );
}
