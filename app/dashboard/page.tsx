import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <section className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold">
          My <span className="text-red-500">Dashboard</span>
        </h1>

        <p className="mt-3 text-gray-400">
          Welcome back to TravelBlack
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <h2 className="text-gray-400">Upcoming Trips</h2>
            <p className="text-5xl font-bold mt-4">3</p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <h2 className="text-gray-400">Saved Places</h2>
            <p className="text-5xl font-bold mt-4">18</p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <h2 className="text-gray-400">Hotels Booked</h2>
            <p className="text-5xl font-bold mt-4">7</p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <h2 className="text-gray-400">Reward Points</h2>
            <p className="text-5xl font-bold mt-4">12,450</p>
          </div>

        </div>

        <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 mt-12">

          <h2 className="text-3xl font-bold mb-8">
            Upcoming Bookings
          </h2>

          <div className="space-y-6">

            <div className="flex justify-between items-center border border-red-900 rounded-2xl p-6">

              <div>
                <h3 className="text-2xl font-bold">
                  The Ritz Paris
                </h3>

                <p className="text-gray-400 mt-2">
                  Paris • 12 Aug - 18 Aug
                </p>
              </div>

              <span className="bg-green-600 px-4 py-2 rounded-full">
                Confirmed
              </span>

            </div>

            <div className="flex justify-between items-center border border-red-900 rounded-2xl p-6">

              <div>
                <h3 className="text-2xl font-bold">
                  Marina Bay Sands
                </h3>

                <p className="text-gray-400 mt-2">
                  Singapore • 25 Sep - 30 Sep
                </p>
              </div>

              <span className="bg-yellow-600 px-4 py-2 rounded-full">
                Pending
              </span>

            </div>

          </div>

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