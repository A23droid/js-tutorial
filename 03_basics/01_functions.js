function sayMyName() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// sayMyName() // execute

function addTwoNumbers (number1, number2) { // parameters
    let result = number1 + number2
    return result
    console.log("This will never be executed!");
    
}

let result = addTwoNumbers(2, "a") // args
// console.log(result);

function loginUserMessage(username = "user") {
    if (!username) {
        return "Please enter a username!"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // undefined just logged in

function calculateCartPrice(val1, val2, ...price) { // ... is rest opr
    return price
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // val1 = 200, val2 = 400

const user = {
    username: "aditya", 
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);   
}

// handleObject(user)
handleObject({
    username: "pillai",
    prices : 2100
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
