import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import axios from "axios";
import md5 from "md5";
import { useDispatch } from "react-redux";

function CharacterCard(props) {
  const dispatch = useDispatch();
  const [toggler, setToggler] = useState(false);
  const heroDetails = props.heroDetails[0];
  const thumbnailPath = heroDetails.thumbnail.path;
  const thumbnailExtension = heroDetails.thumbnail.extension;
  const heroDescription = heroDetails.description;
  const imgSrc = `${thumbnailPath}/portrait_xlarge.${thumbnailExtension}`;

  const getComics = () => {
    dispatch({ type: "GET_COMICS_BY_HERO", payload: heroDetails.id });
    setToggler(!toggler);
    console.log(toggler);
  };
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
