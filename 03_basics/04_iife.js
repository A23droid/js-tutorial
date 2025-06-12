// Immediately Invoked Function Expressions (IIFE)

(function chai() { // Named IIFE
    console.log(`DB CONNECTED`);
})(); // This ; tells iife to stop 

// fun() == ()() | iife is used to stop the pollution of global var in blocks

((name) => { // unnamed iife
    console.log(`DB CONNECTED 2 ${name}`)
})("Aditya")