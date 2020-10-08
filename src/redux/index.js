import { combineReducers } from "redux";
import currentHero from "./reducers/currentHeroReducer";
import comicsByHero from "./reducers/currentComicsReducer";
export default combineReducers({ currentHero, comicsByHero });
