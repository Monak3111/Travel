"use client";

import Image from "next/image";
import Link from "next/link";

type Destination = {
  id: number;
  name: string;
  country: string;
  image: string;
  price?: number;
  rating?: number;
  category?: string;
};

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destination/${destination.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-3xl border border-red-900/60 bg-zinc-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-red-950/40">
        <div className="relative h-64 w-full overflow-hidden">
          {destination.image ? (
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-gray-500">
              No image available
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {destination.category && (
            <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {destination.category}
            </span>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl font-bold text-white">
              {destination.name}
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              {destination.country}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-5">
          <div>
            {destination.price !== undefined && (
              <p className="text-sm text-gray-400">
                Starting from
              </p>
            )}

            {destination.price !== undefined && (
              <p className="mt-1 text-lg font-bold text-red-500">
                ₹{Number(destination.price).toLocaleString("en-IN")}
              </p>
            )}
          </div>

          {destination.rating !== undefined && (
            <div className="rounded-xl border border-red-900 bg-black px-3 py-2">
              <span className="text-sm font-bold text-white">
                ★ {Number(destination.rating).toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}