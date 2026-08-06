"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


function BookingContent() {


  const params = useSearchParams();


  const hotelId = params.get("hotel") || "1";


  const [confirmed,setConfirmed] = useState(false);



  return (

    <main className="min-h-screen bg-black text-white p-8">


      <section className="max-w-4xl mx-auto mt-10">


        <div className="rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900 shadow-2xl">


          <h1 className="text-5xl font-extrabold">

            Hotel <span className="text-red-500">
              Booking
            </span>

          </h1>



          <p className="text-gray-400 mt-4">
            Complete your hotel reservation.
          </p>




          <div className="mt-10 bg-zinc-950 border border-red-900 rounded-3xl p-8">


            <h2 className="text-3xl font-bold">
              Booking Details
            </h2>



            <div className="mt-6 space-y-4 text-lg">


              <p>
                🏨 Hotel ID: {hotelId}
              </p>


              <p>
                📅 Check-in: 12 August 2026
              </p>


              <p>
                📅 Check-out: 15 August 2026
              </p>


              <p>
                👥 Guests: 2
              </p>


              <p className="text-red-500 text-2xl font-bold">
                Total: ₹25,000
              </p>


            </div>




            {!confirmed ? (

              <button

                onClick={()=>setConfirmed(true)}

                className="mt-8 bg-red-600 px-10 py-4 rounded-full font-bold hover:bg-red-700"

              >

                Confirm Booking

              </button>


            ) : (

              <div className="mt-8 bg-green-600 p-5 rounded-2xl font-bold">

                ✅ Booking Confirmed!

              </div>

            )}



          </div>



          <Link

            href="/"

            className="inline-block mt-8 border border-red-900 px-8 py-4 rounded-2xl hover:bg-zinc-900"

          >

            ← Back Home

          </Link>



        </div>


      </section>


    </main>

  );

}





export default function BookingPage(){


  return (

    <Suspense

      fallback={

        <main className="min-h-screen bg-black text-white flex items-center justify-center">

          Loading Booking...

        </main>

      }

    >

      <BookingContent />

    </Suspense>

  );

}