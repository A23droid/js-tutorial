const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB Calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is completed');
        resolve() // w/o this, promise won't be consumed
    }, 1000)
}) // Promise is obj, not class

promiseOne.then(function () {
    console.log('Promise Consumed');
    
}) // .then() is directly related to resolve

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Aditya", email: "adity@pill.ai"}); // Data 
    }, 1000);
});

promiseThree.then(function(user){ // Data as parameter
    console.log(user.email); // adity@pill.ai
    
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username: "AP", password: "1w2e3"});
        } else {
            reject('ERROR: Something went wrong.') // Give error message
        }
    }, 1000);
});

promiseFour.then((user) => {
    // console.log(user);
    return user.username;
}).then((username) => { // chaining : user.username = username
    console.log(username);
    
}).catch((errorMessage) => {
    console.log(errorMessage);
    
}).finally(() => {
    console.log("The promise has either been resolved or rejected.");
    
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "admin", password: "qwerty@321"});
        } else {
            reject('ERROR: Something went wrong with admin.') // Give error message
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error); // graceful error handling  
        
    }
    
} // async await method

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch returns a promise
//         const data = await response.json() // this also takes time, hence await
//         console.log(data);
    
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})