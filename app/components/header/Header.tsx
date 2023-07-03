"use client";

import theme from "@/app/utils/styles/theme";
import React, { useState } from "react";
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className="bg-white w-full h-20 fixed z-30 top-0 flex justify-around items-center">
        <div className={`text-[#EB5757]`}>Windbnb</div>
        <div className="h-14 w-[18.75em] shadow-md flex rounded-2xl border-[#F2F2F2] border">
          <div className="w-[45%] flex items-center justify-center">Location</div>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <div className="w-[35%] flex items-center justify-center">guests</div>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <div className="w-[20%] p-4">
            <FaMagnifyingGlass color={theme.colors.primary} className="w-full h-full" />
          </div>
        </div>
      </div>
      <div
        className={`fixed z-20 ${
          menuOpen ? "top-20" : "-top-[20em]"
        } w-full h-[50%] bg-green-800 transition-all duration-200`}
      ></div>
      <div
        className={`fixed z-10 top-20 left-0 h-full ${
          menuOpen ? "top-20" : "-top-[40em]"
        } w-full bg-[#4F4F4F66] transition-all duration-100`}
      ></div>
    </>
  );
};

export default Header;
