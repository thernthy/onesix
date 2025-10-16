"use client";
import { useEffect, useState } from "react";

export default function Newsletter() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null; // renders nothing until client mount

  return (
    <section className="bg-gradient-to-r from-[#e50914] to-[#700000] text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-100 mb-6">
        Get the latest deals and product launches delivered to your inbox.
      </p>
      <form className="max-w-md mx-auto flex bg-white rounded-lg overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 flex-1 text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black px-6 text-white font-semibold hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
