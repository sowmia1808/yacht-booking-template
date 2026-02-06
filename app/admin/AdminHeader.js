"use client";

import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin-logout", {
      method: "POST",
    });

    router.push("/admin-login");
  }

  return (
    <header className="bg-black/90 backdrop-blur border-b border-gold/40 px-6 py-4 flex justify-between items-center mt-5">
      {/* Left */}
      <h1 className="text-gold text-lg font-semibold tracking-wide">
        Admin Panel
      </h1>

      {/* Right */}
      <button
        onClick={handleLogout}
        className="border border-gold text-gold px-5 py-2 rounded hover:bg-gold hover:text-black transition font-medium"
      >
        Logout
      </button>
    </header>
  );
}
