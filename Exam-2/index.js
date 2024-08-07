let users = []
let totalsalary = Number(0)
let totalemployee = Number(0)

const idmaker = () => {
    document.getElementById("tbody").innerHTML = ""

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = i + 1

        let td1 = document.createElement('td')
        td1.innerHTML = users[i].name

        let td2 = document.createElement('td')
        td2.innerHTML = users[i].email

        let td3 = document.createElement('td')
        td3.innerHTML = users[i].Exepirence

        let td4 = document.createElement('td');
        td4.innerHTML = users[i].department

        let td5 = document.createElement('td');
        td5.innerHTML = users[i].level

        let td6 = document.createElement('td')
        td6.innerHTML = users[i].salary

        let td7 = document.createElement('td');
        td7.innerHTML = "Remove";
        td7.addEventListener('click', () => handleDelete(i, users[i].salary))


        tr.append(td, td1, td2, td3, td4, td5, td6, td7)

        document.getElementById("tbody").append(tr)
    }
}

const handleDelete = (index, salary) => {
    users.splice(index, 1);
    totalsalary = salary;
    idmaker();
}

const fireemployee = () => {
    users = []
    document.getElementById('tbody').innerHTML = ""
    totalsalary = 0;
    idmaker();
}


const handledata = (events) => {
    events.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let Exepirence = document.getElementById('Exepirence').value
    let department = document.getElementById('department').value;
    let salary = document.getElementById('salary').value;

    if (Exepirence <= 5 && Exepirence >= 0) {
        level = "Junior"
    } else {
        level = "Senior"
    }


    let user = {
        name: name,
        email: email,
        Exepirence: Exepirence,
        department: department,
        level: level,
        salary: salary,
    }
    users.push(user);
    idmaker();

    totalsalary += Number(salary);

    totalemployee += 1;

    document.getElementById('totalsalary').innerHTML = `Totalsalary:${totalsalary}`
    document.getElementById('totalemployee').innerHTML = `Totalemployee:${totalemployee}`
}
document.getElementById('Userdata').addEventListener('submit', handledata);
document.getElementById('fireemployee').addEventListener("click", fireemployee);