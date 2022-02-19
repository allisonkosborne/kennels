import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getLocationById } from "../../modules/LocationManager";
import "./LocationDetail.css";

export const LocationDetail = () => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation(animal);
        setIsLoading(false);
      });
  }, [locationId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );
};
//I dont know how to fiull in above *******

