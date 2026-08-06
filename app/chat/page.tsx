"use client";

import { useState } from "react";


function generateReply(message: string) {

  const text = message.toLowerCase();


  if (text.includes("hotel")) {
    return "I can help you find luxury hotels, budget stays, and resorts. Try destinations like Paris, Dubai, Bali, or Tokyo.";
  }


  if (text.includes("flight")) {
    return "You can search flights using our Flight Search section. Tell me your departure and destination.";
  }


  if (text.includes("paris")) {
    return "Paris is perfect for luxury travel. I recommend The Ritz Paris, Eiffel Tower, Louvre Museum, and French cuisine experiences.";
  }


  if (text.includes("dubai")) {
    return "Dubai offers luxury resorts, desert adventures, Burj Khalifa views, and premium hotels like Atlantis The Palm.";
  }


  if (text.includes("plan") || text.includes("trip")) {
    return "Tell me your destination, budget, number of days, and travel style. I will help create an itinerary.";
  }


  return "I can help with destinations, hotels, flights, trip planning, and travel recommendations. Ask me anything!";
}



export default function ChatPage() {


  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([
    {
      role: "bot",
      text: "👋 Hello! I'm the TravelBlack AI Assistant. Ask me anything about destinations, hotels, flights, or travel planning.",
    },
  ]);



  const [input, setInput] = useState("");



  function sendMessage() {

    if (!input.trim()) return;


    const userMessage = {
      role: "user" as const,
      text: input,
    };


    const botMessage = {
      role: "bot" as const,
      text: generateReply(input),
    };


    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);


    setInput("");

  }



  return (

    <main className="min-h-screen bg-black text-white p-8">


      <section className="max-w-4xl mx-auto">


        <h1 className="text-5xl font-bold">
          AI <span className="text-red-500">
            Travel Assistant
          </span>
        </h1>



        <p className="mt-3 text-gray-400">
          Your personal TravelBlack AI companion.
        </p>




        <div className="mt-8 h-[500px] overflow-y-auto bg-zinc-950 border border-red-900 rounded-3xl p-6 space-y-4">


          {messages.map((message, index) => (

            <div
              key={index}
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.role === "user"
                  ? "ml-auto bg-red-600"
                  : "bg-zinc-800"
              }`}
            >

              {message.text}

            </div>

          ))}


        </div>





        <div className="flex gap-4 mt-6">


          <input

            value={input}

            onChange={(e)=>setInput(e.target.value)}

            placeholder="Ask anything..."

            className="flex-1 bg-zinc-950 border border-red-900 rounded-xl p-4 outline-none"

          />



          <button

            onClick={sendMessage}

            className="bg-red-600 px-8 rounded-xl hover:bg-red-700"

          >

            Send

          </button>


        </div>



      </section>


    </main>

  );

}