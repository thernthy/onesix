// app/products/page.tsx
"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  const handleFilter = (min: number, max: number) => {
    const res = products.filter(
      (p) => p.price >= min && p.price <= max
    );
    setFiltered(res);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-500">
        Loading products...
      </div>
    );

  return (
    <div className="pt-24 container mx-auto px-6 flex flex-col md:flex-row gap-8">
      <aside className="md:w-1/4">
        <FilterSidebar onFilter={handleFilter} />
      </aside>
      <section className="flex-1">
        <h1 className="text-2xl font-bold mb-6 text-white">All Products</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
