"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function createAccount() {
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Account created successfully!");

    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <section className="w-full max-w-md bg-zinc-950 border border-red-900 rounded-3xl p-10">

        <h1 className="text-4xl font-extrabold">
          Create Account
        </h1>

        <p className="text-gray-400 mt-3">
          Join TravelBlack today.
        </p>

        <div className="mt-8 space-y-5">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"
          />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"
          />

          <button
            onClick={createAccount}
            disabled={loading}
            className="w-full bg-red-600 py-4 rounded-full font-bold hover:bg-red-700 transition"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

        </div>

        <p className="mt-6 text-gray-400 text-center">
          Already have an account?

          <Link
            href="/login"
            className="text-red-500 ml-2"
          >
            Login
          </Link>
        </p>

      </section>
    </main>
  );
}