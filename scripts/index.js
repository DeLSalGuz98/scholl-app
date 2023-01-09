import { Teacher } from "./classes/Teacher.js";

const listOfTeacher = [];
const form = document.getElementById('form');
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const userName = document.getElementById('userName');

// const denil = new Teacher("Denil", "Salas", "dlsg@gmail.com", "dlsg");

// denil.CreateCourse({nameCourse:"html", quantityClasses: 10});
// denil.CreateCourse({nameCourse:"css", quantityClasses: 18});
// console.log(denil);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    NewTeacher(name.value, lastName.value, email.value, userName.value);
    name.value = '';
    lastName.value = ''; 
    email.value = '';
    userName.value = '';
    console.log(listOfTeacher)
})

//Register new teachers 

function NewTeacher(teacherName, teacherLastName, teacherEmail, teacherUserName) {
    const newTeacher = new Teacher(teacherName, teacherLastName, teacherEmail, teacherUserName)
    listOfTeacher.push(newTeacher);
}

