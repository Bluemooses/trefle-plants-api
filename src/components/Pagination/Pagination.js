import React from "react";
import { useSelector } from "react-redux";

function Pagination(props) {
  const pages = useSelector((state) => state.searchResults.links);

  console.log(pages);
  return (
    <div>
      <button>Previous Page</button>
      <p></p>
      <button>Next Page</button>
    </div>
  );
}
export default Pagination;
