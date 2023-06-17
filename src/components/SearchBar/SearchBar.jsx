/* eslint-disable react/prop-types */
import { IoMdArrowRoundBack } from "react-icons/io";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";
export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar-container">
      <NavLink to="/">
        <IoMdArrowRoundBack />
      </NavLink>
      <input
        className="search-bar"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};
