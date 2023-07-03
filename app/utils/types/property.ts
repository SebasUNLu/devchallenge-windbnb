import { Apartment_Types } from "./apartment_types";
import { FinlandLocations } from "./registered_locations";

type Property = {
  image: string;
  title: string;
  apartmentType: Apartment_Types;
  stars: number;
  location: FinlandLocations;
  guests: {
    adults: number;
    childrens: number;
  }
}

const apartment: Property = {
  apartmentType: Apartment_Types.PrivateRoom,
  title: "",
  image: "",
  stars: 1.2,
  guests: {
    adults: 2,
    childrens: 0
  },
  location: FinlandLocations.Turku
}