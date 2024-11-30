
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

if (Number(numNeighbours) === 1){
    console.log("One border");
} else if (Number(numNeighbours) > 1){
    console.log("more then one border");
} else {
    console.log("No Borders");
}



if (population < 60 && language === "English" && !isIsland){
    console.log(`You should live here in ${country}`);
} else {
    console.log(`You should NOT live here in ${country}`);
}

switch (language){
    case `Mandarin`:
    case `Chinese`:
        console.log("Most number of native speakers");
        break;
    case `Spanish`:
        console.log("Second most native speakers");
        break;
    case `English`:
        console.log("Most spoken overall");
        break;
    default:
        console.log("Is a language :D");
        break;
}

console.log(`United Kingdom's population is ${population > 33 ? "Above average" : "Below Average"}`);