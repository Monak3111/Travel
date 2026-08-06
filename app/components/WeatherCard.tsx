type Props = {
  city: string;
};


export default function WeatherCard({ city }: Props){


return (

<section className="mt-10">


<div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">



<h2 className="text-3xl font-bold">

🌦️ Weather in {city}

</h2>



<div className="grid md:grid-cols-3 gap-6 mt-6">



<div className="bg-black rounded-2xl p-5 border border-red-900">

<p className="text-gray-400">

Temperature

</p>


<h3 className="text-4xl font-bold mt-2">

26°C

</h3>

</div>





<div className="bg-black rounded-2xl p-5 border border-red-900">

<p className="text-gray-400">

Condition

</p>


<h3 className="text-2xl font-bold mt-2">

Sunny ☀️

</h3>

</div>





<div className="bg-black rounded-2xl p-5 border border-red-900">

<p className="text-gray-400">

Best Time

</p>


<h3 className="text-2xl font-bold mt-2">

March - May

</h3>

</div>



</div>



</div>


</section>

);

}