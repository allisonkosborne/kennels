import React, { useState, useEffect } from 'react';
//import the components we will need
//State is the current values of the properties used to render a component.
import { AnimalCard } from './AnimalCard.js';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager.js';
import { useNavigate } from 'react-router';

export const AnimalList = () => {
     // The initial state is an empty array
    const [animals, setAnimals] = useState([]);

    const navigate = useNavigate();


    const getAnimals = () => {
        //After the data comes back from the API, we
        //  use the setAnimals function to update state
        return getAllAnimals().then(animalsFromAPI => {
          // We'll do something more interesting with this data soon.
          setAnimals(animalsFromAPI);
        });
      };
    // got the animals from the API on the component's first render
      useEffect(() => {
        getAnimals();
      }, []);
    //useEffect tells React to call the getAnimals() function that will fetch data from our API
    //The empoty array argument tells React ot call the function on the first render of the component
    
    const handleDeleteAnimal = id => {
      deleteAnimal(id)
      .then(() => getAllAnimals().then(setAnimals));
    };


    //Finally we use .map() to "loop over" the animals array to show a list of animal cards
    return (
      < >
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {navigate("/animals/create")}}>
          Admit Animal
        </button>
      </section>

      <div className="container-cards">
        {animals.map(animal => 
        <AnimalCard 
          key={animal.id} 
          animal={animal} //prop
          handleDeleteAnimal={handleDeleteAnimal} /> //prop
        )}
    
      </div>
      </ >
    );
  };

//Will initiate the Animalmanagers getAllAnimals() call, hold onto the returned data
//and then render the <Animalcard /> compnent for each animal 
//when the data is returned, we can hold onto it by placing it in the component's state 


//Remember that every time you invoke the setAnimals() method, 
//it changes the state of the component and forces React to re-render it. 
//The deleteAnimal() function deletes an animal object from the API, and 
//then queries the database for all the animals(now updated). When 
//state is updated, the component renders again using the data 
//in the new animal array.