import {Teacher} from './classes/Teacher.js';

let teacher;

const nameTeacher = document.getElementById('nameTeacher');
const emailTeacher = document.getElementById('emailTeacher');
const newCourse = document.getElementById('newCourse');
const overScreen = document.getElementById('overScreen');
const form = document.getElementById('form');
const nameCourse = document.getElementById('nameCourse');
const numberClasses = document.getElementById('numberClasses')
const imageCourse = document.getElementById('imageCourse')
const cancel = document.getElementById('cancel');
const coursesContainer = document.getElementById('coursesContainer');

/**
 * It gets the user data from the database and then sets it in the local storage.
 */
function GetUserData() {
    axios.get(`http://localhost:3000/Users/${localStorage.getItem('idUser')}`)
    .then(res =>{
            return teacher = new Teacher(res.data.name, res.data.lastName, res.data.email, res.data.userName)
    }).then(data =>{
        SetDataUser(data);
        CreateCardCourse();
    })
}
GetUserData();

/**
 * SetDataUser is a function that takes a user object as an argument and sets the innerHTML of the
 * emailTeacher and nameTeacher variables to the user's email and name, respectively.
 * @param user - {
 */
function SetDataUser(user) {
    emailTeacher.innerHTML = `<i class="fa-solid fa-chalkboard-user"></i> ${user.getEmail()}`
    nameTeacher.innerHTML = `${user.getName()} ${user.getLastName()}`
}

newCourse.addEventListener('click', ()=>{
    overScreen.classList.remove('remove');
    overScreen.classList.add('overScreen');
});

/* An event listener that is listening for a submit event on the form. When the event is triggered, it
prevents the default action of the event, which is to submit the form. Then it creates a course
object with the values of the form. Then it calls the CreateCourse method on the teacher object.
Finally, it removes the overScreen class and adds the remove class. */
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const course = {
        nameCourse: nameCourse.value,
        quantityClasses: numberClasses.value,
        imageCourse: imageCourse.value
    }
    teacher.CreateCourse(course);
    CreateCardCourse();
    overScreen.classList.remove('overScreen');
    overScreen.classList.add('remove');
})

cancel.addEventListener('click', ()=>{
    overScreen.classList.remove('overScreen');
    overScreen.classList.add('remove');
});

function CreateCardCourse() {
    axios.get(`http://localhost:3000/Courses?q=${teacher.getName()}`)
    .then(res => res.data)
    .then(data =>{
        data.map((course)=>{
            const card = `
                <div class="card">
                    <p class="card-title">${course.name}</p>
                    <img class="card-img" src="${course.imageCourse}" alt="foto-course">
                    <div class="card-description">
                        <p class="text">Clases: ${course.classes}</p>
                        <input class="btn btn-green" type="button" value="Ver Detalles">
                    </div>
                </div>
            `
            coursesContainer.innerHTML += card
        });
    })
}