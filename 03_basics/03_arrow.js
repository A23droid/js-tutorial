const user = {
    username: "aditya",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} welcome to the website!`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this); // {} for node & windows for browser

// function chai() {
//     let username = "aP"
//     console.log(this.username); // undefined => this is used for objects, not functions
// }

// const chai = function() {
//     let username = "aP"
//     console.log(this.username);
// }

const chai = () => {
    let username = "aP"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // {} means write return keyword
// }
 
// const addTwo = (num1, num2) =>  num1 + num2 // implicit return 

// explicit return is the one where you type the keyword return

// const addTwo = (num1, num2) =>  (num1 + num2 ) // () means no return keyword

// const addTwo = (num1, num2) => {username: "aditya"} // undefined
const addTwo = (num1, num2) => ({username: "aditya"}) // to return a obj, enclose in ()

console.log(addTwo(3, 4));

const myArray = [2, 3, 5, 7, 8]

// myArray.forEach()