import React, { useEffect } from "react";
import "./App.scss";
import CharacterSearch from "../components/CharacterSearch/CharacterSearch";
import CharacterComics from "../components/CharacterComics/CharacterComics";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home/Home";
import CurrentPlantPage from "../components/CurrentPlantPage/CurrentPlantPage";
import PlantSearch from "../components/PlantSearch/PlantSearch";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_PLANTS" });
  });

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/">
              <PlantSearch />
            </Route>
            <Route path="/home">
              <Home />
              <CurrentPlantPage />
            </Route>
          </Switch>
        </Router>

        {/* <CharacterSearch />
        <CharacterComics /> */}
      </header>
    </div>
  );
}

export default App;
