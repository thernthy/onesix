// app/page.tsx
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroBanner />
      <section className="py-10 bg-[#0b0b0b]">
        <FeaturedProducts />
      </section>
      <section className="py-10 bg-[#111]">
        <CategorySection />
      </section>
      <Newsletter />
    </div>
  );
}
