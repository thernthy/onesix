// app/categories/[slug]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export default function CategoryProducts() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${slug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [slug]);

  return (
    <div className="pt-24 container mx-auto px-6 text-white">
      <h1 className="text-2xl font-bold mb-8 capitalize">{slug} Products</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
