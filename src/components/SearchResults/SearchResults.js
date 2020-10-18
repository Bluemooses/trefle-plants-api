import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CurrentPlantPage/CurrentPlantPage.css";
import "../SearchResults/SearchResults.scss";
import PlantCard from "./PlantCard/PlantCard";
import Pagination from "../Pagination/Pagination";
function SearchResults() {
  //
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.searchResults);
  const pages = useSelector((state) => state.searchResults.links);
  const plantData = plants.data;
  const [lastPage, setLastPage] = useState({});

  useEffect(() => {
    if (plantData) {
      async function awaitLinks() {
        const { last } = await pages;
        console.log(last);
        const lastPageSplitter = last.split(/&q|=/);
        if (lastPageSplitter.length === 4) {
          const lastPageValueAll = lastPageSplitter[1];
          console.log(lastPageValueAll);
          setLastPage(lastPageValueAll);
        }
        if (lastPageSplitter.length === 5) {
          const lastPageValueEdible = lastPageSplitter[2];
          setLastPage(lastPageValueEdible);
        }
        console.log(lastPage);
      }
      awaitLinks();
    }
  }, [plantData, lastPage, pages]);

  const getPlantDetails = (plant) => {
    console.log(plant);
    dispatch({ type: "GET_PLANT_DETAILS", payload: plant });
  };

  return (
    <>
      {/* If there's more than 5 plant results display pagination on Top and Bottom */}
      {plantData && plantData.length > 5 && <Pagination />}
      {plantData && (
        <div className="container">
          {plantData.filter((plantFilter) => plantFilter.image_url).length ===
            0 && (
            <div>
              <p>No data available..</p>
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

      {plantData && lastPage > 1 && <Pagination />}
    </>
  );
}

export default SearchResults;
