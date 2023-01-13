const url = 'http://localhost:3000/Teachers?q=m2sg';

const form = document.getElementById('form');
const userName = document.getElementById('userName');
const pass= document.getElementById('pass');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user = {
        userName: userName.value,
        pass: pass.value
    }
    axios.get(`http://localhost:3000/Users?q=${user.userName}`)
    .then(({data}) =>{
        if(data.length > 0 && user.pass === data[0].password){
            localStorage.setItem('idUser', data[0].id)
            localStorage.setItem('statusCount', data[0].statusCount)
            location.href = 'http://127.0.0.1:5500/public/teacherPage.html';
        }else{
            alert('error on credentials');
            location.reload();
        }
        // localStorage.setItem('idUser', res.data[0].id)
        // if(res.data[0].tag == 'teacher'){
        //     location.href = 'http://127.0.0.1:5500/public/teacherPage.html'
        // }else{
        //     location.href = 'http://127.0.0.1:5500/public/studentPage.html'
        // }
    });
});