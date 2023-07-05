"use client";

import windbnbIcon from "../../../public/WindbnbIcon.png";
import { useMyContext } from "@/app/utils/context/Context";
import theme from "@/app/utils/styles/theme";
import { FinlandLocations } from "@/app/utils/types/registered_locations";
import Image from "next/image";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const FinlandKeys = Object.keys(FinlandLocations) as Array<
  keyof typeof FinlandLocations
>;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { applyFilter } = useMyContext();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className="bg-white w-full z-30 top-0 flex flex-col justify-around items-center">
        <div className={`text-[#EB5757] w-full mt-[10px] mb-[22px]`}>
          <div className="flex justify-start h-5">
            <Image src={windbnbIcon} alt="icon" className=" w-auto" />
            <p className="font-bold text-sm leading-5 ml-2">Windbnb</p>
          </div>
        </div>
        <div className="h-14 w-[18.75em] shadow-md flex rounded-2xl border-[#F2F2F2] border">
          <button className="w-[45%] flex items-center justify-center">
            Location
          </button>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <button className="w-[35%] flex items-center justify-center">
            guests
          </button>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <button
            className="w-[20%] p-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaMagnifyingGlass
              color={theme.colors.primary}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
      <div
        className={`fixed z-20 ${
          menuOpen ? "top-20" : "-top-[20em]"
        } w-full h-[50%] bg-green-800 transition-all duration-200`}
      >
        <div>{/* input of locations */}</div>
      </div>
      <div
        className={`fixed z-10 left-0 ${
          menuOpen ? "h-full" : "h-0"
        } w-full bg-[#4F4F4F66] transition-all duration-100`}
      ></div>
    </>
  );
};

export default Header;
