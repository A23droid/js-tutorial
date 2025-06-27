const User = {
    _email: 'a@ap.com',
    _password: '!23',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const aditya = Object.create(User); // create() is a factory function

console.log(aditya.email); // email is in 'get', which is a prop, not method
