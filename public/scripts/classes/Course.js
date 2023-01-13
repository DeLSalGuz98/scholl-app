export class Course{
    /**
     * The constructor function is a function that is used to create an object.
     * @param name - type: string - The name of the course
     * @param teacher - type: string - the name of the teacher
     * @param quantityClasses - type: int - The number of classes that the course has.
     * @param imageCourse - type: string - The url of course reference image.
     */
    constructor(id, name, teacher, quantityClasses, imageCourse, enrolled){
        this.id = id
        this.name = name,
        this.teacher = teacher,
        this.quantityClasses = quantityClasses,
        this.imageCourse = imageCourse,
        this.enrolled = enrolled
    }
    // id
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
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
    //quantityClasses
    getImageCourse(){
        return this.imageCourse;
    }
    setImageCourse(newImage){
        this.imageCourse = newImage;
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
    EnrollStudent(){
        axios({
            method: 'patch',
            url: `http://localhost:3000/Courses/${this.id}`,
            data: {
                    enrolled: this.enrolled
                }
        })
    }
    SaveCourse(){
        axios({
            method: 'post',
            url: 'http://localhost:3000/Courses',
            data: {
                    name: this.name,
                    teacher: this.teacher,
                    classes: this.quantityClasses,
                    imageCourse: this.imageCourse,
                    enrolled: this.enrolled
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