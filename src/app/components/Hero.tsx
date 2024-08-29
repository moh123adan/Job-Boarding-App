import { Search, Briefcase } from "lucide-react";

export default async function Hero() {
  return (
    <section className="container my-16 p-8 bg-grid rounded-lg shadow-lg">
      <div className="flex justify-center">
        <Briefcase className="text-red-600 mb-4" size={48} />
      </div>
      <h1 className="text-4xl font-bold text-center">
        Find <span className="text-red-500">Your</span> Next
        <br />
        Dream Job
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Discover top job opportunities across various industries. Whether you're
        starting your career or looking for a new challenge, we're here to help
        you find the perfect role.
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
        <button className="bg-black text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
