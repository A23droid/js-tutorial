const user = {
    username: "AP",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user["username"]);
// console.log(user.getUserDetails());
// console.log(this); // {}

function User (username, loginCount, isLoggedIn) {
    this.username = username; // var = value
    this.loginCount = loginCount; 
    this.isLoggedIn = isLoggedIn; 

    this.greeting = function() {
        console.log(`Welcome ${this.username}!`);
        
    }
    return this; // w/o this return line it will still return implicitly
}

const userOne = new User("Aditya", 12, true);
// overwrites userOne if new is not used in userOne and userTwo
const userTwo = new User("Hacker", 1221, false); 

console.log(userOne.constructor); // a reference to the self
// console.log(userTwo);

// STEP 1) usage of new => creates a new instance (i.e. empty object)
// STEP 2) the new keyword calls a constructor function which packs the given  
// args and returns the object
// STEP 3) 'this' keyword injects the given args in the obj