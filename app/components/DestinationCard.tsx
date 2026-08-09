"use client";

import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  id: number;
  name: string;
  country: string;
  image: string;
  price: number;
  rating: number;
};

export default function DestinationCard({
  id,
  name,
  country,
  image,
  price,
  rating,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destination/${id}`}
      className="group block min-w-[280px] sm:min-w-[300px]"
    >
      <article className="overflow-hidden rounded-3xl border border-red-900/40 bg-zinc-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-red-950/40">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${name}, ${country}`}
            fill
            sizes="(max-width: 640px) 280px, 300px"
            quality={90}
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm">
            ★ {rating}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {country}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-gray-500">
                Starting from
              </p>

              <p className="text-lg font-extrabold text-red-500">
                ₹{Number(price).toLocaleString("en-IN")}
              </p>
            </div>

            <span className="rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-red-500">
              Explore
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}