'use client';

import { useState } from 'react';
import { Briefcase, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Find Job', href: '/find-job' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const HeaderLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Briefcase className="mr-2 text-red-600" size={28} />
              <span className="font-bold text-xl">NextHire</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-red-600"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white space-y-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-red-600 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Login Button */}
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">
            <span>🔐</span>
            <span>Login</span>
          </button>

          {/* Post a Job Button */}
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800">
            <span>📝</span>
            <span>Post a Job</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderLayout;
