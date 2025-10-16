"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-700/40 shadow-[0_2px_15px_rgba(229,9,20,0.15)]">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-red-600 tracking-wider hover:text-red-500 transition-colors"
        >
          OneSix
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/categories">Categories</NavLink>
          <NavLink href="/cart">Cart</NavLink>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center relative mx-6 w-80">
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            className="w-full rounded-full bg-black/60 border border-red-700/40 px-4 py-2 pl-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600 transition"
          />
          <Search className="absolute left-3 text-gray-400 w-4 h-4" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Link href="/account" className="hover:text-red-500 transition-colors">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="hover:text-red-500 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:text-red-500 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-red-700/40 backdrop-blur-md">
          <div className="flex flex-col p-4 space-y-3 text-gray-200 text-sm">
            <NavLink href="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/products" onClick={() => setOpen(false)}>
              Products
            </NavLink>
            <NavLink href="/categories" onClick={() => setOpen(false)}>
              Categories
            </NavLink>
            <NavLink href="/cart" onClick={() => setOpen(false)}>
              Cart
            </NavLink>
            <NavLink href="/account" onClick={() => setOpen(false)}>
              Account
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

/* Custom link with underline animation */
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-gray-300 hover:text-white transition group"
    >
      {children}
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}
