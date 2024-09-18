import getValue, { createTag } from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let Data = JSON.parse(localStorage.getItem("Data")) || [];

const mapper = (data) => {
    document.getElementById("Datalist").innerHTML = "";
    data.map((ele) => {

        let name = createTag("h2", ele.name)
        let age = createTag("h5", ele.age)
        let grid = createTag("p", ele.grid)
        let email = createTag("p", ele.email)
        let course = createTag("p", ele.course)
        let fee = createTag("p", ele.fee)
        let div = document.createElement("div")
        div.append(name, age, grid, email, course, fee)
        document.getElementById("Datalist").append(div)
    })
}
mapper(Data)
console.log(Data);


const handlesort = (orderby) => {
    if (orderby == "lth") {
        let temp = Data.sort((a, b) => a.fee - b.fee);

        mapper(temp);
    }
    else {
        let temp = Data.sort((a, b) => b.fee - a.fee);

        mapper(temp);
    }

};

const handlecategory = () => {

    let temp = Data.filter((ele) => ele.course == course);

    mapper(temp);
};
document.getElementById("lth").addEventListener("click", () => handlesort("lth"));
document.getElementById("htl").addEventListener("click", () => handlesort("htl"));
document.getElementById("age").addEventListener("click", () => handlesort("age"));

const search = (e) => {
    e.preventDefault();

    let searchvalue = getValue("#search");
    let temp = Data.filter((ele) => ele.Name.toLowerCase().includes(searchvalue.toLowerCase()));

    mapper(temp);
}

document.getElementById("search").addEventListener("submit", search);

document.getElementById("search").addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

    }

});



