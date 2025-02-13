"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState(null);
  const [originalArr, setOriginalArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  useEffect(() => {
    setUser("swarup");
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        search,
        setSearch,
        originalArr,
        setOriginalArr,
        filteredArr,
        setFilteredArr,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
