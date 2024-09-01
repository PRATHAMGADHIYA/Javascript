import getValue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let users = JSON.parse(localStorage.getItem('users')) || [];
const handledata = (e) => {
    e.preventDefault();

    let user = {
        email: getValue("#Email"),
        password: getValue("#Password")
    };

    let isMatched = users.filter(
        (ele) => ele.Email == user.Email && ele.Password == user.Password

    );

    alert('Login Successfully');
    window.location.href = "/Project-1/index.html";

};

document.querySelector('#userData').addEventListener('submit', handledata);