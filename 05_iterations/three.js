// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "hello, world!"

for (const char of greetings) {
    // console.log(char);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('JP', "Japan")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(`The country having code ${key} is ${value}.`);
}

const myObject = {
    username: "admin", 
    password: "pwd"
}

// for (const [key, value] of myObject) { // Error as 'myObject' is not iterable
//     console.log(`${key}: ${value}`);
    
// }