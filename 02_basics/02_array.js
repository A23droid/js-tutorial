const marvelHeroes = ["thor", "Iron-man", "Spiderman"]
const dcHeroes = ["Superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const heroes = marvelHeroes.concat(dcHeroes) // Merge
// console.log(heroes);

// const heroes = [...marvelHeroes, ...dcHeroes] // spread operator => Popular way to merge
// console.log(heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("aditya"));
console.log(Array.from("aditya")); // [ 'a', 'd', 'i', 't', 'y', 'a' ]
console.log(Array.from({name: "aditya"})); // [] (interesting)

let score1 = 100
let score2 = 200
let score3 = 300

console.log((Array.of(score1, score2, score3, marvelHeroes)).flat(Infinity));
