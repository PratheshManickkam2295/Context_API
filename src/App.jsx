import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import index from "./Pages/home";
import Restaurant from "./Pages/restaurant";
import RestaurantDetails from "./Pages/restaurantdetails";
import Cart from "./Pages/cart";
import Header from "./Components/Header/Header";

export default function App({ message = "" }) {
  return (
    <div className="App">
      <Header
        brandName="Smartphones"
        brandLogo="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
      />
      <Routes>
        <Route path="/" Component={index} />
        <Route path=":city/restaurants" Component={Restaurant} />
        <Route
          path=":city/restaurants/:restaurantName"
          Component={RestaurantDetails}
        />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}
