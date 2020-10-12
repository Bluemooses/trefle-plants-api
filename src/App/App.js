import React, { useEffect } from "react";
import "./App.css";
import CharacterSearch from "../components/CharacterSearch/CharacterSearch";
import CharacterComics from "../components/CharacterComics/CharacterComics";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home/Home";
function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "GET_HEROES" });
  // });

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
