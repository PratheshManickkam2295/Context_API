import React from "react";
import { useCart } from "../Context/Cart.context";
import CartCard from "../Components/Card/CartCard";

export default function Cart() {
  const { cart = [], handleQuantity = () => {} } = useCart();
  return (
    <div id="cart-page-container" className="container">
      <div className="container-fluid">
        <div className="row">
          {cart.map((d, i) => (
            <div className="col-12">
              <CartCard
                key={`cart-item-${i}`}
                data={d}
                handleAdd={handleQuantity}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
