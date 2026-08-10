"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">

        {/* PROFILE HEADER */}
        <div className="rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900 shadow-2xl">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-red-600 flex items-center justify-center text-5xl font-bold shadow-xl">
              TB
            </div>

            <div className="text-center md:text-left">

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

        {/* PROFILE STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-6">
            <h2 className="text-3xl font-bold">
              24
            </h2>

            <p className="text-gray-400 mt-1">
              Trips Completed
            </p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-6">
            <h2 className="text-3xl font-bold">
              12
            </h2>

            <p className="text-gray-400 mt-1">
              Countries Visited
            </p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-6">
            <h2 className="text-3xl font-bold">
              4.9
            </h2>

            <p className="text-gray-400 mt-1">
              Traveler Rating
            </p>
          </div>

        </div>

        {/* ACCOUNT OPTIONS */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {/* IMPORTANT:
              The correct My Bookings route is /my-bookings.
              Do NOT use /bookings here.
          */}
          <Link
            href="/my-bookings"
            className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:border-red-600 hover:bg-red-950/20 transition"
          >
            <div className="text-4xl mb-4">
              🧳
            </div>

            <h2 className="text-2xl font-bold">
              My Bookings
            </h2>

            <p className="text-gray-400 mt-3">
              View and manage all your hotel and destination bookings.
            </p>

            <span className="inline-block mt-5 text-red-500 font-semibold">
              View Bookings →
            </span>
          </Link>

          {/* PAYMENTS */}
          <Link
            href="/payment"
            className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:border-red-600 hover:bg-red-950/20 transition"
          >
            <div className="text-4xl mb-4">
              💳
            </div>

            <h2 className="text-2xl font-bold">
              Payments
            </h2>

            <p className="text-gray-400 mt-3">
              View your payment and booking confirmation information.
            </p>

            <span className="inline-block mt-5 text-red-500 font-semibold">
              View Payments →
            </span>
          </Link>

        </div>

        {/* BACK HOME */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block border border-red-900 px-6 py-3 rounded-full hover:bg-zinc-900 transition"
          >
            ← Back Home
          </Link>
        </div>

      </section>
    </main>
  );
}