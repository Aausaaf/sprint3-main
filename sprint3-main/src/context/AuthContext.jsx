import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth ,setisAuth] = useState()
  const handleisAuth = (t) => {
    setisAuth(t)

  }
  return <AuthContext.Provider value={{isAuth,handleisAuth}}>{children}</AuthContext.Provider>;
};
