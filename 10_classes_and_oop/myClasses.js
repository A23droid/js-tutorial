// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const discordUser = new User("disco", "disco@party.com", "dhfbk4");

// console.log(discordUser.encryptPassword());
console.log(discordUser.changeUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;

}

const fbUser = new User("faceBook", "fb@work.com", "123dhf1k4");

console.log(fbUser.encryptPassword());
console.log(fbUser.changeUsername());