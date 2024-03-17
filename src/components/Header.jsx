import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="nannies" className="nav-item">
          Nannies
        </NavLink>
        <NavLink to="favorites" className="nav-item">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
