import React from "react";
import { useSelector } from "react-redux";
import { Header, Card, Image } from "semantic-ui-react";

function CharacterComics(props) {
  const comics = useSelector((state) => state.comicsByHero);
  const hero = useSelector((state) => state.currentHero[0]);
  return (
    <div>
      {Object.keys(comics).length === 0 ? null : (
        <div>
          <Header as="h1">Comics By {hero.name}</Header>
          <Card.Group itemsPerRow="10">
            {comics.results.map((comic) => {
              const imageSrc = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
              return (
                <Card key={comic.id}>
                  <Card.Header>{comic.title}</Card.Header>
                  <Image src={imageSrc} alt={comic.title}></Image>
                </Card>
              );
            })}
          </Card.Group>
        </div>
      )}
    </div>
  );
}
export default CharacterComics;
