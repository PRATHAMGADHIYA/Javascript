import navbar from "../components/navbar.js";

document.getElementById('navbar').innerHTML= navbar();


let isLogin = localStorage.getItem("isLogin") || false;

if (isLogin == false) {
    window.location.href = "/Final-Exam-2/pages/login.html"
}


let products = JSON.parse(localStorage.getItem("products")) || [];

const handleSubmit = (e) => {
    e.preventDefault();

    let product = {
        title:document.getElementById('title').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value,
        category: document.getElementById('category').value
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

};

document.getElementById("productData").addEventListener("submit", handleSubmit);