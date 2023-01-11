import { User } from "./User.js";
import { Course } from "./Course.js";
import { ListOfCourses } from "../DB/listArrays.js";

export class Teacher extends User{
    /**
     * The constructor function is a function that is called when a new object is created.
     * @param name - string
     * @param lastName - String
     * @param email - string
     * @param userName - string
     * @param courses - an array of courses
     */
    constructor(name, lastName, email, userName){
        super(name, lastName, email, userName),
        this.tag = 'teacher'
        this.courses = ListOfCourses
    }
    getCourses(){
        return this.cousers;
    }
    /**
     * Create a new course object, add it to the courses array, and return the new course object.
     * @param nameCourse - The name of the course
     * @param quantityClasses - number of classes 
     */
    CreateCourse({nameCourse, quantityClasses}){
        const newCourse = new Course(nameCourse, this.name, quantityClasses);
        ListOfCourses.push(newCourse);
    }
    /**
     * It's a function that sends a POST request to the server with the data that the user has entered
     * in the form.
     */
    SaveTeacher(){
        const userData = {
            name: this.name,
            lastName: this.lastName,
            email: this.email,
            userName: this.userName,
            tag: this.tag
        }
        axios({
            method: 'post',
            url: 'http://localhost:3000/Users',
            data: userData
        })
        .then(res => console.log(res));
    }
}   