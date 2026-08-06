const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    comment: "Amazing experience. The places and hotels were perfectly planned.",
  },
  {
    id: 2,
    name: "Emma Wilson",
    rating: 4.8,
    comment: "Loved the recommendations. TravelBlack made planning easy.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    rating: 5,
    comment: "The AI planner helped create a perfect itinerary.",
  },
];


export default function ReviewSection(){


return (

<section className="mt-16">


<h2 className="text-4xl font-extrabold mb-8">

⭐ Traveler Reviews

</h2>




<div className="grid md:grid-cols-3 gap-8">


{

reviews.map((review)=>(


<div

key={review.id}

className="bg-zinc-950 border border-red-900 rounded-3xl p-6 hover:scale-105 transition"

>


<div className="flex items-center justify-between">


<h3 className="text-xl font-bold">

{review.name}

</h3>


<span className="text-red-500 font-bold">

⭐ {review.rating}

</span>


</div>




<p className="text-gray-400 mt-5 leading-relaxed">

{review.comment}

</p>



</div>


))

}


</div>



</section>

);

}