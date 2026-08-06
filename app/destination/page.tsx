import Link from "next/link";
import Image from "next/image";

import { destinations } from "../data/destinations";


export default function DestinationsPage(){

return (

<main className="min-h-screen bg-black text-white p-8">


<section className="max-w-7xl mx-auto">


<h1 className="text-5xl font-extrabold">
Explore
<span className="text-red-500">
 Destinations
</span>
</h1>


<p className="text-gray-400 mt-3">
Discover amazing places around the world.
</p>



<div className="grid md:grid-cols-3 gap-8 mt-10">


{
destinations.map((place)=>(


<Link

href={`/destination/${place.id}`}

key={place.id}

className="bg-zinc-950 rounded-3xl overflow-hidden border border-red-900 hover:scale-105 transition"

>


<div className="relative h-72">


<Image

src={place.image}

alt={place.name}

fill

className="object-cover"

/>


</div>



<div className="p-5">


<h2 className="text-2xl font-bold">

{place.name}

</h2>


<p className="text-gray-400">

{place.country}

</p>


<div className="mt-3 flex justify-between">


<span className="text-red-500">

⭐ {place.rating}

</span>


<span>

₹{place.price}

</span>


</div>


</div>


</Link>


))

}


</div>


</section>


</main>

);

}