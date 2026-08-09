"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Hotel = {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating?: number;
};

type Destination = {
  id: number;
  name: string;
  country?: string;
  image: string;
};

function BookingContent() {
  const params = useSearchParams();

  const hotelId = params.get("hotel");
  const destinationId = params.get("destination");

  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [destination, setDestination] =
    useState<Destination | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const [confirming, setConfirming] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    async function loadBookingTarget() {
      try {
        setLoading(true);
        setError("");

        /*
         * HOTEL BOOKING
         */
        if (hotelId) {
          const response = await fetch(
            `/api/hotels/${hotelId}`,
            {
              cache: "no-store",
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(
              data?.message ||
                "Selected hotel does not exist."
            );
          }

          const selectedHotel =
            data?.hotel ?? data;

          if (!selectedHotel?.id) {
            throw new Error(
              "Selected hotel does not exist."
            );
          }

          const normalizedHotel: Hotel = {
            id: Number(selectedHotel.id),

            name: String(
              selectedHotel.name ?? "Hotel"
            ),

            location: String(
              selectedHotel.location ??
                "TravelBlack"
            ),

            image: String(
              selectedHotel.image ?? ""
            ),

            price: Number(
              selectedHotel.price ?? 5000
            ),

            rating:
              selectedHotel.rating !==
                undefined &&
              selectedHotel.rating !== null
                ? Number(selectedHotel.rating)
                : undefined,
          };

          setHotel(normalizedHotel);
          setDestination(null);

          return;
        }

        /*
         * DESTINATION BOOKING
         */
        if (destinationId) {
          const response = await fetch(
            `/api/destination/${destinationId}`,
            {
              cache: "no-store",
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(
              data?.message ||
                "Selected destination does not exist."
            );
          }

          const selectedDestination =
            data?.destination ?? data;

          if (!selectedDestination?.id) {
            throw new Error(
              "Selected destination does not exist."
            );
          }

          const normalizedDestination: Destination = {
            id: Number(
              selectedDestination.id
            ),

            name: String(
              selectedDestination.name ??
                "Travel Destination"
            ),

            country:
              selectedDestination.country
                ? String(
                    selectedDestination.country
                  )
                : undefined,

            image: String(
              selectedDestination.image ?? ""
            ),
          };

          setDestination(
            normalizedDestination
          );

          setHotel(null);

          return;
        }

        throw new Error(
          "Please select a hotel or destination first."
        );
      } catch (err) {
        console.error(
          "BOOKING TARGET ERROR:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load booking."
        );
      } finally {
        setLoading(false);
      }
    }

    loadBookingTarget();
  }, [hotelId, destinationId]);

  async function confirmBooking() {
    try {
      setConfirming(true);
      setError("");

      /*
       * USER
       */
      const storedUser =
        localStorage.getItem(
          "travelblack-user"
        );

      if (!storedUser) {
        throw new Error(
          "Please log in before booking."
        );
      }

      let currentUser: {
        id?: string | number;
      };

      try {
        currentUser =
          JSON.parse(storedUser);
      } catch {
        throw new Error(
          "Your saved user session is invalid. Please log in again."
        );
      }

      if (!currentUser?.id) {
        throw new Error(
          "User account could not be identified."
        );
      }

      /*
       * DATES
       */
      if (!checkIn) {
        throw new Error(
          "Please select a check-in date."
        );
      }

      if (!checkOut) {
        throw new Error(
          "Please select a check-out date."
        );
      }

      const startDate = new Date(
        `${checkIn}T00:00:00`
      );

      const endDate = new Date(
        `${checkOut}T00:00:00`
      );

      if (
        Number.isNaN(
          startDate.getTime()
        ) ||
        Number.isNaN(
          endDate.getTime()
        )
      ) {
        throw new Error(
          "Please select valid booking dates."
        );
      }

      if (endDate <= startDate) {
        throw new Error(
          "Check-out date must be after check-in date."
        );
      }

      /*
       * GUESTS / ROOMS
       */
      if (guests < 1) {
        throw new Error(
          "Guests must be at least 1."
        );
      }

      if (rooms < 1) {
        throw new Error(
          "Rooms must be at least 1."
        );
      }

      /*
       * TOTAL
       */
      const total = hotel
        ? Number(hotel.price) * Number(rooms)
        : 5000;

      /*
       * IMPORTANT:
       * Store a snapshot of the selected hotel.
       *
       * This means My Bookings can still display
       * the correct hotel name, image, location,
       * price and rating even if the database
       * hotel relation changes later.
       */
      const payload = {
        userId: String(
          currentUser.id
        ),

        hotelId: hotel
          ? Number(hotel.id)
          : null,

        hotelName: hotel
          ? String(hotel.name)
          : null,

        hotelLocation: hotel
          ? String(hotel.location)
          : null,

        hotelImage: hotel
          ? String(hotel.image)
          : null,

        hotelPrice: hotel
          ? Number(hotel.price)
          : null,

        hotelRating:
          hotel?.rating !== undefined
            ? Number(hotel.rating)
            : 4.5,

        destinationId: destination
          ? Number(destination.id)
          : null,

        checkIn,
        checkOut,

        guests: Number(guests),
        rooms: Number(rooms),

        total: Number(total),
      };

      console.log(
        "BOOKING REQUEST:",
        payload
      );

      /*
       * CREATE BOOKING
       */
      const response = await fetch(
        "/api/booking/create",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload
          ),
        }
      );

      const result =
        await response.json();

      console.log(
        "BOOKING RESPONSE:",
        result
      );

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Booking failed."
        );
      }

      setConfirmed(true);
    } catch (err) {
      console.error(
        "BOOKING ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Booking failed."
      );
    } finally {
      setConfirming(false);
    }
  }

  /*
   * LOADING
   */
  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-gray-400">
          Loading booking...
        </p>
      </main>
    );
  }

  /*
   * ERROR
   */
  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-xl w-full bg-zinc-950 border border-red-900 rounded-3xl p-10 text-center">

          <h1 className="text-3xl font-bold text-red-500">
            Booking Error
          </h1>

          <p className="text-gray-300 mt-5">
            {error}
          </p>

          <Link
            href="/"
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold"
          >
            Back Home
          </Link>

        </div>
      </main>
    );
  }

  /*
   * DISPLAY DATA
   */
  const title =
    hotel?.name ||
    destination?.name ||
    "Travel Destination";

  const location =
    hotel?.location ||
    destination?.country ||
    "TravelBlack";

  const image =
    hotel?.image ||
    destination?.image ||
    "";

  const total = hotel
    ? Number(hotel.price) *
      Number(rooms)
    : 5000;

  const today = new Date()
    .toISOString()
    .split("T")[0];

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-8">

      <section className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-black via-red-950 to-black border border-red-900 rounded-3xl overflow-hidden shadow-2xl">

          {image && (
            <div className="relative h-80">

              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 md:left-8">

                <h1 className="text-4xl md:text-5xl font-extrabold">
                  {title}
                </h1>

                <p className="text-gray-300 mt-2 text-lg">
                  {location}
                </p>

              </div>

            </div>
          )}

          <div className="p-6 md:p-8">

            <h2 className="text-3xl font-bold">
              Complete Your Booking
            </h2>

            <p className="text-gray-400 mt-2">
              Select your preferred dates and booking details.
            </p>

            {hotel && (
              <div className="mt-6 bg-black border border-red-900 rounded-2xl p-5">

                <p className="text-gray-400">
                  Hotel
                </p>

                <p className="text-xl font-bold mt-1">
                  {hotel.name}
                </p>

                <p className="text-gray-400 mt-1">
                  {hotel.location}
                </p>

                <p className="text-red-500 mt-2">
                  ₹
                  {Number(
                    hotel.price
                  ).toLocaleString(
                    "en-IN"
                  )}
                  {" "}per night
                </p>

                {hotel.rating !==
                  undefined && (
                  <p className="text-yellow-400 mt-2">
                    ★{" "}
                    {Number(
                      hotel.rating
                    ).toFixed(1)}
                  </p>
                )}

              </div>
            )}

            {destination && (
              <div className="mt-6 bg-black border border-red-900 rounded-2xl p-5">

                <p className="text-gray-400">
                  Destination
                </p>

                <p className="text-xl font-bold mt-1">
                  {destination.name}
                </p>

                {destination.country && (
                  <p className="text-gray-400 mt-1">
                    {destination.country}
                  </p>
                )}

                <p className="text-red-500 mt-2">
                  Destination reservation
                </p>

              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div>

                <label className="block text-sm text-gray-400 mb-2">
                  Check-in Date
                </label>

                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(event) => {
                    const value =
                      event.target.value;

                    setCheckIn(value);

                    if (
                      checkOut &&
                      value >= checkOut
                    ) {
                      setCheckOut("");
                    }
                  }}
                  className="w-full bg-black border border-red-900 rounded-xl px-4 py-4 text-white"
                />

              </div>

              <div>

                <label className="block text-sm text-gray-400 mb-2">
                  Check-out Date
                </label>

                <input
                  type="date"
                  value={checkOut}
                  min={
                    checkIn ||
                    today
                  }
                  onChange={(event) =>
                    setCheckOut(
                      event.target.value
                    )
                  }
                  className="w-full bg-black border border-red-900 rounded-xl px-4 py-4 text-white"
                />

              </div>

              <div>

                <label className="block text-sm text-gray-400 mb-2">
                  Guests
                </label>

                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(event) => {
                    const value =
                      Number(
                        event.target.value
                      );

                    setGuests(
                      Number.isFinite(
                        value
                      )
                        ? Math.max(
                            1,
                            value
                          )
                        : 1
                    );
                  }}
                  className="w-full bg-black border border-red-900 rounded-xl px-4 py-4 text-white"
                />

              </div>

              <div>

                <label className="block text-sm text-gray-400 mb-2">
                  Rooms
                </label>

                <input
                  type="number"
                  min="1"
                  value={rooms}
                  onChange={(event) => {
                    const value =
                      Number(
                        event.target.value
                      );

                    setRooms(
                      Number.isFinite(
                        value
                      )
                        ? Math.max(
                            1,
                            value
                          )
                        : 1
                    );
                  }}
                  className="w-full bg-black border border-red-900 rounded-xl px-4 py-4 text-white"
                />

              </div>

            </div>

            <div className="mt-8 bg-black border border-red-900 rounded-2xl p-6">

              <div className="flex items-center justify-between gap-4">

                <span className="text-gray-400">

                  {hotel
                    ? `₹${Number(
                        hotel.price
                      ).toLocaleString(
                        "en-IN"
                      )} × ${rooms} room(s)`
                    : "Destination reservation"}

                </span>

                <span className="text-2xl font-bold text-red-500">

                  ₹
                  {Number(
                    total
                  ).toLocaleString(
                    "en-IN"
                  )}

                </span>

              </div>

            </div>

            {!confirmed ? (
              <button
                type="button"
                onClick={
                  confirmBooking
                }
                disabled={
                  confirming
                }
                className="w-full mt-8 bg-red-600 hover:bg-red-700 disabled:bg-red-900 py-4 rounded-2xl font-bold text-lg"
              >
                {confirming
                  ? "Confirming Booking..."
                  : "Confirm Booking"}
              </button>
            ) : (
              <div className="mt-8 bg-green-700 rounded-2xl p-6 text-center">

                <h2 className="text-2xl font-bold">
                  Booking Confirmed Successfully
                </h2>

                <p className="text-green-100 mt-2">
                  Your reservation has been saved.
                </p>

                <Link
                  href="/my-bookings"
                  className="inline-block mt-5 bg-white text-black px-7 py-3 rounded-xl font-bold"
                >
                  View My Bookings
                </Link>

              </div>
            )}

            <Link
              href="/"
              className="block mt-5 border border-red-900 text-center py-4 rounded-2xl hover:bg-zinc-900"
            >
              ← Back Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black text-white flex items-center justify-center">
          Loading Booking...
        </main>
      }
    >
      <BookingContent />
    </Suspense>
  );
}