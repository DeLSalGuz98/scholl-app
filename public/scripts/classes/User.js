/* The User class is a blueprint for creating user objects. */
export class User{
    /**
     * The constructor function is a function that is called when an object is created from a class.
     * @param name - String
     * @param lastName - String
     * @param email - the email of the user
     * @param userName - The user name of the user.
     * @param statusCount - The user is logged or not
     * @param password - The user password
     */
    constructor(name, lastName, email, userName, statusCount, password){
        this.name = name,
        this.lastName = lastName,
        this.email = email,
        this.userName = userName,
        this.statusCount = statusCount
        this.password = password
    }
    // name
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    // lastname
    getLastName(){
        return this.lastName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
    //email
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    // username
    getUserName(){
        return this.userName;
    }
    setUserName(userName){
        this.userName = userName;
    }
    //statusCount
    getStatusCount(){
        return this.statusCount;
    }
    setStatusCount(status){
        this.statusCount = status;
    }
    // username
    getPassword(){
        return this.password;
    }
    setPassword(password){
        this.password = password;
    }
}