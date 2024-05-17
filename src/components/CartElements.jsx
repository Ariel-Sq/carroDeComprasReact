import { useContext } from "react";
import { dataContext } from "./contex/DataContext";

export const CartElements = () => {
  const { cart } = useContext(dataContext);
  return cart.map((product) => {
    return (
      <div className="cart-context" key={product.id}>
        <img src={product.img} alt="imagen" />
        <h3 className="name">{product.name}</h3>
        <h4 className="price">${product.price}</h4>
      </div>
    );
  });
};
