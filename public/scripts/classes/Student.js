import { User } from "./User.js";

export class Student extends User{
    /**
     * The constructor function is a method that is called automatically when a new object is created.
     * @param name - String
     * @param lastName - String
     * @param email - email of the user
     * @param userName - string
     */
    constructor(name, lastName, email, userName){
        super(name, lastName, email, userName),
        this.tag = 'student'
        this.category = 'free'
    }
    getCategory(){
        return this.category;
    }
    /**
     * The function sets the student category to a new category.
     * @param newCategory - The new category to set the category to.
     */
    setCategory(newCategory){
        this.category = newCategory;
    }
    /**
     * The function enrollCourse takes a parameter nameCourse and maps through the ListOfCourses array.
     * If the name of the course is equal to the nameCourse parameter, then the function sets the
     * enrolled property of the course to the name of the student.
     * @param nameCourse - The name of the course you want to enroll in.
     */
    enrollCourse(nameCourse){
        // ListOfCourses.map((course)=>{
        //     if(course.name == nameCourse){
        //         course.setEnrolled(this.name)
        //     }
        // });
    }
    SaveStudent(){
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