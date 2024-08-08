let users = []

const userdelete = (index) => {
    users.splice(index, 1);
}
const idmaker = () => {

    for (let i = 0; i < users.length; i++) {
        document.getElementById("tbody").innerHTML = ""

        let tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = i + 1

        let td1 = document.createElement('td')
        td1.innerHTML = users[i].number

        let td2 = document.createElement('td')
        td2.innerHTML = users[i].name

        let td3 = document.createElement('td')
        td3.innerHTML = users[i].price

        let td4 = document.createElement('td');
        td4.innerHTML = "Delete";
        td4.addEventListener('click', () => userdelete(i))

        tr.append(td, td1, td2, td3, td4);
        tbody.append(tr);
    }
}

const salesdata = (e) => {
    e.preventDefault();

    let user = {
        number: document.getElementById('number').value,
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
    }
    users.push(user);
    console.log(users);
    idmaker();
}
document.getElementById('Salesdata').addEventListener('submit', salesdata)

