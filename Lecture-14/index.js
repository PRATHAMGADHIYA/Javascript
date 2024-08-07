const handledata = (e) => {
    e.preventDefault();

    let user = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value
    }
    if (user.name.length < 2) {
        alert('Username must be at least 2 characters long')
        return;
    }
    if (user.number.length != 10) {
        alert('Please enter a valid 10 digits number')
        return;
    }
    if (user.password.length < 6) {
        alert('Password must be at least 6 characters long')
        return;
    }
    
    console.log(user);
}
document.getElementById('userdata').addEventListener('submit', handledata)