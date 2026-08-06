import Link from "next/link";
import Image from "next/image";

type Props = {
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
}: Props) {
  return (
    <Link
      href={`/destination/${id}`}
      className="group block min-w-[360px] md:min-w-[400px] lg:min-w-[430px]"
    >
      <article className="overflow-hidden rounded-3xl bg-zinc-950 border border-red-900/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-red-900/40">

        {/* Image */}

        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            priority={false}
            quality={100}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute top-4 right-4 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold shadow-lg">
            ⭐ {rating}
          </div>
        </div>

        {/* Content */}

        <div className="p-6">

          <h3 className="text-3xl font-bold text-white">
            {name}
          </h3>

          <p className="mt-2 text-lg text-gray-400">
            {country}
          </p>

          <div className="mt-6 flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Starting from
              </p>

              <p className="text-2xl font-bold text-red-500">
                ₹{price.toLocaleString()}
              </p>
            </div>

            <span className="rounded-full bg-red-600 px-5 py-3 font-semibold transition group-hover:bg-red-500">
              Explore →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}