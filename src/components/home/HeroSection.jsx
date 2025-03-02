import React from "react";
import ads1 from "@/assets/images/ads1.png";
import ads2 from "@/assets/images/ads2.png";
import car1 from "@/assets/images/car1.png";
import car2 from "@/assets/images/car2.png";
import Image from "next/image";
const HeroSection = () => {
  const adsData = [
    {
      title: "The Best Platform for Car Rental",
      desc: "Ease of doing a car rental safely and reliably. Of course at a low price.",
      bg: ads1,
      car: car1,
      color: "bg-primary-500"
    },
    {
      title: "Easy way to rent a car at a low price",
      desc: "Providing cheap car rental services and safe and comfortable facilities.",
      bg: ads2,
        car: car2,
      color: "bg-information-500"
    },
  ];
  return (
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-2">
          {
              adsData.map((ads, index) => (
                <div key={index} className="w-full h-80 rounded-md relative">
                <Image
                  src={ads.bg}
                  width={150}
                  height={100}
                  alt="Ads"
                  className="absolute  h-full w-full object-fill"
                />
                <div className="absolute top-0 left-0 py-6 px-4 leading-4 w-full md:w-1/2">
                  <h1 className="font-Poppins-SemiBold text-2xl text-primary-0  ">
                    {ads.title}
                  </h1>
                  <p className="font-Poppins text-primary-0 py-6 leading-6  ">
                    {ads.desc}
                  </p>
                  <buttom className={`${ads.color} px-4 py-2.5 rounded-md text-primary-0 font-Poppins`}>
                    Rental Car
                  </buttom>
                </div>
                <Image
                  src={ads.car}
                  width={450}
                  height={450}
                  alt="Ads1"
                  className="absolute w-80 bottom-2 right-4 "
                />
              </div>
              ))
          }

    </section>
  );
};

export default HeroSection;
