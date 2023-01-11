/* The User class is a blueprint for creating user objects. */
export class User{
    /**
     * The constructor function is a function that is called when an object is created from a class.
     * @param name - String
     * @param lastName - String
     * @param email - the email of the user
     * @param userName - The user name of the user.
     */
    constructor(name, lastName, email, userName){
        this.name = name,
        this.lastName = lastName,
        this.email = email,
        this.userName = userName
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
    setUSerName(userName){
        this.userName = userName;
    }
}