"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  total: number;
  status: string;

  hotel?: {
    id: number;
    name: string;
    image: string;
    location: string;
  } | null;

  destination?: {
    id: number;
    name: string;
    country: string;
    image: string;
  } | null;
};

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      try {
        const user = localStorage.getItem("travelblack-user");

        if (!user) {
          setLoading(false);
          return;
        }

        const currentUser = JSON.parse(user);

        if (!currentUser?.id) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `/api/booking/create/list?userId=${encodeURIComponent(
            currentUser.id
          )}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load bookings");
        }

        const data = await response.json();

        setBookings(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("BOOKINGS LOAD ERROR:", error);
        setBookings([]);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">✈️</div>
          <p className="text-gray-400">
            Loading your bookings...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <section className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            TravelBlack
          </p>

          <h1 className="text-5xl font-extrabold mt-2">
            My Bookings
          </h1>

          <p className="text-gray-400 mt-3">
            Your confirmed trips and reservations.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-10 text-center">
            <div className="text-5xl mb-5">
              🧳
            </div>

            <h2 className="text-2xl font-bold">
              No bookings yet
            </h2>

            <p className="text-gray-400 mt-3">
              Your confirmed reservations will appear here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">

            {bookings.map((booking) => {
              const image =
                booking.hotel?.image ||
                booking.destination?.image ||
                "https://images.unsplash.com/photo-1566073771259-6a8506099945";

              const title =
                booking.hotel?.name ||
                booking.destination?.name ||
                "Travel Destination";

              const location =
                booking.hotel?.location ||
                booking.destination?.country ||
                "TravelBlack";

              return (
                <div
                  key={booking.id}
                  className="bg-zinc-950 border border-red-900 rounded-3xl overflow-hidden shadow-2xl"
                >

                  <div className="relative h-72 w-full overflow-hidden bg-zinc-900">

                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-5">
                      <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-bold">
                        ✓ Confirmed
                      </span>
                    </div>

                  </div>

                  <div className="p-7">

                    <h2 className="text-2xl font-bold">
                      {title}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {location}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-4">

                      <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                        <p className="text-gray-500 text-sm">
                          Check-in
                        </p>

                        <p className="font-semibold mt-1">
                          {new Date(
                            booking.checkIn
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                        <p className="text-gray-500 text-sm">
                          Check-out
                        </p>

                        <p className="font-semibold mt-1">
                          {new Date(
                            booking.checkOut
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">

                      <div className="bg-black rounded-xl p-3">
                        <p className="text-gray-500 text-xs">
                          Guests
                        </p>

                        <p className="font-bold mt-1">
                          {booking.guests}
                        </p>
                      </div>

                      <div className="bg-black rounded-xl p-3">
                        <p className="text-gray-500 text-xs">
                          Rooms
                        </p>

                        <p className="font-bold mt-1">
                          {booking.rooms}
                        </p>
                      </div>

                      <div className="bg-black rounded-xl p-3">
                        <p className="text-gray-500 text-xs">
                          Status
                        </p>

                        <p className="font-bold text-green-500 mt-1">
                          {booking.status}
                        </p>
                      </div>

                    </div>

                    <div className="mt-6 pt-5 border-t border-zinc-800 flex items-center justify-between">

                      <div>
                        <p className="text-gray-500 text-sm">
                          Total paid
                        </p>

                        <p className="text-2xl font-extrabold text-red-500">
                          ₹{booking.total.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-gray-500 text-xs">
                          Booking ID
                        </p>

                        <p className="text-xs text-gray-300 mt-1">
                          {booking.id}
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        )}

      </section>
    </main>
  );
}