"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BookingHotel = {
  id?: number;
  name?: string;
  location?: string;
  image?: string;
  price?: number;
  rating?: number;
};

type BookingDestination = {
  id?: number;
  name?: string;
  country?: string;
  image?: string;
};

type Booking = {
  id: string;

  hotelId?: number | null;
  destinationId?: number | null;

  hotel?: BookingHotel | null;
  destination?: BookingDestination | null;

  hotelName?: string | null;
  hotelLocation?: string | null;
  hotelImage?: string | null;
  hotelPrice?: number | null;
  hotelRating?: number | null;

  checkIn: string;
  checkOut: string;

  guests: number;
  rooms: number;

  total: number;
  status?: string | null;
  createdAt?: string;
};

function formatDate(value?: string) {
  if (!value) {
    return "Date unavailable";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getBookingName(booking: Booking) {
  if (booking.hotel?.name) {
    return booking.hotel.name;
  }

  if (booking.hotelName) {
    return booking.hotelName;
  }

  if (booking.destination?.name) {
    return booking.destination.name;
  }

  return "Travel Destination";
}

function getBookingLocation(booking: Booking) {
  if (booking.hotel?.location) {
    return booking.hotel.location;
  }

  if (booking.hotelLocation) {
    return booking.hotelLocation;
  }

  if (booking.destination?.country) {
    return booking.destination.country;
  }

  return "TravelBlack";
}

function getBookingImage(booking: Booking) {
  if (booking.hotel?.image) {
    return booking.hotel.image;
  }

  if (booking.hotelImage) {
    return booking.hotelImage;
  }

  if (booking.destination?.image) {
    return booking.destination.image;
  }

  return "";
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadBookings() {
      try {
        setLoading(true);
        setError("");

        const storedUser = localStorage.getItem(
          "travelblack-user"
        );

        if (!storedUser) {
          if (!cancelled) {
            setError(
              "Please log in to view your bookings."
            );
          }

          return;
        }

        let currentUser: {
          id?: string | number;
        };

        try {
          currentUser = JSON.parse(storedUser);
        } catch {
          if (!cancelled) {
            setError(
              "Your saved login information is invalid. Please log in again."
            );
          }

          return;
        }

        if (!currentUser.id) {
          if (!cancelled) {
            setError(
              "User account could not be identified."
            );
          }

          return;
        }

        const userId = String(currentUser.id);

        const response = await fetch(
          `/api/bookings?userId=${encodeURIComponent(userId)}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data: unknown = await response.json();

        if (!response.ok) {
          const message =
            typeof data === "object" &&
            data !== null &&
            "message" in data &&
            typeof data.message === "string"
              ? data.message
              : "Unable to load bookings.";

          throw new Error(message);
        }

        if (!Array.isArray(data)) {
          if (!cancelled) {
            setBookings([]);
          }

          return;
        }

        if (!cancelled) {
          setBookings(data as Booking[]);
        }
      } catch (err) {
        console.error(
          "BOOKINGS PAGE ERROR:",
          err
        );

        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load bookings."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadBookings();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-900 border-t-red-500 rounded-full animate-spin mx-auto" />

          <p className="text-xl text-gray-400 mt-5">
            Loading your bookings...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 md:px-10">
      <section className="max-w-6xl mx-auto">

        <div className="mb-10">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition"
          >
            ← Back Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
            My Bookings
          </h1>

          <p className="text-gray-400 mt-2">
            Your confirmed trips and reservations.
          </p>
        </div>

        {error ? (
          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 text-center">
            <div className="text-5xl mb-5">
              ⚠️
            </div>

            <h2 className="text-2xl font-bold text-red-500">
              Booking Error
            </h2>

            <p className="text-gray-300 mt-3">
              {error}
            </p>

            <Link
              href="/"
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl font-bold transition"
            >
              Back Home
            </Link>
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-10 text-center">
            <div className="text-6xl mb-5">
              🏨
            </div>

            <h2 className="text-2xl font-bold">
              No bookings yet
            </h2>

            <p className="text-gray-400 mt-3">
              Your confirmed reservations will appear here.
            </p>

            <Link
              href="/hotels"
              className="inline-block mt-7 bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl font-bold transition"
            >
              Explore Hotels
            </Link>
          </div>
        ) : (
          <div className="space-y-8">

            {bookings.map((booking) => {
              const name = getBookingName(booking);
              const location =
                getBookingLocation(booking);
              const image =
                getBookingImage(booking);

              const total = Number(
                booking.total ?? 0
              );

              const status =
                booking.status || "Confirmed";

              return (
                <article
                  key={booking.id}
                  className="bg-gradient-to-r from-black via-red-950/30 to-black border border-red-900 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="grid lg:grid-cols-[320px_1fr]">

                    <div className="relative min-h-[280px] bg-zinc-950">

                      {image ? (
                        <img
                          src={image}
                          alt={name}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                          <span className="text-6xl">
                            🏨
                          </span>

                          <span className="mt-3">
                            Hotel image unavailable
                          </span>
                        </div>
                      )}

                      <div className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        ✓ Confirmed
                      </div>
                    </div>

                    <div className="p-6 md:p-8">

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

                        <div>
                          <h2 className="text-3xl font-bold">
                            {name}
                          </h2>

                          <p className="text-gray-400 mt-2">
                            {location}
                          </p>
                        </div>

                        <div className="text-left md:text-right">
                          <p className="text-sm text-gray-500">
                            Total paid
                          </p>

                          <p className="text-3xl font-extrabold text-red-500">
                            ₹
                            {total.toLocaleString(
                              "en-IN"
                            )}
                          </p>
                        </div>

                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

                        <div className="bg-black border border-red-900 rounded-2xl p-4">
                          <p className="text-gray-500 text-sm">
                            Check-in
                          </p>

                          <p className="font-bold mt-1">
                            {formatDate(
                              booking.checkIn
                            )}
                          </p>
                        </div>

                        <div className="bg-black border border-red-900 rounded-2xl p-4">
                          <p className="text-gray-500 text-sm">
                            Check-out
                          </p>

                          <p className="font-bold mt-1">
                            {formatDate(
                              booking.checkOut
                            )}
                          </p>
                        </div>

                        <div className="bg-black border border-red-900 rounded-2xl p-4">
                          <p className="text-gray-500 text-sm">
                            Guests
                          </p>

                          <p className="font-bold mt-1">
                            {Number(
                              booking.guests ?? 0
                            )}
                          </p>
                        </div>

                        <div className="bg-black border border-red-900 rounded-2xl p-4">
                          <p className="text-gray-500 text-sm">
                            Rooms
                          </p>

                          <p className="font-bold mt-1">
                            {Number(
                              booking.rooms ?? 0
                            )}
                          </p>
                        </div>

                      </div>

                      <div className="mt-6 pt-6 border-t border-red-900/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>
                          <p className="text-gray-500 text-sm">
                            Booking ID
                          </p>

                          <p className="font-mono text-sm text-gray-300 break-all mt-1">
                            {booking.id}
                          </p>
                        </div>

                        <span className="inline-flex w-fit bg-green-700 px-4 py-2 rounded-full font-bold text-sm">
                          {status}
                        </span>

                      </div>

                    </div>
                  </div>
                </article>
              );
            })}

          </div>
        )}

      </section>
    </main>
  );
}