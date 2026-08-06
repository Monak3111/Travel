"use client";
import Link from "next/link";
import { useState } from "react";


export default function FlightsPage(){


const [from,setFrom] = useState("");
const [to,setTo] = useState("");
const [searched,setSearched] = useState(false);



return (

<main className="min-h-screen bg-black text-white p-8">


<section className="max-w-5xl mx-auto mt-10 rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900 shadow-2xl">


<h1 className="text-5xl font-extrabold">

Flight <span className="text-red-500">Search</span>

</h1>


<p className="mt-4 text-gray-300 text-xl">

Find flights and plan your next journey.

</p>




<div className="grid md:grid-cols-2 gap-6 mt-10">


<input

value={from}

onChange={(e)=>setFrom(e.target.value)}

placeholder="From (Delhi)"

className="p-4 rounded-xl bg-zinc-900 border border-red-900 outline-none"

/>




<input

value={to}

onChange={(e)=>setTo(e.target.value)}

placeholder="To (Paris)"

className="p-4 rounded-xl bg-zinc-900 border border-red-900 outline-none"

/>





<input

type="date"

className="p-4 rounded-xl bg-zinc-900 border border-red-900"

/>




<input

placeholder="Passengers"

className="p-4 rounded-xl bg-zinc-900 border border-red-900 outline-none"

/>



</div>





<button

onClick={()=>setSearched(true)}

className="mt-10 bg-red-600 px-10 py-4 rounded-full font-bold hover:bg-red-700 transition"

>

Search Flights

</button>







{

searched && (

<div className="mt-10">


<h2 className="text-3xl font-bold">

Available Flights

</h2>



<div className="grid md:grid-cols-3 gap-5 mt-5">





<div className="p-5 rounded-3xl bg-zinc-950 border border-red-900">


<h3 className="font-bold text-xl">

TravelBlack Airlines

</h3>


<p className="text-gray-400 mt-2">

{from || "Departure"} → {to || "Destination"}

</p>


<p className="text-red-500 mt-3">

₹25,000

</p>


<Link
href={`/flights/book?from=${from}&to=${to}`}
className="inline-block mt-4 bg-red-600 px-5 py-2 rounded-full"
>
Select
</Link>

</div>





<div className="p-5 rounded-3xl bg-zinc-950 border border-red-900">


<h3 className="font-bold text-xl">

Sky Connect

</h3>


<p className="text-gray-400 mt-2">

{from || "Departure"} → {to || "Destination"}

</p>


<p className="text-red-500 mt-3">

₹32,500

</p>


<button className="mt-4 bg-red-600 px-5 py-2 rounded-full">

Select

</button>


</div>






<div className="p-5 rounded-3xl bg-zinc-950 border border-red-900">


<h3 className="font-bold text-xl">

Global Wings

</h3>


<p className="text-gray-400 mt-2">

{from || "Departure"} → {to || "Destination"}

</p>


<p className="text-red-500 mt-3">

₹41,000

</p>


<button className="mt-4 bg-red-600 px-5 py-2 rounded-full">

Select

</button>


</div>





</div>


</div>

)

}



</section>


</main>

);

}