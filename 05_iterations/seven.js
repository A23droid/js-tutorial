const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10 )

const newNums = myNumbers
                        .map((num)=>num*10) // this will get values from myNumbers
                        .map( (num) => num +1) // this will get values by prev. map
                        .filter( (num) => num >= 40 )
console.log(newNums);

