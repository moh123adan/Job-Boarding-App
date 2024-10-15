import { Search, Briefcase } from "lucide-react";
import SparklesText from "@/components/ui/sparkles-text";

export default async function Hero() {
  return (
    <section className="container my-16 mt-44 p-8 bg-grid rounded-lg shadow-lg">
      <div className="flex justify-center">
        <Briefcase className="text-red-600 mb-4" size={48} />
      </div>
      <h1 className="text-5xl font-semibold text-center leading-tight">
        Discover{" "}
        <span className="text-red-500 text-2xl">
          <SparklesText text="Your Next " />
        </span>
       
        Career Opportunity
      </h1>

      <p className="text-center text-xl text-gray-600 mt-2">
        Discover top job opportunities across various industries. Whether <br />{" "}
        you're starting your career or looking for a new challenge
      </p>
      <form className="flex gap-2 mt-4 max-w-md mx-auto">
        <div className="relative w-full">
          <input
            type="search"
            className="border border-gray-400 w-full py-2 px-3 rounded-md pl-10"
            placeholder="Search for jobs..."
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
        </div>
        <button className="bg-black text-white py-2 px-6 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-pink-500 hover:bg-black hover:text-white hover:shadow-[0_0_15px_3px_rgba(255,0,255,0.5)]">
          Search
        </button>
      </form>
    </section>
  );
}
