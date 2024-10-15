// components/MobileMenuToggle.tsx

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
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out">
          <NavLinks user={user} signInUrl={signInUrl} />
        </div>
      )}
    </div>
  );
};

export default MobileMenuToggle;
