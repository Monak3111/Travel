type Props = {
  location: string;
};


export default function MapSection({ location }: Props){


return (

<section className="mt-16">


<h2 className="text-4xl font-extrabold mb-8">

📍 Location Map

</h2>




<div className="rounded-3xl overflow-hidden border border-red-900 bg-zinc-950">


<iframe

title="Travel Location Map"

src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}

className="w-full h-[450px]"

loading="lazy"

/>



</div>



</section>

);

}