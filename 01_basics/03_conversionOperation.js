let score = false

// console.log(typeof score);
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber); 
/* For undefined and alphabet containing str:
                                NaN => Not a Number 
                                and 0 for null/false
                                and 1 for true */

// "33" => 33
// "33abc" => NaN
// true => 1; false = 0

let isLoggedIn = -545

let BooleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof(BooleanIsLoggedIn))
// console.log(BooleanIsLoggedIn);

// 1 => true; 0 => false
// "dssr" => true; "" => false

let someNumber = -99
let stringNumber = String(someNumber)
// console.log(stringNumber);

// *************************** Operations ***************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)
// console.log(2 / 2)
// console.log(2 % 2)

let str1 = "aditya"
let str2 = " pillai"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(true) // true
// console.log(+true) // 1
// console.log(+"") // 0

// Clean code >>> Puzzling questionable code
// Readability >>> Looking smart

let num1, num2, num3
num1 = num2 = num3 = 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
