class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(mail) {
        this._email = mail;
    }

    get password() { // For every getter, make a setter
        return `${this._password}aditya`; // Here, password has no significance
                                            // _password is now the var. of concern
    }

    set password(value){
        this._password = value; // different variable => no issue
    }

    // _email & _password => Private prop
}

const aditya = new User("aditya@pill.ai", "123qwe");
console.log(aditya.password);
