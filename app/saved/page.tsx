import Image from "next/image";
import Link from "next/link";

const savedTrips = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=100&auto=format",
    price: "₹85,000",
  },
  {
    id: 2,
    name: "Dubai",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=100&auto=format",
    price: "₹72,000",
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=100&auto=format",
    price: "₹96,000",
  },
];

export default function SavedTripsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <section className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold">
          Saved <span className="text-red-500">Trips</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Your favourite destinations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {savedTrips.map((trip) => (

            <div
              key={trip.id}
              className="rounded-3xl overflow-hidden border border-red-900 bg-zinc-950"
            >

              <div className="relative h-72">

                <Image
                  src={trip.image}
                  alt={trip.name}
                  fill
                  quality={100}
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h2 className="text-3xl font-bold">
                  {trip.name}
                </h2>

                <p className="text-gray-400 mt-2">
                  {trip.country}
                </p>

                <p className="text-red-500 text-xl font-bold mt-5">
                  {trip.price}
                </p>

                <div className="flex gap-3 mt-6">

                  <Link
                    href={`/destination/${trip.id}`}
                    className="flex-1 bg-red-600 text-center py-3 rounded-xl font-bold hover:bg-red-700 transition"
                  >
                    View
                  </Link>

                  <button className="flex-1 border border-red-900 py-3 rounded-xl hover:bg-zinc-900 transition">
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        <Link
          href="/"
          className="inline-block mt-10 bg-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition"
        >
          Back Home
        </Link>

      </section>

    </main>
  );
}