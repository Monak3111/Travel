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
      className="group block min-w-[280px]"
    >
      <article className="overflow-hidden rounded-3xl border border-red-900/60 bg-zinc-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-red-600">
        <div className="relative h-72 w-full overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={`${name}, ${country}`}
              fill
              sizes="(max-width: 768px) 90vw, 280px"
              quality={90}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-gray-500">
              No image
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white">
              {name}
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              {country}
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                From
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                ₹{Number(price).toLocaleString("en-IN")}
              </p>
            </div>

            <div className="rounded-full border border-red-900 bg-black px-3 py-1.5">
              <span className="text-sm font-bold text-red-500">
                ★ {Number(rating).toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}