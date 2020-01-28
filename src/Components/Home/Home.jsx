import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dimmer, Loader, Card } from "semantic-ui-react";

import VideoGameCard from "./VideoGameCard/VideoGameCard";

const myInit = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "af37a139cemsh5cc81dad7c007a6p196b65jsn2ee4fd320c31"
  }
};

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://rawg-video-games-database.p.rapidapi.com/games",
        myInit
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data != undefined ? (
        <Card.Group centered itemsPerRow={4}>
          {data.results.map(item => (
            <VideoGameCard key={item.id} {...item} />
          ))}
        </Card.Group>
      ) : (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )}
    </div>
  );
};

export default Home;
