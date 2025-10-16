// app/products/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return <div className="flex justify-center items-center h-[60vh] text-red-500">Loading...</div>;

  return (
    <div className="pt-24 container mx-auto px-6 text-white">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-lg border border-red-900/30 bg-[#111] object-contain h-[400px] p-6"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-300 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-red-500 mb-6">${product.price}</p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
