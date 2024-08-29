import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between mx-auto container">
        <Link href={"/"} className="flex items-center font-bold text-xl">
          <Briefcase className="mr-2 text-red-600" size={24} />
          Job Board
        </Link>
        

        <nav className="flex gap-4">
          <Link className="bg-gray-200 py-2 px-4 rounded-md" href={"/login"}>
            Login
          </Link>
          <Link
            className="bg-black border-2 border-red-600 text-white py-2 px-4 rounded-md"
            href={"/new-listing"}
          >
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
