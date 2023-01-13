import { Student } from "./classes/Student.js";


UserIsLooged();

function UserIsLooged(){
    const islogged = localStorage.getItem('statusCount');
    const idUser = parseInt(localStorage.getItem('idUser'));
    if(islogged == 'isLooged'){
        console.log('usuario loggeado')
    }
    else{
        location.href = 'http://127.0.0.1:5500/public/signin.html'
    }
}