import React, { useEffect } from "react";
//Local Imports
import "./App.scss";
import Home from "../components/Home/Home";
import CurrentPlantPage from "../components/CurrentPlantPage/CurrentPlantPage";
import PlantSearch from "../components/PlantSearch/PlantSearch";
//Package Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// *
// Artifacts
// import CharacterSearch from "../components/CharacterSearch/CharacterSearch";
// import CharacterComics from "../components/CharacterComics/CharacterComics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/">
              <Home />
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
