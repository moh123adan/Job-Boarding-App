// Header.tsx (Server Component)

import { getSignInUrl, getUser } from "@workos-inc/authkit-nextjs";
import NavLinks from "./NavLinks"; // Client Component
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header className="py-4 fixed top-0 left-0 w-full bg-white z-50">
      <div className="px-6 md:px-44 flex items-center justify-between mx-auto my-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            <Briefcase size={32} className="mr-2 text-red-600" />
            NextHire
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Pass user data and signInUrl as props */}
          <NavLinks user={user} signInUrl={signInUrl} />
        </div>
      </div>
    </header>
  );
}
