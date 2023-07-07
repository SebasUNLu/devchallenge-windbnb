"use client";

import { Filters, useMyContext } from "@/app/utils/context/Context";
import theme from "@/app/utils/styles/theme";
import Property from "@/app/utils/types/property";
import { FinlandLocations } from "@/app/utils/types/registered_locations";
import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";

const PropertyPage = () => {
  const { properties, applyFilter, resetFilter } = useMyContext();

  const filterTest: Filters = {
    adults: 5,
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
    <div className="w-full">
      <div className="my-4 font-bold text-lg w-full flex justify-between">
        <h1>Stays in Finland</h1>
        <p className="font-medium text-sm text-[#4F4F4F] self-center">
          {properties.length} stays
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-around gap-x-8">
        {!properties.length ? (
          <div>No se encontraron resultados</div>
        ) : (
          properties.map(
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
                  key={`property_card_${index}`}
                />
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default PropertyPage;

const PropertyCard = ({
  apartmentType,
  image,
  stars,
  super_host,
  title,
}: Property) => {
  return (
    <div className="w-full my-4 max-w-sm cursor-pointer transition-all duration-200 rounded-3xl hover:scale-105">
      <Image src={image} alt={`property_image`} className="rounded-3xl" />
      <div className="w-full flex justify-between items-center my-2">
        {super_host && (
          <p className="text-[10px] font-bold text-[#4F4F4F] border border-[#4F4F4F] rounded-2xl px-2 py-1 leading-3">
            Super Host
          </p>
        )}
        <p className="font-sans text-xs text-[#828282]">{apartmentType}</p>
        <div className="flex items-center">
          <div className="w-[20px]">
            <IoIosStar className="w-full h-full" color={theme.colors.primary} />
          </div>
          <p className="text-xs">{stars}</p>
        </div>
      </div>
      <div className="w-full font-semibold text-sm">{title}</div>
    </div>
  );
};
