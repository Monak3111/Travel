"use client";
import Link from "next/link";
import DestinationCard from "./DestinationCard";
import { Destination } from "../types/destination";

type Props = {
  title: string;
  places: Destination[];
};

export default function DestinationSection({
  title,
  places,
}: Props) {
  if (places.length === 0) return null;

  return (
    <section className="space-y-8">

      <div className="flex items-center justify-between">

        <h2 className="text-4xl font-extrabold tracking-tight">
          {title}
        </h2>

        <Link
href="/destination"
className="bg-red-600 px-6 py-3 rounded-full hover:bg-red-700"
>
View All
</Link>

      </div>

      <div
        className="
          flex
          gap-8
          overflow-x-auto
          pb-6
          snap-x
          snap-mandatory
          scroll-smooth
          scrollbar-hide
        "
      >
        {places.map((place) => (
          <div
            key={place.id}
            className="snap-start flex-shrink-0"
          >
            <DestinationCard
              id={place.id}
              name={place.name}
              country={place.country}
              image={place.image}
              price={place.price}
              rating={place.rating}
            />
          </div>
        ))}
      </div>

    </section>
  );
}