const coding = ["js", "py", "ruby", "cpp", "java"]

// coding.forEach( function (ele) {
//     console.log(ele);
// } ) // callback fn has no name

// coding.forEach( (val) => {
//     console.log(val);    
// } )

// function printMe (item) {
//     console.log(item);   
// }

// coding.forEach(printMe) // pass reference, don't execute
// notice the missing () in printMe

// coding.forEach( (item, index, arr) => { //  Syntax: (ele, idx, arr)
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageExtension: "js"
    },
    {
        languageName: "python",
        languageExtension: "py"
    },
    {
        languageName: "c++",
        languageExtension: "cpp"
    },
    {
        languageName: "ruby",
        languageExtension: "rb"
    }
]

myCoding.forEach((obj) => {
    console.log(`The extension of ${obj.languageName} is ${obj.languageExtension}.`);
    
})