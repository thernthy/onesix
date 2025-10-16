// app/cart/page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="pt-24 container mx-auto px-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-red-800/30 pb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-red-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8 border-t border-red-900/40 pt-6">
            <p className="text-xl font-bold">Total: ${total}</p>
            <Link
              href="/checkout"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
