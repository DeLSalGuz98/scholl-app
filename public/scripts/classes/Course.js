export class Course{
    /**
     * The constructor function is a function that is used to create an object.
     * @param name - type: string - The name of the course
     * @param teacher - type: string - the name of the teacher
     * @param quantityClasses - type: int - The number of classes that the course has.
     * @param imageCourse - type: string - The url of course reference image.
     */
    constructor(name, teacher, quantityClasses, imageCourse){
        this.name = name,
        this.teacher = teacher,
        this.quantityClasses = quantityClasses,
        this.imageCourse = imageCourse
        this.enrolled = []
    }
    //name
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    //teacher
    getTeacher(){
        return this.teacher;
    }
    setTeacher(teacher){
        this.teacher = teacher;
    }
    //quantityClasses
    getQuantityClasses(){
        return this.quantityClasses;
    }
    setQuantityClasses(number){
        this.getQuantityClasses = number;
    }
    //enrolled
    getEnrolled(){
        return this.enrolled;
    }
    /**
     * The function takes a student object as an argument and pushes it into the enrolled array.
     * @param student - The student object to be added to the enrolled array.
    */
    setEnrolled(student){
        this.enrolled.push(student);
    }
    SaveCourse(){
        axios({
            method: 'post',
            url: 'http://localhost:3000/Courses',
            data: {
                    name: this.name,
                    teacher: this.teacher,
                    classes: this.quantityClasses,
                    imageCourse: this.imageCourse
                }
        })
        // fetch('http://localhost:3000/Courses',{
        //     method: 'POST',
        //     body: JSON.stringify({
        //         name: this.name,
        //         teacher: this.teacher,
        //         classes: this.quantityClasses,
        //         imageCourse: this.imageCourse
        //     }),
        //     headers: {
        //         'Accept': 'appiclation/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
    }
}