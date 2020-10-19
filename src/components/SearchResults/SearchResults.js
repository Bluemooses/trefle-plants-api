import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CurrentPlantPage/CurrentPlantPage.css";
import "../SearchResults/SearchResults.scss";
import PlantCard from "./PlantCard/PlantCard";
import Pagination from "../Pagination/Pagination";
import querystring from "querystring";
import url from "url";
function SearchResults() {
  //
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.searchResults);
  const pages = useSelector((state) => state.searchResults.links);

  const [pageNumbers, setPageNumbers] = useState(0);

  const plantData = plants.data;
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    //await plantData
    if (plantData) {
      const { last } = pages;
      const lastPageSplitter = last.split(/&q|=/);
      const rawUrl = `https://trefle.io/${pages.last}`;
      const parsedUrl = url.parse(rawUrl);
      const parsedQs = querystring.parse(parsedUrl.query);
      const pageValue = parsedQs.page;
      let numberOfPages = [];
      function setNumberOfPages() {
        for (let i = 1; i <= pageValue; i++) {
          numberOfPages.push({ i: i });
        }
        return setPageNumbers(numberOfPages);
      }

      function awaitLinks() {
        //All search
        if (lastPageSplitter.length === 4) {
          const lastPageValueAll = lastPageSplitter[1];
          return setLastPage(lastPageValueAll);
        }
        //Edible search
        if (lastPageSplitter.length === 5) {
          const lastPageValueEdible = lastPageSplitter[2];
          return setLastPage(lastPageValueEdible);
        }
      }
      awaitLinks();
      setNumberOfPages();
    }
    console.log("lifecycle");
  }, [plantData, lastPage, pages]); //dependencies && end effect

  const getPlantDetails = (plant) => {
    dispatch({ type: "GET_PLANT_DETAILS", payload: plant });
  };

  return (
    <>
      {/* If there's more than 5 plant results display pagination on Top and Bottom */}
      {plantData && plantData.length > 5 && (
        <Pagination pageNumbers={pageNumbers} />
      )}
      {plantData && (
        <div className="container">
          {plantData.filter((plantFilter) => plantFilter.image_url).length ===
            0 && (
            <div>
              <p>
                No results found on this page. Help contriubuate at{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://trefle.io/"
                >
                  Trefle.io
                </a>
              </p>
            </div>
          )}

          {plantData.length > 0 &&
            plantData
              //Only display received plant data with image urls
              .filter((plantFilter) => plantFilter.image_url)
              .map((plant) => {
                return (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    getPlantDetails={getPlantDetails}
                  />
                );
              })}
        </div>
      )}

      {plantData && lastPage > 1 && <Pagination pageNumbers={pageNumbers} />}
    </>
  );
}

export default SearchResults;
