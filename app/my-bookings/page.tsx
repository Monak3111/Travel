"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Booking = {
  id: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  total: number;
  status: string;

  hotel: {
    id: number;
    name: string;
    image: string;
    location: string;
  };
};

export default function MyBookingsPage() {

  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {

    const user = localStorage.getItem("travelblack-user");

    if (!user) return;

    const currentUser = JSON.parse(user);

    fetch(`/api/booking/list?userId=${currentUser.id}`)
      .then((res) => res.json())
      .then((data) => {

        setBookings(data);

      });

  }, []);

  return (

    <main className="min-h-screen bg-black text-white p-8">

      <section className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-10">

          My Bookings

        </h1>

        {bookings.length === 0 ? (

          <div className="text-gray-400">

            No bookings yet.

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-8">

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="bg-zinc-950 border border-red-900 rounded-3xl overflow-hidden"
              >

                <div className="relative h-72">

                  <Image
                    src={booking.hotel.image}
                    alt={booking.hotel.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <h2 className="text-2xl font-bold">

                    {booking.hotel.name}

                  </h2>

                  <p className="text-gray-400 mt-2">

                    {booking.hotel.location}

                  </p>

                  <div className="mt-6 space-y-2">

                    <p>Check In: {booking.checkIn.substring(0,10)}</p>

                    <p>Check Out: {booking.checkOut.substring(0,10)}</p>

                    <p>Guests: {booking.guests}</p>

                    <p>Rooms: {booking.rooms}</p>

                    <p>Total: ₹{booking.total}</p>

                    <p className="text-green-500">

                      {booking.status}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </main>

  );

}