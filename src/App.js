import React from "react";

const App = () => {
  const myInit = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": "af37a139cemsh5cc81dad7c007a6p196b65jsn2ee4fd320c31"
    }
  };

  const request = async () => {
    const response = await fetch(
      "https://rawg-video-games-database.p.rapidapi.com/games",
      myInit
    );
    const json = await response.json();
    console.log(json);
  };

  request();

  return <div>Hello World</div>;
};

export default App;
