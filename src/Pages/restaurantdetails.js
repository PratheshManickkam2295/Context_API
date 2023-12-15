import ProductCard from "../Components/Card/ProductCard";
import { useCart } from "../Context/Cart.context";
import { useProducts } from "../Context/Products.Context";

export default function RestaurantDetails() {
  const { products = [] } = useProducts();
  const { cart, setCart } = useCart();
  console.log("RES PAGE::", cart);

  function handleAddToCart(d) {
    let cartCopy = [...cart];
    cartCopy.push({ ...d, quantity: 1 });
    setCart(cartCopy);
  }

  return (
    <div id="restaurant-details-page" className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="container col-9">
            {products &&
              products.map((d, i) => (
                <ProductCard
                  key={`productcard-${d.title}-${i}`}
                  data={d}
                  handleAdd={handleAddToCart}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
