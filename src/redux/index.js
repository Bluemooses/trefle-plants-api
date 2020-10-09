import { combineReducers } from "redux";
import currentHero from "./reducers/currentHeroReducer";
import comicsByHero from "./reducers/currentComicsReducer";
import allHeroes from "./reducers/allHeroes";
export default combineReducers({ currentHero, comicsByHero, allHeroes });
