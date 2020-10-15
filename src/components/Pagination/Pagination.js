import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Pagination(props) {
  const pages = useSelector((state) => state.searchResults.links);
  const dispatch = useDispatch();
  console.log(pages);
  function goToNextPage() {
    console.log(pages.next);
    dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: pages.next });
  }

  return (
    <div>
      <button>Previous Page</button>
      <p></p>
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
}
export default Pagination;
