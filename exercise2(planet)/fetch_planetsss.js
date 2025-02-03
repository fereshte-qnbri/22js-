//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////


const planetDataUrl = 'https://handlers.education.launchcode.org/static/planets.json';
const destinationElement = document.getElementById('destination');
let index = 0; // Counter variable to track selected planet

async function fetchPlanetData() {
  try {
    const response = await fetch(planetDataUrl);
    if (!response.ok) {
      throw new Error(`Error fetching planet data: ${response.statusText}`);
    }
    const planets = await response.json();
    if (planets.length !== 6) {
      console.error('Unexpected data format: Expected 6 planets');
      return;
    }
    updatePlanetDisplay(planets);
  } catch (error) {
    console.error('Error fetching planet data:', error);
  }
}

function updatePlanetDisplay(planets) {
  const selectedPlanet = planets[index];
  destinationElement.innerHTML = `
    <h2>Planet: ${selectedPlanet.name}</h2>
    <p>Distance from Sun: ${selectedPlanet.distance} AU</p>
  `;
}

destinationElement.addEventListener('click', () => {
  index = (index + 1) % planets.length; 
  
  fetchPlanetData();
});

fetchPlanetData();