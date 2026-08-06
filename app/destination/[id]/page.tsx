import Image from "next/image";
import { notFound } from "next/navigation";

import { destinations } from "../../data/destinations";
import { hotels } from "../../data/hotels";

import WeatherCard from "../../components/WeatherCard";
import MapSection from "../../components/MapSection";
import ReviewSection from "../../components/ReviewSection";
import HotelSection from "../../components/HotelSection";


export default async function DestinationPage({

  params,

}: {

  params: Promise<{ id: string }>;

}) {


  const { id } = await params;


  const destination = destinations.find(

    (item) => item.id === Number(id)

  );


  if (!destination) {

    notFound();

  }


  const destinationHotels = hotels.filter(

    (hotel) => hotel.destinationId === destination.id

  );


  return (

    <main className="min-h-screen bg-black text-white p-8">


      <section className="max-w-7xl mx-auto space-y-12">


        {/* Hero Image */}

        <div className="relative h-[550px] rounded-3xl overflow-hidden border border-red-900 bg-black">

          <Image

            src={destination.image}

            alt={destination.name}

            fill

            priority

            quality={90}

            sizes="(max-width: 768px) 100vw, 1200px"

            className="object-cover object-center scale-100"

          />


          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-10">


            <h1 className="text-5xl md:text-6xl font-extrabold">

              {destination.name}

            </h1>


            <p className="text-xl text-gray-300 mt-3">

              {destination.country}

            </p>


            <div className="flex gap-4 mt-5">


              <span className="bg-red-600 px-5 py-2 rounded-full">

                ⭐ {destination.rating}

              </span>


              <span className="bg-zinc-900 px-5 py-2 rounded-full">

                From ₹{destination.price}

              </span>


            </div>


          </div>


        </div>



        {/* About */}

        <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">


          <h2 className="text-3xl font-bold">

            About {destination.name}

          </h2>


          <p className="mt-4 text-gray-400 leading-relaxed">

            Discover amazing attractions, local culture, food,
            hotels and experiences in {destination.name}.
            TravelBlack helps you plan your perfect journey.

          </p>


        </div>



        {/* Weather */}

        <WeatherCard

          city={destination.name}

        />



        {/* Map */}

        <MapSection

          location={`${destination.name}, ${destination.country}`}

        />



        {/* Hotels */}

        <HotelSection

          title={`Recommended Hotels in ${destination.name}`}

          hotels={destinationHotels}

        />



        {/* Reviews */}

        <ReviewSection />


      </section>


    </main>

  );

}