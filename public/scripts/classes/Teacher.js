import { User } from "./User.js";
import { Course } from "./Course.js";

export class Teacher extends User{
    /**
     * The constructor function is a method that is called automatically when a new instance of a class
     * is created.
     */
    constructor(id,{name, lastName, email, userName, statusCount, password},){
        super(name, lastName, email, userName, statusCount, password),
        this.id = id
        this.tag = 'teacher'
    }
    /**
     * Create a new course object, add it to the courses array, and return the new course object.
     * @param nameCourse - The name of the course
     * @param quantityClasses - number of classes 
     */
    CreateCourse({nameCourse, quantityClasses, imageCourse}){
        const newCourse = new Course(null,nameCourse, this.name, quantityClasses, imageCourse, []);
        newCourse.SaveCourse();
    }
    /**
     * It's a function that sends a POST request to the server with the data that the user has entered
     * in the form.
     */
    SaveTeacher(){
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/Users',
            data: {
                name: this.name,
                lastName: this.lastName,
                email: this.email,
                userName: this.userName,
                tag: this.tag, 
                statusCount: this.statusCount, 
                password: this.password
            }
        })
        .then(res =>{
            localStorage.setItem('idUser', res.data.id)
            localStorage.setItem('statusCount', res.data.statusCount)
        })
        .then(()=>{
            location.href = 'http://127.0.0.1:5500/public/teacherPage.html';
        })
        // .then(data =>{
        //     console.log(data)
        // })
    }
}   