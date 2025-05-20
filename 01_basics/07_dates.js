// Dates

let myDate = new Date()
// console.log(myDate); // 2025-05-15T09:30:46.263Z
// console.log(myDate.toString()); // Thu May 15 2025 09:31:54 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu May 15 2025
// console.log(myDate.toISOString()); // 2025-05-15T09:33:54.319Z
// console.log(myDate.toJSON()); // 2025-05-15T09:34:49.351Z
// console.log(myDate.toLocaleString()); // 5/15/2025, 9:35:20 AM
// console.log(myDate.toLocaleString("en-IN")); // 15/5/2025, 9:35:50 am
// console.log(myDate.toLocaleDateString()); // 5/15/2025
// console.log(myDate.toLocaleDateString("en-IN")); // 15/5/2025
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025, 0, 15); // YYYY, MM (0-indexed), DD
//  Wed Jan 15 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date(2025, 0, 15, 5, 3) // 15/1/2025, 5:03:00 am

// let myCreatedDate = new Date("2023-10-14") // 14/10/2023, 12:00:00 am | MM  is 1-indexed

let myCreatedDate = new Date("10-23-2006") // 23/10/2006, 12:00:00 am
// console.log(myCreatedDate.toLocaleString("en-IN")); 

// Always compare in ms

let myTimeStamp = Date.now() // 1747302635785
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // 1161561600000 (in ms)

// console.log(Math.floor(Date.now()/1000)); // in sec

let newDate = new Date()
console.log(newDate); // 2025-05-15T10:11:15.932Z
console.log(newDate.getMonth()); // 4 => 0-indexed

console.log(newDate.toLocaleString('default', {
    weekday: "short"
}));
