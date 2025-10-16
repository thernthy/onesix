// components/FeaturedProducts.tsx
"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">Featured Products</h2>
        <a href="/products" className="text-red-500 hover:text-red-400">View All →</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
