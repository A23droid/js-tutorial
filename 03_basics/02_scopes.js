// var c = 300;
let a = 100; // GLOBAL val

if (true) {
    let a = 10 // local scope : BLOCK val
    const b = 20 // local scope
    // c = 30; // global scope
    // console.log(a); // global < local (BLOCK SCOPE)

}

// console.log(a); // global > local (GLOBAL SCOPE)
// console.log(b);
// console.log(c);


function one() {
    const username = "aditya"

    function two() {
        const website = "youtube"
        console.log(username); // Can access: The small one can ask from big one
        
    }
    // console.log(website); // Can't access: The big one can't ask from small one
    two()
}

// one()

if (true) {
    const username = "adityA"
    if (username === "adityA") {
        const website = "youtube"
        // console.log(`${username} ${website}`);
        
    }

    // console.log(website);
    
}

// console.log(username);

// +++++++++++++++++++++++++ interesting +++++++++++++++++++++++++ 


console.log(addone(5)) // using a function before declaration works in this style!

function addone(num) {
    return num + 1;
}

addTwo(5); // addone is a function call while addTwo is a LEGIT variable
            // which holds the function

const addTwo = function(num) {
    return num + 2;
}

