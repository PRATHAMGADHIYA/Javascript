let users = [];
const handledata = (e) => {
    e.preventDefault();

    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value
    }

    // username
    if (user.name.length > 2) {
        document.getElementById('name').classList.add('valid');
    }
    else {
        document.getElementById('name').classList.add('invalid');
    } 

    // Password regex
    let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regexPassword.test(user.password.value)) {
        document.getElementById('password').classList.add('valid');
    }
    else {
        document.getElementById('password').classList.add('invalid');
    }

    // number regex
    let regexnumber = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
    if (regexnumber.test(user.number.value)) {
        user.number.classList.add('valid');
    }
    else {
        user.number.classList.add('invalid');
    }
    users.push(user);
    console.log(users);
};

document.getElementById('formdata').addEventListener('submit', handledata);