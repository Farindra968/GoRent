import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoMdHeart, IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import profile from "@/assets/images/profile.png";
import React from "react";
import Image from "next/image";
import config from "@/config/config";
import AppName from "../UI/AppName";

const Header = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <section className="flex justify-between items-center p-6 max-w-screen-xl mx-auto">
        <div className="w-full flex justify-start items-center space-x-6">
          {/* website logo */}
          <AppName/>
          <div className="flex items-center  lg:w-1/3 border border-secondary-200 h-auto rounded-xl px-4">
            <CiSearch className="text-2xl text-secondary-400" />
            <input
              type="search"
              id="search-box"
              placeholder="Search here"
              className=" w-full focus:outline-none py-2 mx-6"
            />
            <VscSettings className="text-2xl text-secondary-400" />
          </div>
        </div>
        <div className=" flex justify-end items-center space-x-4 pl-4">
          <button className=" hidden md:flex justify-center items-center border border-seconary-300 text-xl text-secondary-400 h-9 w-9 rounded-full">
            <IoMdHeart />
          </button>
          <button className="flex justify-center items-center border border-seconary-300 text-xl text-secondary-400 h-9 w-9 rounded-full relative">
            <FaBell />
            <p className="bg-error-600 w-3 h-3 rounded-full absolute top-0 right-0"></p>
          </button>
          <button className="hidden md:flex justify-center items-center border border-seconary-300 text-xl text-secondary-400 h-9 w-9 rounded-full">
            <IoMdSettings />
          </button>
          <button className="flex justify-center items-center border border-seconary-300 text-xl text-secondary-400 h-9 w-9 rounded-full">
            <Image src={profile} width={50} height={50} alt="Profile logo" />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
