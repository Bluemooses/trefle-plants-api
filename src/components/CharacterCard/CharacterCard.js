import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import axios from "axios";
import md5 from "md5";

function CharacterCard(props) {
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);

  const heroDetails = props.heroDetails[0];
  const heroId = heroDetails.id;
  const thumbnailPath = heroDetails.thumbnail.path;
  const thumbnailExtension = heroDetails.thumbnail.extension;
  const heroDescription = heroDetails.description;

  const imgSrc = `${thumbnailPath}/portrait_xlarge.${thumbnailExtension}`;
  // const url = `https://gateway.marvel.com/v1/public/characters/${heroId}/comics&apikey=${publicKey}&hash=${hash}&ts=${ts}`; // putting it all together
  const url = `https://gateway.marvel.com:443/v1/public/characters/${heroId}/comics?apikey=${publicKey}&hash=${hash}&ts=${ts}`;
  const getComics = (id) => {
    console.log(props);
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
      })
      .catch((err) => console.warn(err));
  };
  //   useEffect((heroDetails) => console.log(heroId), [heroDetails.thumbnail.path]);
  return (
    <Card>
      <Image src={imgSrc} />
      <Card.Content>
        <Card.Header>{heroDetails.name}</Card.Header>
        <Card.Description>{heroDescription}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Button onClick={getComics}>Comics With {heroDetails.name}</Button>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
