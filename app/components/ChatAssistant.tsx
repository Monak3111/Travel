"use client";

import { useRouter } from "next/navigation";


export default function ChatAssistant(){

  const router = useRouter();


  return (

    <button

      onClick={()=>router.push("/chat")}

      className="fixed bottom-6 right-6 bg-red-600 w-16 h-16 rounded-full text-2xl shadow-xl hover:bg-red-700 transition"

    >

      🤖

    </button>

  );

}