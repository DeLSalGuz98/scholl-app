import { Student } from "./classes/Student.js";
import { Course } from "./classes/Course.js";

let user;
const courses = [];

const emailUser = document.getElementById('emailUser');
const nameUser = document.getElementById('nameUser');
const coursesContainer = document.getElementById('coursesContainer');
const overScreen = document.getElementById('overScreen');
const close = document.getElementById('close');
const detailContainer = document.getElementById('detailContainer');
const signOut = document.getElementById('signOut');
const getPremium = document.getElementById('getPremium');

UserIsLooged();

function UserIsLooged(){
    const islogged = localStorage.getItem('statusCount');
    const idUser = parseInt(localStorage.getItem('idUser'));
    if(islogged == 'isLooged'){
        getDataUser(idUser);
        getCourses();
    }
    else{
        location.href = 'http://127.0.0.1:5500/public/signin.html'
    }
}

function getDataUser(idUser) {
    axios.get(`http://127.0.0.1:3000/Users/${idUser}`)
    .then(res =>{
        const dataUser = {
            name: res.data.name,
            lastName: res.data.lastName,
            email: res.data.email,
            userName: res.data.userName,
            statusCount: res.data.statusCount,
            password: res.data.password
        }
        user = new Student(dataUser);
        setDataUser(user)        
    })
    .catch(err=>{
            console.log(err)
    })
}

function setDataUser(user) {
    emailUser.innerHTML = `<i class="fa-solid fa-chalkboard-user"></i> ${user.getEmail()}`
    nameUser.innerHTML = `${user.getName()} ${user.getLastName()}`
}

function getCourses(){
    axios.get(`http://127.0.0.1:3000/Courses`)
    .then(({data}) =>{
        data.map((e)=>{
            const course = new Course(
                e.id,
                e.name,
                e.teacher,
                e.classes,
                e.imageCourse,
                e.enrolled
            );
            courses.push(course);
        })
    })
    .then(()=>{
        showAllCourses();
    });
}

function showAllCourses(){
    courses.map((e)=>{
        coursesContainer.innerHTML += `
        <div class="card">
            <p class="card-title">${e.getName()}</p>
            <img class="card-img" src="${e.getImageCourse()}" alt="foto-course">
            <div class="card-description">
                <p class="text">Clases: ${e.getQuantityClasses()}</p>
                <p class="text">Teacher: ${e.getTeacher()}</p>
                <input class="btn btn-green" type="button" id="details" name="${e.getId()}" value="Ver Detalles">
            </div>
        </div>
        `
    });
}

coursesContainer.addEventListener('click', (e)=>{
    if(e.target.id == 'details'){
        overScreen.classList = 'overScreen'
        const idCourse = e.target.name;
        showDetails(idCourse);
        console.log()
    }
});

close.addEventListener('click', (e)=>{
    e.preventDefault();
    overScreen.classList = 'remove'
});

function showDetails(idCourse) {
    courses.find(e =>{ 
        if(e.getId() == idCourse){ 
            const details = `
                <div class="courseDetail-one">
                    <img class="courseDetail-img" src="${e.getImageCourse()}" alt="course-foto">
                    <p class="courseDetail-name">${e.getName()}</p>
                    <div class="courseDetail-text">
                        <p>Clases: ${e.getQuantityClasses()}</p>
                        <p class="text">Teacher: ${e.getTeacher()}</p>
                    </div>
                </div>
                <div class="courseDetail-two">
                    <div class="enrolled">
                        <p>Enrolled List</p>
                        <ul class="enrolled-list">
                        ${
                            e.enrolled.map(e=>{
                                return`
                                    <li class="enrolled-item radius-5">${e.name}<i class="fa-solid fa-graduation-cap"></i>
                                    </li> 
                                `
                            })
                        }
                        </ul>
                    </div>
                    <input class="btn btn-green" id="enroll" name="${e.getId()}" type="button" value="Enroll">
                </div>
            `
            detailContainer.innerHTML = details
        } 
    })
}

detailContainer.addEventListener('click', (e)=>{
    if(e.target.id == 'enroll'){
        courses.find(course =>{ 
            if(course.getId() == e.target.name){
                course.setEnrolled({name: user.getName()})
                course.EnrollStudent()
            } 
        })

    }else{
        overScreen.classList = 'remove'
    }
})
//signout

signOut.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.setItem('statusCount', 'isUnlogged');
    localStorage.removeItem('idUser');
    location.reload();
});

getPremium.addEventListener('click',()=>{
    alert("doesn't exist premium courses, so enjoy your free count");
});