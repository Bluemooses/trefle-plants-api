import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div class="topnav">
      <Link to="/edible-plants">Edible Plants</Link>
      <Link to="/all-plants">All Plants</Link>
    </div>
  );
}

export default Nav;
