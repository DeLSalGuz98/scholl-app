const url = 'http://localhost:3000/Teachers?q=m2sg';

const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email= document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user = {
        userName: userName.value,
        email: email.value
    }
    axios.get(`http://localhost:3000/Users?q=${user.userName}`)
    .then(res =>{
        localStorage.setItem('idUser', res.data[0].id)
        if(res.data[0].tag == 'teacher'){
            location.href = 'http://127.0.0.1:5500/public/teacherPage.html'
        }else{
            location.href = 'http://127.0.0.1:5500/public/studentPage.html'
        }
    });
});