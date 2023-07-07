import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import theme from "@/app/utils/styles/theme";
import { FinlandLocations } from "@/app/utils/types/registered_locations";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Filters, useMyContext } from "@/app/utils/context/Context";
import { FaMagnifyingGlass } from "react-icons/fa6";

const finlandLocationsKeys = Object.keys(FinlandLocations) as Array<
  keyof typeof FinlandLocations
>;

interface FilterMenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}

/* Menu de filtros */
const FilterMenu = ({ menuOpen, closeMenu, openMenu }: FilterMenuProps) => {
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

  const totalGuests = filters.adults + filters.children;

  const decreaseAdults = () => {
    const currentAdults = filters.adults;
    currentAdults > 0 &&
      setFilters((prev) => ({ ...prev, adults: currentAdults - 1 }));
  };

  const increaseAdults = () => {
    const currentAdults = filters.adults;
    setFilters((prev) => ({ ...prev, adults: currentAdults + 1 }));
  };

  const decreaseChildren = () => {
    const currentChildren = filters.children;
    currentChildren > 0 &&
      setFilters((prev) => ({ ...prev, children: currentChildren - 1 }));
  };

  const increaseChildren = () => {
    const currentChildren = filters.children;
    setFilters((prev) => ({ ...prev, children: currentChildren + 1 }));
  };

  const setLocation = (location: string) => {
    setFilters((prev) => ({ ...prev, location: location }));
  };

  const handleSearch = () => {
    applyFilter(filters);
    closeMenu();
  };

  const buttonGuestsStyles = `w-6 h-6 border-2 border-solid border-[${theme.colors.black_third}] text-[${theme.colors.black_third}] rounded-sm leading-none`;

  return (
    <>
      <div
        className={`fixed ${
          menuOpen ? "top-0" : "top-full"
        } left-0 w-full bg-white h-[90%] z-20 transition-all duration-300 p-3`}
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
        <div
          className={`w-full border border-solid rounded-2xl border-[#F2F2F2] shadow-md`}
        >
          {/* Location Filter */}
          <div className="flex flex-col px-6 py-3 relative">
            <div
              className={`text-[${theme.colors.black_primary}] text-[9px] font-bold`}
            >
              LOCATION
            </div>
            <div
              className={`text-[${
                filters.location
                  ? theme.colors.black_primary
                  : theme.colors.placeholders
              }] font-normal text-sm`}
            >
              {filters.location ? filters.location : "Add location"}
            </div>
            {filters.location && (
              <RxCross2
                className="w-6 h-6 absolute right-3 inset-y-0 my-auto"
                onClick={() => setLocation("")}
              />
            )}
          </div>
          <div className="w-full border-b border-[#F2F2F2] border-solid"></div>
          {/* Guests filter */}
          <div className="flex flex-col px-6 py-3">
            <div
              className={`text-[${theme.colors.black_primary}] text-[9px] font-bold`}
            >
              GUESTS
            </div>
            <p
              className={`text-[${
                totalGuests
                  ? theme.colors.black_primary
                  : theme.colors.placeholders
              }] font-normal text-sm`}
            >
              {totalGuests ? `${totalGuests} guests` : "Add guests"}
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
          <div className="flex justify-evenly">
            {/* adults */}
            <div className="">
              <p className="font-bold text-sm leading-4">Adults:</p>
              <p className="font-normal text-sm leading-4">Ages 13 or above</p>
              <div className="mt-4">
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
            <div className="">
              <p className="font-bold text-sm leading-4">Children:</p>
              <p className="font-normal text-sm leading-4">Age 2 - 12:</p>
              <div className="mt-4">
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
            className={`absolute inset-x-0 max-w-max mx-auto bottom-6 flex px-6 py-4 rounded-2xl bg-[#EB5757]`}
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
      <div
        className={`fixed h-full w-full z-10 bg-[#4F4F4F66] transition-all duration-300
        ${menuOpen ? `top-0` : "top-full"}
      `}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default FilterMenu;

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
      className="w-full flex my-7 ml-6 cursor-pointer"
      onClick={() => applyLocationFilter(locationName)}
    >
      <div className="w-6 h-6">
        <FaMapMarkerAlt className="w-full h-full" />
      </div>
      <p
        className={`ml-3 text-[${theme.colors.black_secondary}] font-normal text-sm`}
      >
        {locationName}
      </p>
    </div>
  );
};
