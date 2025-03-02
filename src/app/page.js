import AddressPicker from "@/components/AddressPicker";
import HeroSection from "@/components/home/HeroSection";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";

export default function Home() {
  return (
    <section className="py-6 bg-secondary-100">
      <HeroSection />
      <AddressPicker />
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <Title title="Popular car" href={`/`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 py-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* Recommended Product */}
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <Title title="Recommended car" href={`/`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 py-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center items-center">
        <Button label='Show more car' />
        </div>
      </div>
    </section>
  );
}
