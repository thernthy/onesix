// components/Footer.tsx
"use client";
import { useEffect, useState } from "react";
export default function Footer() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null; // render nothing until client mounts

  return (
    <footer className="bg-black border-t border-red-800/30 mt-12">
      <div className="container mx-auto py-10 px-6 grid md:grid-cols-3 gap-8 text-gray-400">
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">OneSix</h2>
          <p>Cutting-edge tech and premium accessories for every lifestyle.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/products">Products</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/account">My Account</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Subscribe</h3>
          <form className="flex">
               <input
                type="email"
                placeholder="Email address"
                className="p-2 rounded-l bg-gray-800 text-white w-full focus:outline-none"
              />
            <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 rounded-r text-white">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-500 border-t border-red-800/30">
        © {new Date().getFullYear()} OneSix. All rights reserved.
      </div>
    </footer>
  );
}
