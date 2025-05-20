// constructor => singleton => Object.create
// literal => not singleton

const mySym = Symbol('key')

// object user
const jsUser = {
    name: "aditya",
    age: 18, // Internally, key is treated as "key"
    "Full Name": "AP",
    location: "Ahmedabad",
    email: "aditya.pill@i",
    [mySym]: "value", // [] => symbol otherwise string
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email); // Okayish way
// console.log(jsUser["email"]); // Better way

// console.log(jsUser["Full Name"]); // Only way to access this key

// console.log(jsUser[mySym]); // value

jsUser.email = "AP@ap.ap"
// Object.freeze(jsUser) // Freeze (lock, or immutabilize) jsUser obj

// jsUser.email = "poipoi@iop.iop" // Value won't propagate
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`hello ${this.name}!`);
}

console.log(jsUser.greeting()); // Proper way
// console.log(jsUser.greeting); // undefined
