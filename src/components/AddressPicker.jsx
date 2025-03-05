import React from "react";
import Container from "./UI/Container";
import PickerLabel from "./UI/PickerLabel";
import LocationPicker from "./UI/Label";
import Label from "./UI/Label";
import { FaExchangeAlt } from "react-icons/fa";

const AddressPicker = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4 px-4 md:px-0 py-6 relative">
      <Container>
        <PickerLabel label="Pick-Up" />
        <div className="py-4 flex justify-start items-center">
          <div className=" border-r border-secondary-200 px-2">
            <Label htmlFor="pickup-location" label="Locations" />
            <select
              id="dropoff-location"
              className="w-full focus:outline-none font-Poppins text-secondary-400 "
            >
              <option className="text-gray-500" disabled selected>
                Select your city
              </option>
              <option className="bg-gray-100 text-black">Kathmandu</option>
              <option className="bg-gray-100 text-black">Pokhara</option>
              <option className="bg-gray-100 text-black">Lalitpur</option>
              <option className="bg-gray-100 text-black">Bhaktapur</option>
              <option className="bg-gray-100 text-black">Dharan</option>
              <option className="bg-gray-100 text-black">Itahari</option>
            </select>
          </div>
          <div className=" border-r border-secondary-200 px-3 relative">
            <Label htmlFor="pickup-date" label="Date" />
            <input
              type="date"
              className="appearance-none bg-white  text-secondary-500 w-full focus:outline-none  "
            />
          </div>
          <div className="  px-3">
            <Label htmlFor="pickup-time" label="Time" />
            <input
              type="time"
              id="pickup-time"
              className="w-full focus:outline-none font-Poppins text-secondary-400"
            />
          </div>
        </div>
      </Container>
      <button className="bg-primary-500 w-14 h-14 shadow-lg shadow-primary-300 rounded-xl flex justify-center items-center text-primary-0 text-xl absolute">
        <FaExchangeAlt className="rotate-90" />
      </button>
      <Container>
        <PickerLabel label="Drop-Off" />
        <div className="py-4 flex justify-start items-center">
          <div className=" border-r border-secondary-200 px-2">
            <Label htmlFor="dropoff-location" label="Locations" />
            <select
              id="dropoff-location"
              className="w-full focus:outline-none font-Poppins text-secondary-400 "
            >
              <option className="text-gray-500" disabled selected>
                Select your city
              </option>
              <option className="bg-gray-100 text-black">Kathmandu</option>
              <option className="bg-gray-100 text-black">Pokhara</option>
              <option className="bg-gray-100 text-black">Lalitpur</option>
              <option className="bg-gray-100 text-black">Bhaktapur</option>
              <option className="bg-gray-100 text-black">Dharan</option>
              <option className="bg-gray-100 text-black">Itahari</option>
            </select>
          </div>
          <div className=" border-r border-secondary-200 px-3">
            <Label htmlFor="dropoff-date" label="Date" />
            <input
              type="date"
              id="dropoff-date"
              className="w-full focus:outline-none font-Poppins text-secondary-400"
            />
          </div>
          <div className=" px-3">
            <Label htmlFor="dropoff-time" label="Time" />
            <input
              type="time"
              id="dropoff-time"
              className="w-full focus:outline-none font-Poppins text-secondary-400"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AddressPicker;
