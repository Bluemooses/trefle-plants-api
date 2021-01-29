import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const dispatch = useDispatch();

  const resetSearch = () => {
    dispatch({ type: "RESET_SEARCH_PAGE" });
  };
  return (
    <div className="navBar">
      <Link to="/edible-plants" onClick={resetSearch}>
        Edible Plants
      </Link>
      <Link to="/all-plants" onClick={resetSearch}>
        All Plants
      </Link>
    </div>
  );
}

export default Nav;
