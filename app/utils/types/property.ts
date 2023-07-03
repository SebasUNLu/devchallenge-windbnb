import { title } from "process";

enum Apartment_Types {
  PrivateRoom = "Private Room",
  EntireHouse = "Entire House",
  EntireApartment2Beds = "Entire Apartment, 2 beds",
}

enum FinlandLocations {
  Helsinki = "Helsinki, Finland",
  Turku = "Turku, Finland",
  Oulu = "Oulu, Finland",
  Vaasa = "Vaasa. Finland",
}

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