// Primitive:
// Call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is dynamically typed language.
const score = 100 // Number
const scoreValue = 100.3 // Number (no special dataType for decimals)

const isLoggedIn = false // Boolean
const outsideTemp = null // null
let userEmail; // undefined by default
let userName = undefined

const id = Symbol('123') // type => Symbol
const anotherId = Symbol('123') // Symbols return different values
console.log(id === anotherId) // false

// const bigNumber = 312392858745847945n

// Non-Primitive (Reference type)
// Call by reference
// Array, Objects, Functions

const heroes = ["Shaktimaan", "Naagraj", "Doga"]; // type => object

let myObj = { // type => object
    name: "aditya",
    age: 19
}

const myFunction = function(){ // type => object function
    console.log("hello, world!");
}

console.log(typeof hola); // undefined
console.log(typeof myFunction); // function

// ++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)