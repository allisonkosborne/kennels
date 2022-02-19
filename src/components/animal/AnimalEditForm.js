import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getAnimalById, updateAnimal} from "../../modules/AnimalManager"
import "./AnimalForm.css"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" }); //need to pull in data that we need to change it - useEffect
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams(); //grabs from route; I know that my animal id is getting passed to this animal form
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value; //
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true); //prevents user from submitting it multiple times; dont allow the user to change the form 

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed //creating animal object because we are adding an animal ID 
    };

  updateAnimal(editedAnimal)
    .then(() => navigate("/animals")
    )
  } //tossing to animal manager - sends us back to /animal 

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []); //sets the stage of our React hook; loading - dont make things active until it's done loading

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}