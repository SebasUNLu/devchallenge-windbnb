"use client";

import { createContext, useState, useContext, PropsWithChildren } from "react";
import Property from "../types/property";
import MOCK_VALUES from "../mock/Values";

interface Filters {
  apertmentType: string;
  adults: number;
  children: number;
}

interface ContextProps {
  properties: Property[];
  applyFilter: (filters: Filters) => void;
}

const MyContext = createContext<ContextProps>({
  applyFilter: () => {},
  properties: [],
});

//  const ContextProvider: React.FC = ({
//   children,
// }: PropsWithChildren<{}>) => {
const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [properties, setProperties] = useState<Property[]>([]);

  const applyFilters = (filters: Filters) => {
    console.log("Filtros aplicados!!");
  };

  return (
    <MyContext.Provider
      value={{ properties: properties, applyFilter: applyFilters }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;

export const useMyContext = () => useContext(MyContext);
