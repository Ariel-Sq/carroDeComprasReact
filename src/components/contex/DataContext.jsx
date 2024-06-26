import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <dataContext.Provider value={{ data, cart, setCart, removeFromCart }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
