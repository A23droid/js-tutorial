function SetUsername(username) {
    // complex DB calls 
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username); // .call() holds the reference and 
                                      // passing 'this' as an arg ensures that child
                                      // func values goes to the 'this' of parent
                                      // func attributes
    this.email = email;
    this.password = password;
}

const userOne = new createUser("user1", "user1@discord.com", "abc2@133");
console.log(userOne);
