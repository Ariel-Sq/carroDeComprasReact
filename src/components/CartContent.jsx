import { useContext } from "react";
import { dataContext } from "./contex/DataContext";
import { CartElements } from "./CartElements";
import { CartTotal } from "./CartTotal";

export const CartContent = () => {
  const { cart } = useContext(dataContext);

  // condicion ? "" : ""

  return cart.length > 0 ? (
    <>
      <CartElements />;
      <CartTotal />
    </>
  ) : (
    <h2 className="centerText">Tu carrito está vacio</h2>
  );
};
