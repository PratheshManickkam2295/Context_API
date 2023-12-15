import React, { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext({
  products: [],
});

export const useProducts = () => useContext(ProductsContext);

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  console.log("PRODUCTS CONTEXT");
  useEffect(() => {
    fetch("http://localhost:3000/mocks/products.json")
      .then((response) => response.json())
      .then((r) => {
        if (r && r.data) {
          setProducts(r.data);
        }
      })
      .catch((e) => console.log(e));
    return () => {};
  }, []);
  const value = {
    products,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
