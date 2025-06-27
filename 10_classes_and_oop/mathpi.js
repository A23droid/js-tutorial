const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // (obj, "prop")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5; // Does nothing
// console.log(Math.PI);

const Laptop = {
    name: "Lenovo Ideapad slim 5i",
    processorSeries : 'H',
    priceInK: 78.7,
    isAvailable: true,

    orderLaptop: function(){
        console.log("Laptop is booked for order!!");
        
    }
}

// Laptop.name = "Lenovo slim 3i"


// writable – if true , the value can be changed, otherwise it's read-only. 
// enumerable – if true , then listed in loops, otherwise not listed.
//              (iterable = values; enumerable = properties) 
// configurable – if true , the property can be deleted and these attributes 
//                can be modified, otherwise not.

// configurable and writable are NOT representing the same thing. 
// configurable means property descriptor and existence. 
// writable means property value only.


// Object.defineProperty(Laptop, 'name', {
//     writable: false,
//     configurable: false    
// })


Object.defineProperty(Laptop, 'processorSeries', {
    writable: false,
    enumerable: false,
    configurable: false    
})

console.log(Object.getOwnPropertyDescriptor(Laptop, 'name'));

// for (const [key, value] of Laptop) { // error: Laptop ain't iterable
//     console.log(`${key} : ${value}`);
    
// }

for (const [key, value] of Object.entries(Laptop)) { // Work-around
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
            
    }
    
}