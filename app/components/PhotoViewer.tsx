"use client";

import { useState } from "react";
import Image from "next/image";


type Props = {
  images: string[];
};



export default function PhotoViewer({ images }: Props){


const [active,setActive] = useState(images[0]);



return (

<div className="space-y-6">



<div className="relative h-[500px] rounded-3xl overflow-hidden border border-red-900">


<Image

src={active}

alt="Destination image"

fill

quality={100}

className="object-cover"

/>


</div>






<div className="flex gap-5 overflow-x-auto pb-3">


{

images.map((img,index)=>(


<button

key={index}

onClick={()=>setActive(img)}

className={`relative min-w-[120px] h-[120px] rounded-2xl overflow-hidden border ${
active === img 
? "border-red-500"
: "border-red-900"
}`}

>


<Image

src={img}

alt="Gallery"

fill

quality={100}

className="object-cover"

/>


</button>


))

}



</div>



</div>

);

}