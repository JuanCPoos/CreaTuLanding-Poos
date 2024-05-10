import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className="logo">Logo</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electrónicos</Link>
        </li>
        <li>
          <Link to="/category/clothing">Ropa</Link>
        </li>
      </ul>
      <button className="cart-button"><FontAwesomeIcon icon={faShoppingCart} />
        <CartWidget />
      </button>
    </nav>
  );
};

export default Navbar;
