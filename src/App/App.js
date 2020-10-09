import React, { useEffect } from "react";
import "./App.css";
import CharacterSearch from "../components/CharacterSearch/CharacterSearch";
import CharacterComics from "../components/CharacterComics/CharacterComics";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_HEROES" });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CharacterSearch />
        <CharacterComics />
      </header>
    </div>
  );
}

export default App;
