// Arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktimaan", "Krrish"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2]);

// Array methods

// myArr.push(34)
// myArr.pop()

myArr.unshift(990) // Adds ele at the first
myArr.shift() // Removes the first ele

// console.log(myArr.includes(990));
// console.log(myArr.indexOf(990)); // -1 

const newArr = myArr.join("#") // by default, ","

// console.log(myArr);
// console.log(newArr);

// slice => [a, b), the original arr remains unchanged 
// splice => [a, b], the original arr loses the sliced part

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);

console.log(myn2);

