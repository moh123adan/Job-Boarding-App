// HeaderLayout.jsx
"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function HeaderLayout() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link href="/" className="flex items-center font-bold text-xl">
        <Briefcase className="mr-2 text-red-600" size={24} />
        NextHire
      </Link>
    </header>
  );
}
