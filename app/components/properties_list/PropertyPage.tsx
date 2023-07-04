"use client";

import { Filters, useMyContext } from "@/app/utils/context/Context";
import Property from "@/app/utils/types/property";
import { FinlandLocations } from "@/app/utils/types/registered_locations";
import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";

const PropertyPage = () => {
  const { properties, applyFilter, resetFilter } = useMyContext();

  const filterTest: Filters = {
    adults: 2,
    location: FinlandLocations.Oulu,
    children: 0,
  };

  const filtrar = () => {
    applyFilter(filterTest);
  };

  const reset = () => {
    resetFilter();
  };

  return (
    <div className="w-full p-4">
      <div className="my-4">
        <button onClick={filtrar}>Filtrar</button>
        <button onClick={reset}>Reiniciar</button>
      </div>
      <div className="w-full flex flex-wrap justify-around gap-8">
        {properties.map(
          (
            {
              title,
              guests,
              location,
              apartmentType,
              image,
              stars,
              super_host,
            },
            index
          ) => {
            return (
              <PropertyCard
                apartmentType={apartmentType}
                guests={guests}
                image={image}
                location={location}
                stars={stars}
                super_host={super_host}
                title={title}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default PropertyPage;

const PropertyCard = ({
  apartmentType,
  guests,
  image,
  location,
  stars,
  super_host,
  title,
}: Property) => {
  return (
    <div className="w-full my-4 max-w-sm cursor-pointer">
      <Image src={image} alt={`property_image`} className="rounded-3xl" />
      <div className="w-full flex justify-between items-center">
        {super_host && <p className="text-[10px]">Super Host</p>}
        <p className="font-sans text-xs text-[#828282]">{title}</p>
        <div className="flex items-center">
          <div className="w-[20px]">
            <IoIosStar className="w-full h-full" />
          </div>
          <p className="text-xs">{stars}</p>
        </div>
      </div>
      <div className="w-full">{title}</div>
    </div>
  );
};
