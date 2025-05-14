// console.log(2 > 1)
// console.log(1 <= 3)
// console.log(23 != 34);
// console.log(12 == 21);

// console.log("2" > 1); // true
// console.log("02" > 1) // true

// console.log(null > 0) // false
// console.log(null == 0); // false
// console.log(null <= 0) // true
// console.log(null >= 0) // true
// console.log(null < 0) // false

// In JS, ==, ===; >, <; <=, >= work differently.
// >= and <= convert null into Number and hence 0 >= 0 and 0 <= 0 results in true
// While the others do not convert it into a number, thus resulting in false

// console.log(undefined > 0) // false
// console.log(undefined == 0); // false
// console.log(undefined <= 0) // false
// console.log(undefined >= 0) // false
// console.log(undefined < 0) // false 

// === => strict check (checks dataType too)

console.log("2" == 2); // true
console.log("2" === 2); // false

