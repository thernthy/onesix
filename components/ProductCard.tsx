// components/ProductCard.tsx
"use client";
export default function ProductCard({ product }: any) {
  return (
    <div className="bg-[#111] border border-red-900/30 rounded-lg p-4 flex flex-col hover:scale-[1.02] transition-transform">
      <div className="aspect-square overflow-hidden rounded-md mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-white text-sm line-clamp-2 mb-2">{product.title}</h3>
      <p className="text-red-500 font-bold mb-4">${product.price}</p>
      <button className="mt-auto bg-red-600 hover:bg-red-700 py-2 rounded text-white font-medium">
        Add to Cart
      </button>
    </div>
  );
}
