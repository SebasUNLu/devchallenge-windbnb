import Property from "../types/property";
import Apartment_Types from "../types/apartment_types";
import { FinlandLocations } from "../types/registered_locations";

import AP1 from '../../../public/AP1.png'
import AP2 from '../../../public/AP2.png'
import AP3 from '../../../public/AP3.png'
import AP4 from '../../../public/AP4.png'
import AP5 from '../../../public/AP5.png'
import AP6 from '../../../public/AP6.png'

const MOCK_VALUES: Property[] = [
  {
    apartmentType: Apartment_Types.EntireApartment2Beds,
    guests: {
      adults: 2,
      childrens: 2,
    },
    image: AP1,
    location: FinlandLocations.Oulu,
    stars: 4.40,
    title: 'Stylist apartment in center of the city',
    super_host: true
  },
  {
    apartmentType: Apartment_Types.PrivateRoom,
    guests: {
      adults: 2,
      childrens: 0,
    },
    image: AP2,
    location: FinlandLocations.Helsinki,
    stars: 4.25,
    title: 'Cozy, peaceful and private room with...',
    super_host: false
  },
  {
    apartmentType: Apartment_Types.EntireHouse,
    guests: {
      adults: 2,
      childrens: 2,
    },
    image: AP3,
    location: FinlandLocations.Turku,
    stars: 4.96,
    title: 'Mordern House in a remote area',
    super_host: false
  },
  {
    apartmentType: Apartment_Types.EntireApartment2Beds,
    guests: {
      adults: 2,
      childrens: 2,
    },
    image: AP4,
    location: FinlandLocations.Vaasa,
    stars: 4.85,
    title: 'Stylist room in design district ',
    super_host: true
  },
  {
    apartmentType: Apartment_Types.PrivateRoom,
    guests: {
      adults: 2,
      childrens: 0,
    },
    image: AP5,
    location: FinlandLocations.Oulu,
    stars: 4.54,
    title: 'Modern apartment close to nature',
    super_host: false
  },
  {
    apartmentType: Apartment_Types.EntireHouse,
    guests: {
      adults: 2,
      childrens: 2,
    },
    image: AP6,
    location: FinlandLocations.Helsinki,
    stars: 4.64,
    title: 'House in a remote area',
    super_host: false
  },
]

export default MOCK_VALUES