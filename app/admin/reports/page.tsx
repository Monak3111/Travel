export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <section className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold">
          Reports <span className="text-red-500">Dashboard</span>
        </h1>

        <p className="text-gray-400 mt-3">
          TravelBlack analytics overview
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Revenue</p>
            <h2 className="text-4xl font-bold mt-4">₹4.8 Cr</h2>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Bookings</p>
            <h2 className="text-4xl font-bold mt-4">5,320</h2>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Users</p>
            <h2 className="text-4xl font-bold mt-4">12,541</h2>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <p className="text-gray-400">Hotels</p>
            <h2 className="text-4xl font-bold mt-4">38</h2>
          </div>

        </div>

      </section>

    </main>
  );
}