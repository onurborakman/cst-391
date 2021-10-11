exports.User = (username, firstname, lastname, email, password) => {
    //Creating a User class
    class User {
        //Constructor
        constructor(username, firstname, lastname, email, password) {
            this.username = username;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.password = password;
        }
    }
    //Returning a created User from the parameters
    return new User(username, firstname, lastname, email, password);
}