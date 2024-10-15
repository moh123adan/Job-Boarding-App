import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header className="py-4 fixed top-0 left-0 w-full bg-white z-50">
      <div className="px-6 md:px-44 flex items-center justify-between mx-auto my-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            <span className="mr-2 text-red-600">🔴</span> NextHire
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks user={user} signInUrl={signInUrl} signUpUrl="" />
        </div>
      </div>
    </header>
  );
}
