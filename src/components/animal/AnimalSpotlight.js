import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) => { //props 
  const [animal, setAnimal] = useState({}); //creating state 

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]); //getting animal by ID that comes from - helps the reload button do it's thing multiple times

  return (
    <div className="animal-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};
