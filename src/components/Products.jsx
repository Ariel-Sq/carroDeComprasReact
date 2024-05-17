import { useContext } from "react";
import { dataContext } from "./contex/DataContext";
import "../estilos/products.css";

export const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  return data.map((product) => {
    return (
      <li key={product.id}>
        <ul>
          <div className="card">
            <img src={product.img} alt="imagen" />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => buyProducts(product)}>buy</button>
          </div>
        </ul>
      </li>
    );
  });
};

//export default Products;
