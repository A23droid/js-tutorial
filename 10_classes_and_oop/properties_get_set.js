// Old way of getters and setters

function User (email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email;
        },
        set: (value) => {
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: (value) => {
            this._password = value;
        }
    })
}

const Me = new User("me@me.com", "MeHehe");
console.log(Me.password);
