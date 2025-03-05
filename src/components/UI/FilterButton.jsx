'use client'

import React from "react";
import { toggleFilterSidebar } from "@/redux/filterSidebarSlice/filterSidebarSlice";
import { VscSettings } from "react-icons/vsc";
import { useDispatch } from "react-redux";

const FilterButton = () => {
  const dispatch = useDispatch();
  function toggleSidebar() {
    dispatch(toggleFilterSidebar());
  }
  return (
    <button
      onClick={toggleSidebar}
      className="text-xl bg-primary-500 p-2 rounded-md shadow-md shadow-primary-300 text-primary-0"
    >
      <VscSettings />
    </button>
  );
};

export default FilterButton;
