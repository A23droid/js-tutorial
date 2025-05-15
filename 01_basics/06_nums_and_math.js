const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // for precision upto 2 places (rounding off)

const otherNumber = 89.937238
// console.log(otherNumber.toFixed(2)); // rounding off number

// // toPrecision returns string
// console.log(`Using toPrecision: ${otherNumber.toPrecision(4)}`)
// console.log(`Using toFixed: ${otherNumber.toFixed(2)}`)

const hundreds = 100000000
// console.log(hundreds.toLocaleString()); // , in US value by default
// console.log(hundreds.toLocaleString("en-IN")); // , in IN value

// +++++++++++++++++++  Maths   +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); // returns Number
// console.log(Math.ceil(4.1)); // 4.x => 5
// console.log(Math.floor(4.9)); // 4.x => 4
// console.log(Math.min(2, 21, -2, 287));
// console.log(Math.max(22, -1, 267));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10, max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
