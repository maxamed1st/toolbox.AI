'use client'
import { createContext, useState } from "react";

export const sortContext = createContext();

export const SortContextProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState("title");
  //update context from consumers
  const updateContext = value => {
    setSortBy(value);
  }

  return (
    <sortContext.Provider value={{ sortBy, updateContext }}>
      {children}
    </sortContext.Provider>
  );
};
