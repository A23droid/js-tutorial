class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Teacher extends User { // Child extends Parent
    constructor(username, email, password) {
        super(username); // super(inheritedTrait)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course has been added by ${this.username}.`);
        
    }
}

const Me = new Teacher("Aditya", "ap@ap.ap", "123234212");
// Me.logMe();

const You = new User("yourName", "you@yourDomain.com", "yourPwd");
// You.addCourse(); // Error

// You.logMe()

// console.log(You === Me); // false
// console.log(You === User); // false
// console.log(Teacher === Me); // false

// console.log(Me instanceof Teacher); // true
// console.log(You instanceof User); // true
// console.log(Me instanceof User); // true

console.log(Teacher instanceof User); // false
