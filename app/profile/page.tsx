"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <section className="max-w-6xl mx-auto">

        <div className="rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900 shadow-2xl">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-red-600 flex items-center justify-center text-5xl font-bold">
              TB
            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Travel Explorer
              </h1>

              <p className="text-gray-400 mt-2">
                Premium Member
              </p>

              <Link
                href="/profile/edit"
                className="inline-block mt-5 bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition"
              >
                Edit Profile
              </Link>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-6">

            <h2 className="text-3xl font-bold">
              24
            </h2>

            <p className="text-gray-400">
              Trips Completed
            </p>

          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-6">

            <h2 className="text-3xl font-bold">
              12
            </h2>

            <p className="text-gray-400">
              Countries Visited
            </p>

          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-6">

            <h2 className="text-3xl font-bold">
              4.9
            </h2>

            <p className="text-gray-400">
              Traveler Rating
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          <Link
            href="/bookings"
            className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:border-red-600 transition"
          >
            <h2 className="text-2xl font-bold">
              My Bookings
            </h2>

            <p className="text-gray-400 mt-3">
              View and manage all hotel bookings.
            </p>
          </Link>

          <Link
            href="/payment"
            className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:border-red-600 transition"
          >
            <h2 className="text-2xl font-bold">
              Payments
            </h2>

            <p className="text-gray-400 mt-3">
              Secure payment history and invoices.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}