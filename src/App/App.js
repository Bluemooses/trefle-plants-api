import React from "react";
import "./App.scss";
//Package Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import PlantSearch from "../components/PlantSearch/PlantSearch";
import EdiblePlantSearch from "../components/EdiblePlantSearch/EdiblePlantSearch";
import Nav from "../components/Nav/Nav";
import Home from "../components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/edible-plants">
            <EdiblePlantSearch />
          </Route>
          <Route path="/all-plants">
            <PlantSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
