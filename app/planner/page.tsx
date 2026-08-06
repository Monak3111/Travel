"use client";

import { useState } from "react";
import Link from "next/link";


export default function PlannerPage() {


const [generated, setGenerated] = useState(false);


const [destination, setDestination] = useState("");

const [budget, setBudget] = useState("");

const [days, setDays] = useState("");

const [style, setStyle] = useState("Luxury");



function generateTrip(){

setGenerated(true);

}




return (

<main className="min-h-screen bg-black text-white p-8">


<section className="max-w-5xl mx-auto mt-10 rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900 shadow-2xl">



<h1 className="text-5xl font-extrabold">

AI <span className="text-red-500">Trip Planner</span>

</h1>



<p className="mt-5 text-gray-300 text-xl">

Create your personalized journey with TravelBlack AI.

</p>





<div className="grid md:grid-cols-2 gap-6 mt-10">



<div>

<label className="text-gray-400">

Destination

</label>


<input

value={destination}

onChange={(e)=>setDestination(e.target.value)}

placeholder="Paris, Dubai, Bali..."

className="mt-2 w-full p-4 rounded-xl bg-zinc-900 border border-red-900 outline-none"

/>

</div>






<div>

<label className="text-gray-400">

Budget

</label>


<input

value={budget}

onChange={(e)=>setBudget(e.target.value)}

placeholder="₹50000"

className="mt-2 w-full p-4 rounded-xl bg-zinc-900 border border-red-900 outline-none"

/>

</div>







<div>

<label className="text-gray-400">

Trip Duration

</label>


<input

value={days}

onChange={(e)=>setDays(e.target.value)}

placeholder="7 days"

className="mt-2 w-full p-4 rounded-xl bg-zinc-900 border border-red-900 outline-none"

/>

</div>






<div>

<label className="text-gray-400">

Travel Style

</label>


<select

value={style}

onChange={(e)=>setStyle(e.target.value)}

className="mt-2 w-full p-4 rounded-xl bg-zinc-900 border border-red-900"

>


<option>Luxury</option>

<option>Adventure</option>

<option>Beach</option>

<option>Family</option>


</select>


</div>



</div>






<button

onClick={generateTrip}

className="mt-10 bg-red-600 px-10 py-4 rounded-full font-bold hover:bg-red-700 transition"

>

✨ Generate My Trip

</button>






{

generated && (

<div className="mt-10 p-8 rounded-3xl bg-zinc-950 border border-red-900">


<h2 className="text-3xl font-bold">

Your AI Trip Plan

</h2>



<div className="mt-5 space-y-3 text-gray-300">


<p>

📍 Destination: {destination || "Your Dream Destination"}

</p>


<p>

💰 Budget: {budget || "Flexible Budget"}

</p>


<p>

📅 Duration: {days || "7 days"}

</p>


<p>

🎯 Style: {style}

</p>


</div>




<h3 className="text-2xl font-bold mt-8">

Suggested Itinerary

</h3>




<div className="mt-4 space-y-4">


<div className="bg-black p-5 rounded-2xl border border-red-900">

Day 1 - Arrival & City Exploration

</div>


<div className="bg-black p-5 rounded-2xl border border-red-900">

Day 2 - Famous Attractions & Local Food

</div>


<div className="bg-black p-5 rounded-2xl border border-red-900">

Day 3 - Experiences & Hidden Gems

</div>


</div>




<button

className="mt-8 bg-red-600 px-8 py-3 rounded-full"

>

Save Trip

</button>



</div>

)

}





<Link

href="/"

className="inline-block mt-8 text-red-500 hover:underline"

>

← Back Home

</Link>



</section>


</main>

);

}