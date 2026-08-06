import Image from "next/image";


type Props = {
  images: string[];
};



export default function ImageGallery({ images }: Props){


return (

<section className="mt-16">


<h2 className="text-4xl font-extrabold mb-8">

📸 Explore Photos

</h2>




<div className="grid grid-cols-2 md:grid-cols-4 gap-5">


{

images.map((image,index)=>(


<div

key={index}

className="relative h-64 rounded-3xl overflow-hidden border border-red-900 hover:scale-105 transition"

>


<Image

src={image}

alt={`Travel photo ${index + 1}`}

fill

quality={100}

className="object-cover"

/>


</div>


))

}



</div>



</section>

);

}