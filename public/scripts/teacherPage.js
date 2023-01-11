import {Teacher} from './classes/Teacher.js';

let teacher;

const nameTeacher = document.getElementById('nameTeacher');
const emailTeacher = document.getElementById('emailTeacher');
const newCourse = document.getElementById('newCourse');
const overScreen = document.getElementById('overScreen');
const form = document.getElementById('form');
const nameCourse = document.getElementById('nameCourse');
const numberClasses = document.getElementById('numberClasses')
const cancel = document.getElementById('cancel');

function GetUserData() {
    axios.get(`http://localhost:3000/Users/${localStorage.getItem('idUser')}`)
    .then(res =>{
            return teacher = new Teacher(res.data.name, res.data.lastName, res.data.email, res.data.userName)
    }).then(data =>{
        SetDataUser(data)
    })
}

GetUserData();

function SetDataUser(user) {
    emailTeacher.innerHTML = `<i class="fa-solid fa-chalkboard-user"></i> ${user.getEmail()}`
    nameTeacher.innerHTML = `${user.getName()} ${user.getLastName()}`
}

newCourse.addEventListener('click', ()=>{
    overScreen.classList.remove('remove');
    overScreen.classList.add('overScreen');
});
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const course = {
        nameCourse: nameCourse.target.value,
        numberClasses: numberClasses.target.value
    }
    console.log(course)
})
cancel.addEventListener('click', ()=>{
    overScreen.classList.remove('overScreen');
    overScreen.classList.add('remove');
});