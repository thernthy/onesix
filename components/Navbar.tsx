
"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-red-700/40">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-red-500">OneSix</Link>
        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/account"><User className="w-5 h-5" /></Link>
          <Link href="/cart"><ShoppingCart className="w-5 h-5" /></Link>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-black border-t border-red-700/40">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>
            <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
            <Link href="/account" onClick={() => setOpen(false)}>Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
