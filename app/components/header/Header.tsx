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

const FinlandKeys = Object.keys(FinlandLocations) as Array<
  keyof typeof FinlandLocations
>;

const Header = () => {
  const finlandLocationsKeys = Object.keys(FinlandLocations) as Array<
    keyof typeof FinlandLocations
  >;
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    applyFilter,
    currentGuests,
    currentLocation,
    properties,
    resetFilter,
  } = useMyContext();

  const [filters, setFilters] = useState<Filters>({
    adults: 0,
    children: 0,
    location: "",
  });

  const decreaseAdults = () => {
    const currentAdults = filters.adults;
    console.log(currentAdults);
    currentAdults > 0 &&
      setFilters((prev) => ({ ...prev, adults: currentAdults - 1 }));
  };

  const increaseAdults = () => {
    const currentAdults = filters.adults;
    console.log(currentAdults);
    setFilters((prev) => ({ ...prev, adults: currentAdults + 1 }));
  };

  const decreaseChildren = () => {
    const currentChildren = filters.children;
    console.log(currentChildren);
    currentChildren > 0 &&
      setFilters((prev) => ({ ...prev, children: currentChildren - 1 }));
  };

  const increaseChildren = () => {
    const currentChildren = filters.children;
    console.log(currentChildren);
    setFilters((prev) => ({ ...prev, children: currentChildren + 1 }));
  };

  const setLocation = (location: string) => {
    setFilters((prev) => ({ ...prev, location: location }));
  };

  const handleSearch = () => {
    applyFilter(filters);
    closeMenu();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const styleLocationFilter = `w-[45%] flex items-center justify-center text-[${
    currentLocation ? theme.colors.black_primary : theme.colors.placeholders
  }]`;

  const styleGuestsFilter = `w-[45%] flex items-center justify-center text-[${
    currentGuests ? theme.colors.black_primary : theme.colors.placeholders
  }]`;

  const buttonGuestsStyles = `w-6 h-6 border-2 border-solid border-[${theme.colors.black_third}] text-[${theme.colors.black_third}] rounded-sm leading-none`;

  return (
    <>
      <div className="bg-white w-full z-10 top-0 flex flex-col justify-around items-center">
        <div className={`text-[#EB5757] w-full mt-[10px] mb-[22px]`}>
          <div className="flex justify-start h-5">
            <Image src={windbnbIcon} alt="icon" className=" w-auto" />
            <p className="font-bold text-sm leading-5 ml-2">Windbnb</p>
          </div>
        </div>
        <div
          className="h-14 w-[18.75em] shadow-md flex rounded-2xl border-[#F2F2F2] border"
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
      {/* Menu de filtros */}
      <div
        className={`fixed ${
          menuOpen ? "top-0" : "top-full"
        } left-0 w-full bg-white h-full z-20 transition-all duration-300 p-3`}
      >
        {/* title y close button */}
        <div className="w-full flex justify-between mb-3">
          <p className="font-bold text-xs leading-4 self-center">
            Edit your search
          </p>
          <div className="w-6 h-6 cursor-pointer" onClick={closeMenu}>
            <RxCross2 className="w-full h-full" />
          </div>
        </div>

        {/* Filter options */}
        <div className="w-full border border-black border-solid rounded-xl">
          <div className="flex flex-col px-6 py-3">
            <div className={`text-[${theme.colors.black_primary}]`}>
              Location
            </div>
            <div
              className={`text-[${
                currentLocation
                  ? theme.colors.black_primary
                  : theme.colors.placeholders
              }]`}
            >
              {currentLocation ? currentLocation : "Add location"}
            </div>
          </div>
          <div className="w-full border-b border-black border-solid"></div>
          <div className="flex flex-col px-6 py-3">
            <div className={`text-[${theme.colors.black_primary}]`}>Guests</div>
            <p
              className={`text-[${
                currentGuests
                  ? theme.colors.black_primary
                  : theme.colors.placeholders
              }]`}
            >
              {currentGuests ? `${currentGuests} guests` : "Add guests"}
            </p>
          </div>
        </div>

        {/* filters */}
        <div>
          {/* Locations list */}
          <div className="w-full fex flex-col">
            {finlandLocationsKeys.map((loc, index) => (
              <LocationFilterCard
                locationName={FinlandLocations[loc]}
                applyLocationFilter={setLocation}
                key={`Location_${index}`}
              />
            ))}
          </div>
          {/* Guests filter */}
          <div className="">
            {/* adults */}
            <div className="">
              <p className="font-bold text-sm leading-4">Adults:</p>
              <p className="font-normal text-sm leading-4">Ages 13 or above</p>
              <div>
                <button
                  onClick={decreaseAdults}
                  className={`${buttonGuestsStyles} mr-4`}
                >
                  -
                </button>
                {filters.adults}
                <button
                  onClick={increaseAdults}
                  className={`${buttonGuestsStyles} ml-4`}
                >
                  +
                </button>
              </div>
            </div>
            {/* children */}
            <div className="mt-6">
              <p className="font-bold text-sm leading-4">Children:</p>
              <p className="font-normal text-sm leading-4">Age 2 - 12:</p>
              <div>
                <button
                  onClick={decreaseChildren}
                  className={`${buttonGuestsStyles} mr-4`}
                >
                  -
                </button>
                {filters.children}
                <button
                  onClick={increaseChildren}
                  className={`${buttonGuestsStyles} ml-4`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* search button */}
          <button
            onClick={handleSearch}
            className="absolute inset-x-0 max-w-max mx-auto bottom-6 flex bg-green-800 px-6 py-4 rounded-2xl"
          >
            <div className="w-4 h-4">
              <FaMagnifyingGlass className="w-full h-full" color="white" />
            </div>
            <p className="font-bold text-sm leading-4 text-white ml-3">
              Search
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

interface LocationCardProps {
  locationName: string;
  applyLocationFilter: (location: string) => void;
}

const LocationFilterCard = ({
  locationName,
  applyLocationFilter,
}: LocationCardProps) => {
  const locationStyles = `text-[${theme.colors.black_secondary}]`;

  return (
    <div
      className="w-full flex my-7 cursor-pointer"
      onClick={() => applyLocationFilter(locationName)}
    >
      <div className="w-6 h-6">
        <FaMapMarkerAlt className="w-full h-full" />
      </div>
      <p className={`ml-3 ${locationStyles}`}>{locationName}</p>
    </div>
  );
};
