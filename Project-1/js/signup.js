import getValue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let users = JSON.parse(localStorage.getItem('users')) || []
const handledata = (e) => {
    e.preventDefault();

    let user = {
        username: getValue("#Username"),
        email: getValue("#Email"),
        password: getValue("#Password")
    };
   users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "/Project-1/index.html"

}

document.querySelector('#userData').addEventListener('submit', handledata);