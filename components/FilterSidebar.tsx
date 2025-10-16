// components/FilterSidebar.tsx
"use client";
import { useState } from "react";

export default function FilterSidebar({ onFilter }: { onFilter: (min: number, max: number) => void }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  return (
    <div className="bg-[#111] border border-red-800/40 rounded-lg p-4 text-white">
      <h2 className="text-xl font-semibold mb-4 text-red-500">Filters</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-1/2 bg-black border border-red-800/50 rounded p-2 text-white"
          />
          <input
            type="number"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-1/2 bg-black border border-red-800/50 rounded p-2 text-white"
          />
        </div>
        <button
          className="mt-3 bg-red-600 hover:bg-red-700 w-full py-2 rounded font-medium"
          onClick={() => onFilter(min, max)}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
