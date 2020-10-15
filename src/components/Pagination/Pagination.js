import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import querystring from "querystring";
import url from "url";
function Pagination(props) {
  const pages = useSelector((state) => state.searchResults.links);
  const dispatch = useDispatch();

  const rawUrl = `https://trefle.io/${pages.last}`;
  let parsedUrl = url.parse(rawUrl);
  let parsedQs = querystring.parse(parsedUrl.query);

  console.log(parsedQs);
  const pageValue = parsedQs.page;
  const [pageNumbers, setPageNumbers] = useState(0);

  let numberOfPages = [];
  useEffect(() => {
    for (let i = 1; i <= pageValue; i++) {
      numberOfPages.push({ i: i });
    }
    setPageNumbers(numberOfPages);
  }, []);

  console.log(pageNumbers);

  function goToDirectPage(page) {
    console.log(page.i);
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
    <div>
      <div>
        <button onClick={goToPreviousPage}>Previous Page</button>
        <button onClick={goToNextPage}>Next Page</button>
      </div>
      <div>
        {pageNumbers !== 0
          ? pageNumbers.map((page) => {
              switch (page.i) {
                case 1:
                  return (
                    <button onClick={() => goToDirectPage(page)} key={page.i}>
                      First
                    </button>
                  );
                case Number(parsedQs.page):
                  return (
                    <button onClick={() => goToDirectPage(page)} key={page.i}>
                      Last
                    </button>
                  );
                default:
                  return (
                    <button onClick={() => goToDirectPage(page)} key={page.i}>
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
