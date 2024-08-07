let users = []
let tsalary = Number(0)

const idmaker = () => {
    document.getElementById('tbody').innerHTML = ""

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].username

        let td2 = document.createElement('td')
        td2.innerHTML = users[i].email

        let td3 = document.createElement('td')
        td3.innerHTML = users[i].number

        let td4 = document.createElement('td')
        td4.innerHTML = users[i].salary

        tr.append(td1, td2, td3, td4)

        document.getElementById('tbody').append(tr)
    }
}
const handledata = (events) => {
    events.preventDefault();

    let username = document.getElementById('username').value;
    let number = document.getElementById('number').value;
    let salary = document.getElementById('salary').value;
    let email = document.getElementById('email').value;

    let user = {
        username: username,
        number: number,
        salary: salary,
        email: email,
    }

    users.push(user);
    idmaker();

    tsalary+=Number(salary);
    console.log(tsalary);

    document.getElementById('totalsalary').innerHTML =`Totalsalary: ${tsalary}`; 
}
document.getElementById("userdata").addEventListener("submit", handledata)
