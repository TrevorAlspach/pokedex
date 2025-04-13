'use client';

import React, { createContext, useContext, useReducer } from "react";
import filterReducer, { initialState } from "@/_reducers/filterReducer";

const FilterContext = createContext<any>(null);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};