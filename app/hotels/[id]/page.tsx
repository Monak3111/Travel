import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ReviewSection from "../../components/ReviewSection";
import { hotels } from "../../data/hotels";

export default async function HotelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const hotel = hotels.find(
    (item) => item.id === Number(id)
  );

  if (!hotel) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="relative h-[650px]">

        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 md:p-12">

          <h1 className="text-4xl md:text-6xl font-extrabold">
            {hotel.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mt-3">
            {hotel.location}
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">

            <span className="bg-red-600 px-5 py-2 rounded-full">
              ⭐ {hotel.rating}
            </span>

            <span className="bg-zinc-900 px-5 py-2 rounded-full">
              {hotel.reviews} Reviews
            </span>

            <span className="bg-zinc-900 px-5 py-2 rounded-full">
              ₹{hotel.price.toLocaleString()}/Night
            </span>

          </div>

        </div>

      </section>


      {/* CONTENT */}

      <section className="max-w-7xl mx-auto p-8">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">

              <h2 className="text-3xl font-bold">
                About this Hotel
              </h2>

              <p className="mt-5 text-gray-300 leading-8">
                {hotel.description}
              </p>

            </div>


            <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Amenities
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {hotel.amenities.map((amenity) => (

                  <div
                    key={amenity}
                    className="bg-black border border-red-900 rounded-xl p-4"
                  >
                    ✅ {amenity}
                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* BOOKING CARD */}

          <div>

            <div className="sticky top-8 bg-zinc-950 border border-red-900 rounded-3xl p-8">

              <h2 className="text-4xl font-bold">
                ₹{hotel.price.toLocaleString()}
              </h2>

              <p className="text-gray-400">
                per night
              </p>

              <Link
                href={`/booking?hotel=${hotel.id}`}
                className="block mt-8 bg-red-600 text-center py-4 rounded-2xl font-bold hover:bg-red-700 transition"
              >
                Reserve Now
              </Link>

              <Link
                href="/hotels"
                className="block mt-4 border border-red-900 text-center py-4 rounded-2xl hover:bg-zinc-900 transition"
              >
                Browse Hotels
              </Link>

            </div>

          </div>

        </div>


        {/* REVIEWS */}

        <div className="mt-12">
          <ReviewSection />
        </div>

      </section>

    </main>
  );
}