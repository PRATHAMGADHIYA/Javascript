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

    let Matched = users.filter(
        (ele) => ele.email == user.email && ele.password == user.password

    );

    if(Matched.length > 0){
        alert('Login Successfully');

        localStorage.setItem("username",Matched[0].username)

        localStorage.setItem("password",Matched[0].password)

        localStorage.setItem("isLogin",true)

        window.location.href ="/Project-1/index.html"
    }
    else{
        alert("Login Failed")
    }
};

document.querySelector('#userData').addEventListener('submit', handledata);