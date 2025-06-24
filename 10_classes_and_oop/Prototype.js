let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidey's power is ${this.spiderman}`);
        
    }
}

Object.prototype.aditya = function () {
    console.log(`Hi, Aditya is present in all objects!`);
    
} // For ALL Objects

Array.prototype.heyAditya = function() {
    console.log(`Greetings from Aditya!`);
    
}
// heroPower.aditya()

// myHeroes.aditya() // As arrays inherit from objects
// myHeroes.heyAditya();
// heroPower.heyAditya() // No such method

// inheritance

const User = {
    name: "person",
    email: "person@people.com"
}

const Teacher = {
    makeVid: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport // TASupport inherits TeachingSupport (outdated)
}

Teacher.__proto__ = User; // Teacher inherits User (outdated)

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher); // (Child, Parent)

String.prototype.trueLength = function() {
    // console.log(this); // [String: 'aditya    ']
    // console.log(`${this}`); // 'aditya    ' (exluding ')
    
    console.log(`True length is: ${this.trim().length}`);
    
}

let myName = "aditya    ";
myName.trueLength()
"                    e               ".trueLength();