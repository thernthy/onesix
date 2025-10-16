// components/CategorySection.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold text-white mb-8">Shop by Category</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <Link key={c} href={`/categories/${c}`} className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] hover:bg-red-700 transition">
            <div className="p-10 flex items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-white capitalize group-hover:scale-105 transition-transform">{c}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
