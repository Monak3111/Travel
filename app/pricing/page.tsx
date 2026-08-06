export default function PricingPage() {
  const hotels = [
    {
      name: "The Ritz Paris",
      base: 42000,
      demand: "High",
      current: 48500,
    },
    {
      name: "Atlantis Dubai",
      base: 46000,
      demand: "Medium",
      current: 47200,
    },
    {
      name: "Marina Bay Sands",
      base: 48000,
      demand: "Very High",
      current: 56500,
    },
    {
      name: "Park Hyatt Sydney",
      base: 42000,
      demand: "Low",
      current: 39500,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <section className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold">
          Dynamic <span className="text-red-500">Pricing</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Live hotel pricing based on demand.
        </p>

        <div className="mt-10 space-y-6">

          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="bg-zinc-950 border border-red-900 rounded-3xl p-8 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {hotel.name}
                </h2>

                <p className="text-gray-400 mt-2">
                  Demand: {hotel.demand}
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-500 line-through">
                  ₹{hotel.base.toLocaleString()}
                </p>

                <p className="text-3xl text-red-500 font-bold">
                  ₹{hotel.current.toLocaleString()}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}