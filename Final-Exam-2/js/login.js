import navbar from "../components/navbar.js";
import methods from "../components/api.js";

document.getElementById('navbar').innerHTML=navbar();

let users = JSON.parse(localStorage.getItem('users')) || [];
const handledata = (e) => {
    e.preventDefault();

    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    let Matched = users.filter(
        (ele) => ele.email == user.email && ele.password == user.password

    );

    if(Matched.length > 0){
        alert('Login Successfully');

        localStorage.setItem("username",Matched[0].username)

        localStorage.setItem("password",Matched[0].password)

        localStorage.setItem("isLogin",true)

        window.location.href ="/Final-Exam-2/index.html"
    }
    else{
        alert("Login Failed")
    }
};

document.querySelector('#userData').addEventListener('submit', handledata);