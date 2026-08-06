import Link from "next/link";


export default function EditProfilePage(){


return (

<main className="min-h-screen bg-black text-white p-8">


<section className="max-w-3xl mx-auto">



<div className="rounded-3xl p-10 bg-gradient-to-r from-black via-red-950 to-black border border-red-900">



<h1 className="text-4xl font-extrabold">

Edit Profile

</h1>




<div className="mt-8 space-y-5">



<input

placeholder="Full Name"

className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"

/>



<input

placeholder="Email"

className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"

/>



<input

placeholder="Phone Number"

className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"

/>



<textarea

placeholder="About your travel style"

className="w-full bg-black border border-red-900 rounded-xl px-5 py-4 h-32"

/>



</div>





<button

className="mt-8 bg-red-600 px-8 py-4 rounded-full hover:bg-red-700 transition"

>

Save Changes

</button>





<Link

href="/profile"

className="block mt-5 text-gray-400 hover:text-red-500"

>

← Back to Profile

</Link>



</div>



</section>


</main>

);

}