'use client'

import React, { useState } from "react";
import Container from "../UI/Container";
import { IoMdHeart, IoMdPeople } from "react-icons/io";
import car1 from "@/assets/images/car1.png";
import { BsFuelPumpFill } from "react-icons/bs";
import Image from "next/image";
import { FaCircleNotch } from "react-icons/fa";
import Button from "../UI/Button";

const ProductCard = () => {
  const [showWhistle, setShowWishtle] = useState();
  return (
    <Container>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-Poppins-SemiBold">Koenigsegg</h1>
          <p className="font-Poppins-Medium text-secondary-300">Sport</p>
        </div>
        <button onClick={()=>setShowWishtle(!showWhistle)} className={`text-2xl ${showWhistle? 'text-error-500':'text-secondary-300'}`}>
          <IoMdHeart />
        </button>
      </div>
      <div className="py-4 flex flex-col justify-center items-center aspect-3/2 relative">
        <Image
          src={car1}
          width={400}
          height={200}
          alt="Product1"
          className=""
        />
        <div className="w-full h-14 bg-primary-0 absolute opacity-25 bottom-5"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-Poppins-Medium text-secondary-400 flex justify-start items-center gap-1">
          <BsFuelPumpFill className="text-xl" />
          <p className="text-sm">90 L</p>
        </div>
        <div className="font-Poppins-Medium text-secondary-400 flex justify-start items-center gap-1">
          <FaCircleNotch className="text-xl" />
          <p className="text-sm">Manual</p>
        </div>
        <div className="font-Poppins-Medium text-secondary-400 flex justify-start items-center gap-1">
          <IoMdPeople className="text-xl" />
          <p className="text-sm">2 People</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 py-6 pb-2">
        <div>
          <h1 className="font-Poppins-SemiBold text-xl text-secondary-600">
            $88.00/{" "}
            <span className="font-Poppins-Medium text-sm text-secondary-300">day</span>
          </h1>
          <p className="font-Poppins-Medium text-secondary-300 text-sm line-through">$100.00</p>
              </div>
              <Button label='Rent Now'/>
      </div>
    </Container>
  );
};

export default ProductCard;
