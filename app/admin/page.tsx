import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <section className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold">
          TravelBlack <span className="text-red-500">Admin Dashboard</span>
        </h1>

        <p className="mt-3 text-gray-400">
          Manage your travel platform.
        </p>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Users</p>
            <h2 className="text-5xl font-bold mt-4">12,541</h2>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Bookings</p>
            <h2 className="text-5xl font-bold mt-4">5,320</h2>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Hotels</p>
            <h2 className="text-5xl font-bold mt-4">1,286</h2>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Revenue</p>
            <h2 className="text-5xl font-bold mt-4">₹4.8 Cr</h2>
          </div>

        </div>

        {/* Recent Bookings */}

        <div className="mt-14 bg-zinc-950 border border-red-900 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Recent Bookings
          </h2>

          <div className="space-y-5">

            {[
              ["Mona Kashyap", "The Ritz Paris", "Confirmed"],
              ["Rahul Sharma", "Marina Bay Sands", "Confirmed"],
              ["Sophia Lee", "Atlantis Dubai", "Pending"],
              ["David Wilson", "Tokyo Palace", "Completed"],
            ].map((item, index) => (

              <div
                key={index}
                className="flex justify-between items-center border border-red-900 rounded-2xl p-5"
              >

                <div>

                  <h3 className="font-bold text-xl">
                    {item[0]}
                  </h3>

                  <p className="text-gray-400">
                    {item[1]}
                  </p>

                </div>

                <span className="bg-red-600 px-5 py-2 rounded-full">
                  {item[2]}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Actions */}

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <Link
  href="/admin/destinations"
  className="bg-red-600 py-5 rounded-2xl font-bold text-center hover:bg-red-700 transition"
>
  Add Destination
</Link>

          <Link
  href="/admin/hotels"
  className="bg-red-600 py-5 rounded-2xl font-bold text-center hover:bg-red-700 transition"
>
  Add Hotel
</Link>

          <Link
  href="/admin/reports"
  className="bg-red-600 py-5 rounded-2xl font-bold text-center hover:bg-red-700 transition"
>
  View Reports
</Link>

        </div>

        <Link
          href="/"
          className="inline-block mt-10 bg-zinc-900 border border-red-900 px-8 py-4 rounded-2xl hover:bg-zinc-800 transition"
        >
          ← Back Home
        </Link>

      </section>

    </main>
  );
}