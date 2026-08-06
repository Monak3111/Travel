"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function login() {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

    localStorage.setItem("travelblack-user", JSON.stringify(data.user));

    alert("Login successful!");

    router.push("/");
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <section className="w-full max-w-md bg-zinc-950 border border-red-900 rounded-3xl p-10">

        <h1 className="text-4xl font-extrabold">
          Welcome Back
        </h1>

        <p className="text-gray-400 mt-3">
          Login to continue your journey.
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-red-900 rounded-xl px-5 py-4"
          />

          <button
            onClick={login}
            disabled={loading}
            className="w-full bg-red-600 py-4 rounded-full font-bold hover:bg-red-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </div>

        <p className="mt-6 text-gray-400 text-center">
          Don't have an account?

          <Link
            href="/signup"
            className="text-red-500 ml-2"
          >
            Create Account
          </Link>
        </p>

      </section>
    </main>
  );
}