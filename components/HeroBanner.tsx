// components/HeroBanner.tsx
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-[#e50914] to-[#700000] text-white py-20 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Premium Tech</h1>
          <p className="text-lg text-gray-200 mb-6">
            Unleash the power of cutting-edge technology with our curated collection.
          </p>
          <div className="flex gap-4">
            <Link href="/products" className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100">
              Shop Now
            </Link>
            <Link href="/categories" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
              Explore Categories
            </Link>
          </div>
        </div>
        <img
          src="/hero.jpg"
          alt="Tech Workspace"
          className="mt-8 md:mt-0 w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
