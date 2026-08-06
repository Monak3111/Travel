import Image from "next/image";


const hotels = [

  {
    id:1,
    name:"Royal Dubai Palace",
    location:"Dubai, UAE",
    price:"₹18000/night",
    rating:"4.9",
    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=90",
  },


  {
    id:2,
    name:"Paris Luxury Suites",
    location:"Paris, France",
    price:"₹22000/night",
    rating:"4.8",
    image:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=90",
  },


  {
    id:3,
    name:"Bali Ocean Resort",
    location:"Bali, Indonesia",
    price:"₹15000/night",
    rating:"5.0",
    image:"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=90",
  },


];



export default function HotelsPage(){


return (

<main className="min-h-screen bg-black text-white p-8">


<section className="rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900">


<h1 className="text-5xl font-extrabold">

Luxury <span className="text-red-500">Hotels</span>

</h1>


<p className="mt-4 text-gray-300 text-xl">

Find premium stays around the world.

</p>



<div className="grid md:grid-cols-3 gap-8 mt-10">


{

hotels.map((hotel)=>(


<div

key={hotel.id}

className="rounded-3xl overflow-hidden bg-zinc-950 border border-red-900 hover:scale-105 transition"

>



<div className="relative h-72">


<Image

src={hotel.image}

alt={hotel.name}

fill

quality={90}

className="object-cover"

/>


</div>



<div className="p-6">


<h2 className="text-2xl font-bold">

{hotel.name}

</h2>



<p className="text-gray-400">

{hotel.location}

</p>




<div className="flex justify-between mt-4">


<span className="text-red-500">

⭐ {hotel.rating}

</span>



<span>

{hotel.price}

</span>


</div>



<button

className="mt-6 w-full bg-red-600 py-3 rounded-full font-bold hover:bg-red-700"

>

Book Now

</button>


</div>


</div>


))


}


</div>


</section>


</main>

);

}