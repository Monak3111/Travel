"use client";

import DestinationCard from "./DestinationCard";
import { destinations } from "../data/destinations";


export default function DestinationSlider() {


return (

<section className="py-16">


<div className="max-w-7xl mx-auto px-8">



<h2 className="text-4xl font-bold mb-8">

Trending Destinations

</h2>





<div className="flex gap-6 overflow-x-auto pb-5 hide-scrollbar">


{

destinations.map((place)=>(


<DestinationCard

key={place.id}

id={place.id}

name={place.name}

country={place.country}

image={place.image}

price={place.price}

rating={place.rating}

/>


))

}


</div>


</div>


</section>

);

}