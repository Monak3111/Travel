import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
};


export default function HotelCard({
  id,
  name,
  image,
  location,
  price,
  rating,
  reviews,
}: Props) {


  return (

    <div className="bg-zinc-950 border border-red-900 rounded-3xl overflow-hidden hover:scale-105 transition">


      <div className="relative h-64">

        <Image
          src={image}
          alt={name}
          fill
          quality={100}
          className="object-cover"
        />

      </div>



      <div className="p-6">


        <h2 className="text-2xl font-bold">
          {name}
        </h2>



        <p className="text-gray-400 mt-2">
          {location}
        </p>



        <div className="flex flex-col gap-2 mt-4">


          <span className="text-red-500">
            ⭐ {rating}
          </span>


          <span className="text-gray-400">
            {reviews} reviews
          </span>


          <span>
            ₹{price}/night
          </span>


        </div>




        <Link

          href={`/hotels/${id}`}

          className="mt-6 inline-block bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition"

        >

          View Hotel

        </Link>



      </div>


    </div>

  );

}