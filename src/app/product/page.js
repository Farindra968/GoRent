import AddressPicker from "@/components/AddressPicker";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import Button from "@/components/UI/Button";
import Title from "@/components/UI/Title";
import React from "react";

const page = () => {
  return (
    <section className="flex gap-6">
      <div className="w-80 h-svh bg-primary-0">
        <ProductFilter/>
      </div>
      <div className="bg-secondary-100 px-4">
        <AddressPicker />
        <div className="max-w-screen-xl mx-auto  pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
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
            <Button label="Show more car" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
