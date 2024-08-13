let form = document.querySelector('form');
let main = document.querySelector('.main');
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let checkStatus = 0

    let user = JSON.parse(localStorage.getItem("user")) ?? [];

    if (checkStatus === 0) {
        user.push({
            'name': name,
            'age': age,
            'email': email,
            'phone': phone
        });

        localStorage.setItem("user", JSON.stringify(user));
    }
    uimaker();
});

let uimaker = () => {
    let user = JSON.parse(localStorage.getItem("user")) ?? [];
    let data = "";
    for (let index = 0; index < user.length; index++) {
        let element = user[index];
        data += `<div class="item">
            <span onclick="removeData(${index})">&times;</span>
    
            <h5>Name</h5>
            <div>${element.name}</div>
    
            <h5>Age</h5>
            <div>${element.age}</div>
    
            <h5>Email</h5>
            <div>${element.email}</div>
    
            <h5>Phone</h5>
            <div>${element.phone}</div>
        </div>`;
    }
    
    main.innerHTML = data;
};

let removeData = (index) => {
    let data = JSON.parse(localStorage.getItem("user")) ?? [];

    data.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(data));
    uimaker();
};

document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("user");
    uimaker();
});

uimaker();



