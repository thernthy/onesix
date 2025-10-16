// app/checkout/page.tsx
"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 text-center text-white">
        <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-400">Thank you for your purchase 🎉</p>
      </div>
    );
  }

  return (
    <div className="pt-24 container mx-auto px-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input type="text" required className="w-full bg-[#111] border border-red-800/40 rounded p-2" />

          <label className="block mb-2 font-medium mt-4">Email</label>
          <input type="email" required className="w-full bg-[#111] border border-red-800/40 rounded p-2" />

          <label className="block mb-2 font-medium mt-4">Address</label>
          <input type="text" required className="w-full bg-[#111] border border-red-800/40 rounded p-2" />
        </div>

        <div>
          <label className="block mb-2 font-medium">Card Number</label>
          <input type="text" required className="w-full bg-[#111] border border-red-800/40 rounded p-2" />

          <label className="block mb-2 font-medium mt-4">Expiry</label>
          <input type="text" required className="w-full bg-[#111] border border-red-800/40 rounded p-2" />

          <label className="block mb-2 font-medium mt-4">CVC</label>
          <input type="text" required className="w-full bg-[#111] border border-red-800/40 rounded p-2" />
        </div>

        <button
          type="submit"
          className="col-span-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
