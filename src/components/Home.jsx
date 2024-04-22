import { NavBar } from "./Navbar";
import { Banner } from "./Banner";
import { Products } from "./Products";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="product-card-cont">
        <Products />
      </div>
    </>
  );
};
