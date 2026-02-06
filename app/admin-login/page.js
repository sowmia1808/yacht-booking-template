"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand px-4">
      {/* LOGIN CARD */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm glass-card p-8 rounded-2xl border border-gold/30"
      >
        <h1 className="text-2xl font-semibold text-brand text-center mb-6">
          Admin Login
        </h1>

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand placeholder-gray-400 focus:outline-none focus:border-gold"
        />

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-3">{error}</p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full mt-6 bg-gold hover-gold text-black py-3 rounded-lg font-medium transition"
        >
          Login
        </button>

        {/* FOOT NOTE */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Authorized access only
        </p>
      </form>
    </div>
  );
}
