"use client";

import windbnbIcon from "../../../public/WindbnbIcon.png";
import { Filters, useMyContext } from "@/app/utils/context/Context";
import theme from "@/app/utils/styles/theme";
import { FinlandLocations } from "@/app/utils/types/registered_locations";
import Image from "next/image";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import FilterMenu from "./FilterMenu";

const Header = () => {
  const {
    currentGuests,
    currentLocation,
  } = useMyContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const styleLocationFilter = `w-[45%] flex items-center justify-center ${
    currentLocation ? `text-[#333333]` : `text-[#BDBDBD]`
  }`;

  const styleGuestsFilter = `w-[45%] flex items-center justify-center text-[${
    currentGuests ? theme.colors.black_primary : theme.colors.placeholders
  }]`;

  return (
    <>
      <div className="bg-white w-full z-10 top-0 flex flex-col justify-around items-center sm:flex-row">
        {/* Title */}
        <div className={`text-[#EB5757] w-full mt-[10px] mb-[22px]`}>
          <div className="flex justify-start h-5">
            <Image src={windbnbIcon} alt="icon" className=" w-auto" />
            <p className="font-bold text-sm leading-5 ml-2">Windbnb</p>
          </div>
        </div>
        {/* Filters */}
        <div
          className="h-14 w-[18.75em] shadow-md flex rounded-2xl border-[#F2F2F2] border sm:w-full sm:max-w-xs"
          onClick={openMenu}
        >
          <button className={styleLocationFilter}>
            {currentLocation ? currentLocation : "Add location"}
          </button>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <button className={styleGuestsFilter}>
            {currentGuests ? `${currentGuests} guests` : "Add guests"}
          </button>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <button className="w-[20%] p-4">
            <FaMagnifyingGlass
              color={theme.colors.primary}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
      <FilterMenu
        closeMenu={closeMenu}
        menuOpen={menuOpen}
        openMenu={openMenu}
      />
    </>
  );
};

export default Header;
