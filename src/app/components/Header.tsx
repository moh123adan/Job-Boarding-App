// components/Header.tsx (Server Component)

import { getSignInUrl, getUser } from '@workos-inc/authkit-nextjs';
import NavLinks from './NavLinks'; // Client Component
import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the MobileMenuToggle as a Client Component
const MobileMenuToggle = dynamic(() => import('./MobileMenuToggle'), {
  ssr: false,
});

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header className="py-4 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="px-6 md:px-44 flex items-center justify-between mx-auto my-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            <Briefcase size={32} className="mr-2 text-red-600" />
            NextHire
          </Link>
        </div>

        {/* Navigation Links for Medium and Larger Screens */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks user={user} signInUrl={signInUrl} />
        </div>

        {/* Mobile Menu Toggle for Small Screens */}
        <MobileMenuToggle user={user} signInUrl={signInUrl} />
      </div>
    </header>
  );
}
