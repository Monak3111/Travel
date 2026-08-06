"use client";

import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-extrabold">
          Secure <span className="text-red-500">Payment</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Test payment page for TravelBlack
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">

          {/* Payment Form */}

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Card Details
            </h2>

            <div className="space-y-6">

              <input
                placeholder="Card Holder Name"
                className="w-full p-4 rounded-xl bg-black border border-red-900 outline-none"
              />

              <input
                placeholder="1234 5678 9012 3456"
                className="w-full p-4 rounded-xl bg-black border border-red-900 outline-none"
              />

              <div className="grid grid-cols-2 gap-5">

                <input
                  placeholder="MM / YY"
                  className="w-full p-4 rounded-xl bg-black border border-red-900 outline-none"
                />

                <input
                  placeholder="CVV"
                  className="w-full p-4 rounded-xl bg-black border border-red-900 outline-none"
                />

              </div>

              <div className="flex items-center gap-3 mt-6">

                <input type="checkbox" />

                <span className="text-gray-300">
                  Save this card securely
                </span>

              </div>

            </div>

          </div>

          {/* Summary */}

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              Payment Summary
            </h2>

            <div className="space-y-5 mt-8">

              <div className="flex justify-between">
                <span>Hotel</span>
                <span>₹25,000</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes</span>
                <span>₹2,500</span>
              </div>

              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>₹500</span>
              </div>

              <hr className="border-red-900" />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>₹28,000</span>
              </div>

            </div>

            <Link
  href="/payment/success"
  className="block mt-10 w-full bg-red-600 py-4 rounded-2xl text-xl font-bold text-center hover:bg-red-700 transition"
>
  Pay Securely
</Link>

            <Link
              href="/booking"
              className="block text-center mt-5 border border-red-900 py-4 rounded-2xl hover:bg-zinc-900 transition"
            >
              ← Back
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}