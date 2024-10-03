import navbar from "../components/navbar.js";
import methods from "../components/api.js";


document.getElementById('navbar').innerHTML = navbar();

let users = JSON.parse(localStorage.getItem('users')) || []

const handledata = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        img: document.getElementById('img').value,

    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href="/Final-Exam-2/index.html"
}

document.querySelector('#userData').addEventListener('submit', handledata);