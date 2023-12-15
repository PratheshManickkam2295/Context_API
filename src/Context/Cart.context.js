import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => Promise,
  handleQuantity: () => null,
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleQuantity(id = 0, type = "") {
    const cartCopy = [...cart];
    const matchedData = cartCopy.find((d) => d.id === id);
    if (matchedData) {
      if (type === "decrement" && matchedData.quantity > 1) {
        matchedData.quantity -= 1;
      } else if (type === "increment") {
        matchedData.quantity += 1;
      }
      setCart(cartCopy);
    } else {
      console.error("No Matching Food Item found in cart");
      alert("No Matching Food Item found in cart");
    }
  }
  const value = {
    cart,
    setCart,
    handleQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
