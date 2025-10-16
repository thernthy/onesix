// app/account/register/page.tsx
"use client";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="pt-24 container mx-auto px-6 max-w-md text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
      <form className="bg-[#111] border border-red-800/40 rounded-lg p-6 space-y-4">
        <input type="text" placeholder="Full Name" className="w-full bg-black p-3 rounded" />
        <input type="email" placeholder="Email" className="w-full bg-black p-3 rounded" />
        <input type="password" placeholder="Password" className="w-full bg-black p-3 rounded" />
        <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">Register</button>
      </form>
      <p className="text-center mt-4 text-gray-400">
        Already have an account? <Link href="/account/login" className="text-red-500">Login</Link>
      </p>
    </div>
  );
}
