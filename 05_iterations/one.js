// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

let myArray = ["ironman", "batman", "panther"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); 
}

// break and continue
// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}