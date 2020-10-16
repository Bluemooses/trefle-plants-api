import React, { useEffect } from "react";
//Local Imports
import "./App.scss";
import Home from "../components/Home/Home";
import CurrentPlantPage from "../components/CurrentPlantPage/CurrentPlantPage";
import PlantSearch from "../components/PlantSearch/PlantSearch";
//Package Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EdiblePlantSearch from "../components/EdiblePlantSearch/EdiblePlantSearch";
import Nav from "../components/Nav/Nav";

// *
// Artifacts
// import CharacterSearch from "../components/CharacterSearch/CharacterSearch";
// import CharacterComics from "../components/CharacterComics/CharacterComics";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/edible-plants">
            <EdiblePlantSearch />
          </Route>
          <Route path="/all-plants">
            <PlantSearch />
          </Route>
        </Switch>

        {/* <CharacterSearch />
        <CharacterComics /> */}
      </div>
    </Router>
  );
}

export default App;
