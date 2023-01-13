import { User } from "./User.js";

export class Student extends User{
    /**
     * The constructor function is a method that is called automatically when a new object is created
     */
    constructor({name, lastName, email, userName, statusCount, password}){
        super(name, lastName, email, userName, statusCount, password),
        this.tag = 'student'
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
            location.href = 'http://127.0.0.1:5500/public/studentPage.html';
        })
    }
}