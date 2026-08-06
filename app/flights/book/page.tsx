"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";


function FlightBookingContent() {


  const searchParams = useSearchParams();


  const from = searchParams.get("from") || "Delhi";

  const to = searchParams.get("to") || "Paris";



  const [confirmed, setConfirmed] = useState(false);



  return (

    <main className="min-h-screen bg-black text-white p-8">


      <section className="max-w-5xl mx-auto mt-10">


        <div className="rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900 shadow-2xl">


          <h1 className="text-5xl font-extrabold">

            Flight <span className="text-red-500">
              Booking
            </span>

          </h1>


          <p className="text-gray-400 mt-4 text-xl">

            Complete your flight reservation.

          </p>



          <div className="mt-10 bg-zinc-950 border border-red-900 rounded-3xl p-8">


            <h2 className="text-3xl font-bold">
              Flight Details
            </h2>



            <div className="mt-6 space-y-4 text-lg">


              <p>
                ✈️ From: {from}
              </p>


              <p>
                🌍 To: {to}
              </p>


              <p>
                💺 Class: Economy
              </p>


              <p>
                👥 Passengers: 1
              </p>


              <p className="text-red-500 text-2xl font-bold">
                Price: ₹25,000
              </p>


            </div>



            {!confirmed ? (

              <button

                onClick={()=>setConfirmed(true)}

                className="mt-8 bg-red-600 px-10 py-4 rounded-full font-bold hover:bg-red-700"

              >

                Confirm Flight Booking

              </button>


            ) : (

              <div className="mt-8 bg-green-600 p-5 rounded-2xl font-bold">

                ✅ Flight Booking Confirmed!

              </div>

            )}



          </div>



          <Link

            href="/flights"

            className="inline-block mt-8 border border-red-900 px-8 py-4 rounded-2xl hover:bg-zinc-900"

          >

            ← Back To Flights

          </Link>



        </div>


      </section>


    </main>

  );

}




export default function FlightBookingPage(){


  return (

    <Suspense

      fallback={

        <main className="min-h-screen bg-black text-white flex items-center justify-center">

          Loading Flight Booking...

        </main>

      }

    >

      <FlightBookingContent />

    </Suspense>

  );

}