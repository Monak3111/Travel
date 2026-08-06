import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">

      <section className="max-w-xl w-full bg-zinc-950 border border-red-900 rounded-3xl p-10 text-center">

        <h1 className="text-5xl font-bold text-green-500">
          ✅ Payment Successful
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Thank you for booking with TravelBlack.
        </p>

        <p className="mt-2 text-gray-500">
          Your booking has been confirmed.
        </p>

        <Link
          href="/bookings"
          className="block mt-10 bg-red-600 py-4 rounded-2xl font-bold hover:bg-red-700"
        >
          View My Bookings
        </Link>

        <Link
          href="/"
          className="block mt-4 border border-red-900 py-4 rounded-2xl hover:bg-zinc-900"
        >
          Back Home
        </Link>

      </section>

    </main>
  );
}