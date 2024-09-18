import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let Data = JSON.parse(localStorage.getItem("Data")) || []

const handedata = (e) => {
    e.preventDefault();

    let studentdata = {
        name:getValue("#name"),
        age:getValue("#age"),
        grid :getValue("#grid"),
        email:getValue("#email"),
        course:getValue("#course"),
        fee:getValue("#fee")
    }
    Data.push(studentdata);
    localStorage.setItem("Data", JSON.stringify(Data));
}



document.getElementById("studentData").addEventListener("submit", handedata);

