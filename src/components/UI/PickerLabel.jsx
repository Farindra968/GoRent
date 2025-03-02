import React from "react";
import { GoDotFill } from "react-icons/go";

const PickerLabel = ({ label }) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <p className="w-5 h-5 rounded-full flex  justify-center items-center bg-primary-300 text-primary-500">
        <GoDotFill />
      </p>
      <p className="font-Poppins-Medium">{label}</p>
    </div>
  );
};

export default PickerLabel;
