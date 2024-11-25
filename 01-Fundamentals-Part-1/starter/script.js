
//Practicing defininig variables 
let country = "United Kingdom"; 
let population = 60;
const continent = "Europe";
const isIsland = "True";
const language = "English";

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);

let halfPopulation = population / 2;
let increaseByOne = population++;
let averageCountryPop = 33; 


console.log(halfPopulation);
console.log(increaseByOne);

if (population < averageCountryPop){
    console.log(`${country} population is below average with a population of ${population}`);
} else {
    console.log(`${country} population is above average with a population of ${population}`);
}

const description1 = country + " is in " + continent + ", and its " + population + " million people speak the language " + language; 
const description2 = `${country} is in  ${continent} and its ${population} million people speak the language ${language}`;

console.log(description1);
console.log(description2);

const numNeighbours = prompt('How many neighbour countries does your country have?');
