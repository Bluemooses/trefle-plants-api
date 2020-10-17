import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import { useDispatch, useSelector } from "react-redux";
import querystring from "querystring";
import url from "url";
function Pagination(props) {
  const pages = useSelector((state) => state.searchResults.links);
  const [pageNumbers, setPageNumbers] = useState(0);
  const [query, querySetter] = useState(``);
  const dispatch = useDispatch();

  const rawUrl = `https://trefle.io/${pages.last}`;
  let parsedUrl = url.parse(rawUrl);
  let parsedQs = querystring.parse(parsedUrl.query);
  let numberOfPages = [];

  const pageValue = parsedQs.page;

  useEffect(() => {
    setNumberOfPages();
  }, [pages.last]);

  function setNumberOfPages() {
    for (let i = 1; i <= pageValue; i++) {
      numberOfPages.push({ i: i });
      setPageNumbers(numberOfPages);
    }
  }

  function goToDirectPage(page) {
    const pageIndex = page.i;
    console.log(parsedQs);
    console.log(parsedUrl);
    if (Object.keys(parsedQs).length > 2) {
      console.log("edible search");
      console.log(page);

      const urlPayload = `/api/v1/plants/search?page=${pageIndex}&q=${parsedQs.q}&filter[edible]=true`;
      dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: urlPayload });
    } else {
      console.log(page);
      console.log("this is hard today");
      const urlPayload = `/api/v1/plants/search?page=${pageIndex}&q=${parsedQs.q}`;
      dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: urlPayload });
    }
    // const urlPayload = ``;
  }

  return (
    <div className="paginationControl">
      {pageNumbers &&
        pageNumbers.map((page) => {
          switch (page.i) {
            case 1:
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
            case Number(parsedQs.page):
              return (
                <button
                  className="paginationButton"
                  onClick={() => goToDirectPage(page)}
                  key={page.i}
                >
                  Last
                </button>
              );
            default:
              return (
                <button
                  className="paginationButton"
                  onClick={() => goToDirectPage(page)}
                  key={page.i}
                >
                  Page {page.i}
                </button>
              );
          }
        })}
    </div>
  );
}

export default Pagination;
