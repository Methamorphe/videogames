import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

import "./videogamecard.css";

const VideoGameCard = ({
  id,
  slug,
  name,
  released,
  background_image,
  rating,
  description
}) => (
  <Card className="card">
    <Image src={background_image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">Released in {released}</span>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="star" />
        {rating} / 5
      </a>
    </Card.Content>
  </Card>
);

export default VideoGameCard;
