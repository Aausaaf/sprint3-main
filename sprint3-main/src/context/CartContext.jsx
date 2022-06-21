import React, { createContext } from "react";

export const CartContext = createContext();
    
export const CartProvider = ({ children }) => {
  const [iscart ,setiscart] = useState(1)
  const handleiscart = (t) => {
    setiscart(t)

  }
  return <CartContext.Provider value={{iscart,handleiscart}} >{children}</CartContext.Provider>;
};
