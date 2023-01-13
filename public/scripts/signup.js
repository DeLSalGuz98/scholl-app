import { Student } from "./classes/Student.js";
import { Teacher } from "./classes/Teacher.js";
import { EncryptPass } from "./encryptPass.js";

const form = document.getElementById('form');
const typeUser = document.getElementById('typeUser');
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const userName = document.getElementById('userName');
const pass = document.getElementById('pass');

//get data user register
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    NewUser(
        typeUser.value, 
        name.value, 
        lastName.value, 
        email.value, 
        userName.value,
        pass.value
    );
    name.value = '';
    lastName.value = ''; 
    email.value = '';
    userName.value = '';
    pass.value = '';
})

//Register new teachers 
/**
 * If the typeUser is teacher, create a new teacher object and push it to the ListOfTeacher array,
 * otherwise create a new student object and push it to the ListOfStudent array.
 * @param typeUser - 'teacher' or 'student'
 * @param name - string
 * @param lastName - string
 * @param email - string
 * @param userName - string
 * @param studentCategory - 'student' or 'teacher'
 */
function NewUser(typeUser, name, lastName, email, userName, password) {
    const dataUser = {
        name: name, 
        lastName: lastName, 
        email: email, 
        userName: userName, 
        statusCount: 'isLooged', 
        password: EncryptPass(password)
    }
    if(typeUser == 'teacher'){
        const newTeacher = new Teacher(null,dataUser)
        newTeacher.SaveTeacher();
    }else{
        const newStudent = new Student(dataUser)
        newStudent.SaveStudent();
    }
}

