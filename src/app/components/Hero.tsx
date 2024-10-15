'use client';

import { Search, Briefcase } from 'lucide-react';
import SparklesText from '@/components/ui/sparkles-text';
import Particles from '@/components/ui/particles';
import { useState } from 'react';

export default async function Hero() {
  const [color, setColor] = useState('#000000');

  return (
    <section className="relative container my-16 mt-44 p-8 bg-grid rounded-lg shadow-lg">
      {/* Render Particles in the background */}

      {/* Content Layer */}
      <div className="flex justify-center">
        <Briefcase className="text-red-600 mb-4" size={48} />
      </div>

      <div className="absolute inset-0 -z-10">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>

      <h1 className="text-5xl font-bold text-center leading-tight">
        <span className="inline-block">Discover </span>
        <span className="text-red-500 inline-block">
          <SparklesText className="text-4xl md:text-5xl" text="Your Next " />
        </span>
        <span className="inline-block">Career Opportunity</span>
      </h1>

      <p className="text-center text-xl text-gray-600 mt-2">
        Discover top job opportunities across various industries. Whether <br />{' '}
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
