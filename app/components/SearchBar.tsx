"use client";
import { hotels } from "../data/hotels";
import { useState } from "react";
import { destinations } from "../data/destinations";
import Link from "next/link";


export default function SearchBar(){

const [query,setQuery] = useState("");



const results = destinations.filter((place)=>
  place.name.toLowerCase().includes(query.toLowerCase()) ||
  place.country.toLowerCase().includes(query.toLowerCase())
);


return (

<div className="relative max-w-3xl mx-auto mt-10">


<div className="bg-white rounded-full p-2 flex items-center shadow-2xl">


<input

value={query}

onChange={(e)=>setQuery(e.target.value)}

placeholder="Search destinations, countries..."

className="flex-1 px-6 py-4 text-black outline-none rounded-full text-lg"

/>


<button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700">

Search

</button>


</div>




{
query && (

<div className="absolute top-20 left-0 right-0 bg-zinc-950 border border-red-900 rounded-3xl overflow-hidden z-50">


{
results.length > 0 ?

results.slice(0,6).map((place)=>(


<Link

key={place.id}

href={`/destination/${place.id}`}

className="flex items-center gap-5 p-5 hover:bg-red-950 transition"

onClick={()=>setQuery("")}

>


<img

src={place.image}

alt={place.name}

className="w-20 h-20 rounded-2xl object-cover"

/>


<div>


<h3 className="text-xl font-bold text-white">

{place.name}

</h3>


<p className="text-gray-400">

{place.country}

</p>


</div>



</Link>


))


:

(

<p className="p-6 text-gray-400">

No destination found

</p>

)

}



</div>

)

}



</div>

);

}