import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import { useDispatch, useSelector } from "react-redux";
import querystring from "querystring";
import url from "url";
function Pagination(props) {
  //redux
  const pages = useSelector((state) => state.searchResults.links);
  const dispatch = useDispatch();
  //hooks
  const [pageNumbers, setPageNumbers] = useState(0);
  //declarations
  const rawUrl = `https://trefle.io/${pages.last}`;
  const parsedUrl = url.parse(rawUrl);
  const parsedQs = querystring.parse(parsedUrl.query);

  const pageValue = parsedQs.page;
  let numberOfPages = [];

  //setNumberOfPages awaiting numberOfPages, pageValue
  useEffect(
    function setNumberOfPages() {
      for (let i = 1; i <= pageValue; i++) {
        numberOfPages.push({ i: i });
      }
      setPageNumbers(numberOfPages);
    },
    [pages.last]
  );

  //dispatch number value with the current query information to find matching page number
  function goToDirectPage(page) {
    const pageIndex = page.i;
    if (Object.keys(parsedQs).length > 2) {
      // This handles edible plants
      const urlPayload = `/api/v1/plants/search?page=${pageIndex}&q=${parsedQs.q}&filter[edible]=true`;
      dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: urlPayload });
    } else {
      // This handles all plants
      const urlPayload2 = `/api/v1/plants/search?page=${pageIndex}&q=${parsedQs.q}`;
      dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: urlPayload2 });
    }
  }
  //receives JSON object, parses and sends to goToDirectPage()
  const handleDropdown = (e) => {
    const pageObject = JSON.parse(e.target.value);
    goToDirectPage(pageObject);
  };

  return (
    <div className="paginationControl">
      {/* Handles first page button */}
      {pageNumbers &&
        pageNumbers
          .filter((page) => page.i === 1)
          .map((page) => {
            return (
              <button
                className="paginationButton"
                value={page.i}
                onClick={() => goToDirectPage(page)}
                key={page.i}
              >
                First
              </button>
            );
          })}
      {/* Handle pagination dropdown pages */}
      {pageNumbers && (
        <select
          onChange={(data) => {
            handleDropdown(data);
          }}
        >
          {pageNumbers.map((page) => {
            console.log(page);
            return (
              <option key={page.i} value={JSON.stringify(page)}>
                {page.i}
              </option>
            );
          })}
        </select>
      )}

      {/* Only display last page if there is more than one page */}
      {pageNumbers &&
        pageNumbers
          .filter((page) => page.i === Number(parsedQs.page) && page.i !== 1)
          .map((page) => {
            return (
              <button
                key={page.i}
                className="paginationButton"
                onClick={() => goToDirectPage(page)}
              >
                Last
              </button>
            );
          })}
    </div>
  );
}

export default Pagination;
