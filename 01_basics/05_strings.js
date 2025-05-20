const name = "aditya"
let repoCount = 6;

// console.log(name + " has " + repoCount + " repositories.") // Outdated syntax

//String interpolation
console.log(`${name} has ${repoCount} repositories.`); // Modern, more readable syntax

// Another way of declaring str
const gameName = new String('AP Cell') // Constructor of String

// console.log(gameName[3]);
// console.log(gameName.__proto__)


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('e'));

// const newString = gameName.substring(0, 4) // neg val => ignore & start from 0
// console.log(newString);

// const anotherString = gameName.slice(-7, 1)
// console.log(anotherString);

const newStringOne = "      aditya     "
console.log(newStringOne.trim());

const url = "https://www.etta.ai/help%20feedback/"
console.log(url.replace('%20', ' '));

console.log(url.includes('wow'));

console.log(gameName.split(' '));

