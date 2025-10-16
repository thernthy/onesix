// app/categories/page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="pt-24 container mx-auto px-6">
      <h1 className="text-2xl font-bold mb-8 text-white">All Categories</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <Link
            key={c}
            href={`/categories/${c}`}
            className="bg-[#111] hover:bg-red-700 transition rounded-lg flex items-center justify-center py-12 text-lg font-semibold capitalize text-white"
          >
            {c}
          </Link>
        ))}
      </div>
    </div>
  );
}
