import { StaticImageData } from "next/image";
import Apartment_Types from "./apartment_types";
import { FinlandLocations } from "./registered_locations";

type Property = {
  image: StaticImageData;
  title: string;
  apartmentType: Apartment_Types;
  stars: number;
  location: FinlandLocations;
  guests: {
    adults: number;
    childrens: number;
  },
  super_host: boolean
}

export default Property