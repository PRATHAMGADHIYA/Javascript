import getValue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()
document.getElementById("navbar").innerHTML = getValue()

let isLogin= localStorage.getItem("isLogin")|| false;

if(isLogin == false){

    window.location.href="/Project-1/pages/login.html"
}


