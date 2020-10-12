import { combineReducers } from "redux";
import currentHero from "./reducers/currentHeroReducer";
import comicsByHero from "./reducers/currentComicsReducer";
import allHeroes from "./reducers/allHeroes";
import currentPlantPage from "./reducers/plantPageReducer";
import searchResults from "./reducers/currentSearchPlantsReducer";
export default combineReducers({
  currentPlantPage,
  currentHero,
  comicsByHero,
  allHeroes,
  searchResults,
});
