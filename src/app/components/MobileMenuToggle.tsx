'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';

interface MobileMenuToggleProps {
  user: any; // Replace `any` with your actual user type
  signInUrl: string;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  user,
  signInUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out p-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLinks user={user} signInUrl={signInUrl} />

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
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenuToggle;
