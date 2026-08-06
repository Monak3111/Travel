"use client";

import DestinationCard from "./DestinationCard";
import { destinations } from "../data/destinations";


type Props = {
  category: string;
};



export default function CategorySlider({

category,

}: Props) {



const filteredDestinations = destinations.filter(

(place)=> place.category === category

);




return (

<section className="mt-12">



<h2 className="text-4xl font-black text-white">

{category} Destinations

</h2>





<div className="flex gap-6 overflow-x-auto pb-6 mt-8 scrollbar-hide">



{

filteredDestinations.map((place)=>(


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



</section>

);

}