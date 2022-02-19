const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/locations/${locationId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

//***CHECK THAT ABOVE IS CORRECT */

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

//Our AnimalCard does a great job of rendering a single animal, but our 
//database has more than one animal. That's where the AnimalList component will come in. 
//By the time we're done, it will initiate the AnimalManager getAllAnimals() call, 
//hold on to the returned data, and then render the <AnimalCard /> component for each animal.
//When the data is returned, we can hold on to it by placing it in the component's state