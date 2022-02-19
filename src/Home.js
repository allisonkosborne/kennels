import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "./components/animal/AnimalSpotlight"
import { PropsAndState } from "./components/PropsAndState";
import { getRandomId } from "./modules/AnimalManager"


export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []); //renders when page loads - get this on the screen; if you click reload, nothign happens because of the array; 


  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <PropsAndState yourName={"Allison"} />
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} /> //a type of conidtional rendering; if there's a spotligtht ID, then render spotlight ID
      } 
    
    </>
  );
};