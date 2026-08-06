"use client";

import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-8 pt-24 pb-24">

        <p className="uppercase tracking-[10px] text-red-500 font-semibold">
          Premium AI Travel Platform
        </p>

        <h1 className="text-7xl font-black mt-8 leading-tight max-w-5xl">

          Discover Amazing
          <br />

          Places Around
          <br />

          The World

        </h1>

        <p className="mt-8 text-gray-300 text-xl max-w-2xl">

          Book hotels, flights and experiences with AI recommendations
          designed especially for you.

        </p>

        <SearchBar />

        {/* Statistics */}

        <div className="grid grid-cols-4 gap-8 mt-20">

          <div>

            <h2 className="text-5xl font-black text-red-500">
              500+
            </h2>

            <p className="text-gray-400 mt-2">
              Destinations
            </p>

          </div>

          <div>

            <h2 className="text-5xl font-black text-red-500">
              50K+
            </h2>

            <p className="text-gray-400 mt-2">
              Hotels
            </p>

          </div>

          <div>

            <h2 className="text-5xl font-black text-red-500">
              2M+
            </h2>

            <p className="text-gray-400 mt-2">
              Happy Travelers
            </p>

          </div>

          <div>

            <h2 className="text-5xl font-black text-red-500">
              190
            </h2>

            <p className="text-gray-400 mt-2">
              Countries
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}