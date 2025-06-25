class User {
    constructor(username) {
        this.username =username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
        
    }

    static createId() { // deprives end-users the access to this function
        return `123`;
    }
}

const aditya = new User("aditya");
// console.log(aditya.createId()); // Error

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const iPhone = new Teacher("iphone", "i@phone.com");
iPhone.logMe()
console.log(iPhone.createId()); // Error
