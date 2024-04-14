import "../estilos/navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <h1 className="navbar-logo">Shop</h1>
          <Link className="icono" to={"/cart"}>
            🛒
          </Link>
        </nav>
      </div>
    </>
  );
};
