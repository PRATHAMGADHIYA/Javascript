const storeData = (e) => {
    e.preventDefault(); 

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    alert('Data stored successfully!');
}
