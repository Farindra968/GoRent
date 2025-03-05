"use client";
import { HIDE_PRODUCTFILTER } from "@/constant/switcher";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductFilter = () => {
  const type = [
    {
      label: "Sport",
      value: 10,
    },
    {
      label: "SUV",
      value: 12,
    },
    {
      label: "MPV",
      value: 16,
    },
    {
      label: "Sedan",
      value: 20,
    },
    {
      label: "Coupe",
      value: 14,
    },
    {
      label: "Hatchback",
      value: 14,
    },
  ];
  const capacity = [
    {
      person: "2 Person",
      value: 10,
    },
    {
      person: "4 Person",
      value: 14,
    },
    {
      person: "6 Person",
      value: 12,
    },
    {
      person: "8 or More",
      value: 16,
    },
  ];

  const { productSidebar } = useSelector((state) => state.filterSidebar)

  return (
    <div className={`${productSidebar === HIDE_PRODUCTFILTER ? "w-80 hidden lg:block z-30 h-full bg-primary-0 p-6 " : " hidden"}`}>
      <h4 className="font-Poppins-SemiBold text-xl text-secondary-500">
        Filter
      </h4>
      <div className="py-4">
        <label className="font-Poppins text-secondary-400">Type</label>
        {type.map((type, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-2  font-Poppins-Medium py-1 text-secondary-400"
          >
            <input type="checkbox" className="appearance-none w-5 h-5 flex justify-center items-center text-sm rounded-md border border-primary-500 checked:bg-primary-500 checked:text-white checked:before:content-['✔']" />
            <p>
              {type.label}
              <span className="text-secondary-300"> ({type.value})</span>
            </p>
          </div>
        ))}
      </div>
      <div className="py-4">
        <label className="font-Poppins text-secondary-400">Capacity</label>
        {capacity.map((person, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-2 font-Poppins-Medium py-1 text-secondary-400"
          >
                <input type="checkbox" className="appearance-none w-5 h-5 flex justify-center items-center text-sm rounded-md border border-primary-500 checked:bg-primary-500 checked:text-white checked:before:content-['✔']" />
            <p>
              {person.person}
              <span className="text-secondary-300"> ({person.value})</span>
            </p>
          </div>
        ))}
      </div>
      <div className="py-4">
        <label className="font-Poppins text-secondary-400">Price</label>
        <div className="flex justify-start items-center gap-2 font-Poppins-Medium py-1 text-secondary-400">
          <input
            type="range"
            className="w-full appearance-none bg-primary-200 rounded-lg h-1 cursor-pointer 
"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
