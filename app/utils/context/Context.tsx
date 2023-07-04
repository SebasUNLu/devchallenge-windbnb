"use client";

import { createContext, useState, useContext, PropsWithChildren } from "react";
import Property from "../types/property";
import MOCK_VALUES from "../mock/Values";

export interface Filters {
  location?: string;
  adults: number;
  children: number;
}

interface ContextProps {
  properties: Property[];
  applyFilter: (filters: Filters) => void;
  resetFilter: () => void;
}

const MyContext = createContext<ContextProps>({
  properties: [],
  applyFilter: () => {},
  resetFilter: () => {},
});

const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [properties, setProperties] = useState<Property[]>(MOCK_VALUES);

  const applyFilters = (filters: Filters) => {
    let propToFilter = MOCK_VALUES.filter(({ location, guests }) => {
      const { adults, childrens } = guests;
      if (filters.location && filters.location !== location) return false;
      if (filters.adults > adults || filters.children > childrens) return false;
      return true;
    });
    setProperties(propToFilter)
  };

  const resetFilter = () => {
    setProperties(MOCK_VALUES)
  }

  return (
    <MyContext.Provider
      value={{ properties: properties, applyFilter: applyFilters, resetFilter: resetFilter }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;

export const useMyContext = () => useContext(MyContext);
