import Link from "next/link";


export default function Navbar(){


return (

<nav className="bg-black text-white border-b border-red-900 px-8 py-5">


<div className="max-w-7xl mx-auto flex items-center justify-between">


<Link
href="/"
className="text-3xl font-extrabold"
>
Travel
<span className="text-red-500">
Black
</span>
</Link>



<div className="hidden md:flex items-center gap-8 text-gray-300">


<Link
href="/destination"
className="hover:text-red-500 transition"
>
Destinations
</Link>


<Link
href="/hotels"
className="hover:text-red-500 transition"
>
Hotels
</Link>


<Link
href="/flights"
className="hover:text-red-500 transition"
>
Flights
</Link>


<Link
href="/planner"
className="hover:text-red-500 transition"
>
AI Planner
</Link>


<Link
href="/profile"
className="hover:text-red-500 transition"
>
Profile
</Link>


</div>




<div className="flex gap-3">


<Link

href="/login"

className="px-5 py-2 rounded-full border border-red-600 hover:bg-red-600 transition"

>

Login

</Link>




<Link
  href="/signup"
  className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 transition"
>
  Signup
</Link>

<Link
  href="/chat"
  className="px-5 py-2 rounded-full border border-red-600 hover:bg-red-600 transition"
>
  AI Assistant
</Link>

<Link
  href="/pricing"
  className="hover:text-red-500 transition"
>
  Pricing
</Link>

</div>



</div>


</nav>

);

}