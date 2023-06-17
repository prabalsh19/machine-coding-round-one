import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./Nav.css";
export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="logo">
        Books
      </NavLink>
      <NavLink to="/search" className="search-btn">
        <BiSearch /> Search
      </NavLink>
    </nav>
  );
};
