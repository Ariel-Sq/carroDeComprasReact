import { useContext } from "react";
import { dataContext } from "./contex/DataContext";

import "../estilos/cartElements.css";

export const CartElements = () => {
  const { cart, removeFromCart } = useContext(dataContext);

  return cart.map((product) => {
    return (
      <div className="cart-content" key={product.id}>
        <img src={product.img} alt="imagen" />
        <h3 className="name">{product.name}</h3>
        <h4 className="price">${product.price}</h4>
        <button
          className="delete-button"
          onClick={() => removeFromCart(product.id)}
        >
          🗑️
        </button>
      </div>
    );
  });
};
