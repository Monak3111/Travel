import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-xl mx-auto w-full bg-zinc-950 border border-red-900 rounded-3xl p-10 text-center shadow-2xl">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-green-500">
          Payment Successful
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Thank you for booking with TravelBlack.
        </p>

        <p className="mt-2 text-gray-500">
          Your booking has been confirmed successfully.
        </p>

        <div className="mt-8 bg-black border border-green-900 rounded-2xl p-5">
          <p className="text-green-400 font-semibold">
            ✓ Booking Confirmed
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Your reservation is saved to your account.
          </p>
        </div>

        {/* IMPORTANT:
            Your real bookings page is /my-bookings
            NOT /bookings
        */}
        <Link
          href="/my-bookings"
          className="block mt-10 bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold transition"
        >
          View My Bookings
        </Link>

        <Link
          href="/"
          className="block mt-4 border border-red-900 py-4 rounded-2xl hover:bg-zinc-900 transition"
        >
          Back Home
        </Link>

      </section>
    </main>
  );
}