export class Course{
    /**
     * The constructor function is a function that is used to create an object.
     * @param name - type: string - The name of the course
     * @param teacher - type: string - the name of the teacher
     * @param quantityClasses - type: int - The number of classes that the course has.
     * @param enrolled - type: object - recive a student object
     */
    constructor(name, teacher, quantityClasses){
        this.name = name,
        this.teacher = teacher,
        this.quantityClasses = quantityClasses,
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
}