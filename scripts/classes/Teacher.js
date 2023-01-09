import { User } from "./User.js";
import { Course } from "./Course.js";

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
        super(name, lastName, email, userName)
        this.courses = []
    }
    getCourses(){
        return this.cousers
    }
    /**
     * Create a new course object, add it to the courses array, and return the new course object.
     * @param nameCourse - The name of the course
     * @param quantityClasses - number of classes 
     */
    CreateCourse({nameCourse, quantityClasses}){
        const newCourse = new Course(nameCourse, this.name, quantityClasses)
        this.courses.push(newCourse)
    }
}