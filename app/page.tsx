import DestinationSection from "./components/DestinationSection";
import SearchBar from "./components/SearchBar";

import { destinations } from "./data/destinations";

export default function Home() {
  const trending = destinations.filter(
    (d) => d.category === "Trending"
  );

  const luxury = destinations.filter(
    (d) => d.category === "Luxury"
  );

  const beaches = destinations.filter(
    (d) => d.category === "Beaches"
  );

  const mountains = destinations.filter(
    (d) => d.category === "Mountains"
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-red-900">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/40 to-black" />

        <div className="relative max-w-7xl mx-auto px-8 py-24">

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-red-700 bg-red-950/30 px-4 py-2 text-sm text-red-300">
              AI Powered Luxury Travel
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">
              Discover the
              <span className="block text-red-500">
                World's Best Destinations
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-300">
              Plan unforgettable trips with AI, discover luxury hotels,
              compare destinations, explore weather, and book your next
              adventure with TravelBlack.
            </p>

            <div className="mt-10">
              <SearchBar />
            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 space-y-20">

        <DestinationSection
          title="🔥 Trending Destinations"
          places={trending}
        />

        <DestinationSection
          title="✨ Luxury Escapes"
          places={luxury}
        />

        <DestinationSection
          title="🏖 Beach Paradise"
          places={beaches}
        />

        <DestinationSection
          title="🏔 Mountain Adventures"
          places={mountains}
        />

      </section>

    </main>
  );
}