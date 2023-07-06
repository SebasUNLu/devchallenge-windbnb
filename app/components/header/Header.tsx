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
  // const setAdults = (adults: number) => {
  //   setFilters((prev) => ({ ...prev, adults: adults }));
  // };

  // const setChildren = (children: number) => {
  //   setFilters((prev) => ({ ...prev, children: children }));
  // };

  const decreaseAdults = () => {
    const currentAdults = filters.adults;
    console.log(currentAdults);
    currentAdults >= 0 && setFilters(prev => ({...prev, adults: currentAdults - 1}))
  };

  const increaseAdults = () => {
    const currentAdults = filters.adults;
    console.log(currentAdults);
    setFilters(prev => ({...prev, adults: currentAdults + 1}))
  };

  const decreaseChildren = () => {
    const currentChildren = filters.children;
    console.log(currentChildren);
    currentChildren >= 0 && setFilters(prev => ({...prev, children: currentChildren - 1}))
  };

  const increaseChildren = () => {
    const currentChildren = filters.children;
    console.log(currentChildren);
    setFilters(prev => ({...prev, children: currentChildren + 1}))
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

  return (
    <>
      <div className="bg-white w-full z-10 top-0 flex flex-col justify-around items-center">
        <div className={`text-[#EB5757] w-full mt-[10px] mb-[22px]`}>
          <div className="flex justify-start h-5">
            <Image src={windbnbIcon} alt="icon" className=" w-auto" />
            <p className="font-bold text-sm leading-5 ml-2">Windbnb</p>
          </div>
        </div>
        <div className="h-14 w-[18.75em] shadow-md flex rounded-2xl border-[#F2F2F2] border">
          <button className="w-[45%] flex items-center justify-center">
            {currentLocation ? currentLocation : "Add location"}
          </button>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <button className="w-[35%] flex items-center justify-center">
            {currentGuests ? currentGuests : "Add guests"}
          </button>
          <div className="border-l-2 border-[#F2F2F2]"></div>
          <button className="w-[20%] p-4" onClick={openMenu}>
            <FaMagnifyingGlass
              color={theme.colors.primary}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
      <div
        className={`fixed ${
          menuOpen ? "top-0" : "top-full"
        } left-0 w-full bg-white h-full z-20 transition-all duration-300`}
      >
        {/* title y close button */}
        <div className="w-full flex justify-between px-3 mt-4">
          <p className="font-bold text-xs leading-4 self-center">
            Edit your search
          </p>
          <div className="w-6 h-6 cursor-pointer" onClick={closeMenu}>
            <RxCross2 className="w-full h-full" />
          </div>
        </div>
        {/* Filter options */}
        <div className="w-full border border-black border-solid rounded-xl">
          <div className="flex flex-col">
            <div>Location</div>
            <div>Add location</div>
          </div>
          <div>
            <div>Guests</div>
            <div>Add guests</div>
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
              <p>Adults:</p>
              <div>
                <button onClick={decreaseAdults}>-</button>
                {filters.adults}
                <button onClick={increaseAdults}>+</button>
              </div>
            </div>
            {/* children */}
            <div className="">
              <p>Children:</p>
              <div>
                <button onClick={decreaseChildren}>-</button>
                {filters.children}
                <button onClick={increaseChildren}>+</button>
              </div>
            </div>
          </div>
          {/* search button */}
          <div className="">
            <button onClick={handleSearch}>search</button>
          </div>
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
  return (
    <div
      className="w-full flex my-2"
      onClick={() => applyLocationFilter(locationName)}
    >
      <div className="w-6 h-6">
        <FaMapMarkerAlt className="w-full h-full" />
      </div>
      <p className="">{locationName}</p>
    </div>
  );
};
