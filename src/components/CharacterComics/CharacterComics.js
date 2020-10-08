import React from "react";
import { useSelector } from "react-redux";

function CharacterComics(props) {
  const comics = useSelector((state) => state.comicsByHero);

  return (
    <div>
      {Object.keys(comics).length === 0
        ? null
        : comics.results.map((comic) => {
            const imageSrc = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
            return (
              <div>
                <p>{comic.title}</p>
                <img src={imageSrc}></img>
              </div>
            );
          })}
    </div>
  );
}
export default CharacterComics;
