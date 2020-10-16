import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import { useDispatch, useSelector } from "react-redux";
import querystring from "querystring";
import url from "url";

function Pagination(props) {
  const pages = useSelector((state) => state.searchResults.links);
  const [pageNumbers, setPageNumbers] = useState(0);

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
    const urlPayload = `/api/v1/plants/search?page=${pageIndex}&q=${parsedQs.q}`;
    dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: urlPayload });
  }
  function goToNextPage() {
    console.log(pages.next);
    dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: pages.next });
  }
  function goToPreviousPage() {
    console.log(pages.prev);
    dispatch({ type: "GET_NEXT_SEARCH_PAGE", payload: pages.prev });
  }

  return (
    <div className="paginationControl">
      <div>
        <button onClick={goToPreviousPage}>Previous Page</button>
        <button onClick={goToNextPage}>Next Page</button>
      </div>
      <div className="paginationControl">
        {pageNumbers !== 0
          ? pageNumbers.map((page) => {
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
            })
          : null}
      </div>
    </div>
  );
}
export default Pagination;
