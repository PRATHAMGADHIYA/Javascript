let users = []

const StudentDelete = (index) => {
    users.splice(index, 1);
    idmaker();
}

const handleSalesData = (Course, Count, Fees) => {

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = Course
    td2.innerHTML = Count
    td3.innerHTML = Fees
    tr.append(td1, td2, td3);

    document.getElementById("tbody1").append(tr)


const idmaker = () => {
    document.getElementById("tbody").innerHTML = ""

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = i + 1

        let td1 = document.createElement('td')
        td1.innerHTML = users[i].name

        let td2 = document.createElement('td')
        td2.innerHTML = users[i].grid

        let td3 = document.createElement('td')
        td3.innerHTML = users[i].Course

        let td4 = document.createElement('td');
        td4.innerHTML = users[i].Fees

        let td5 = document.createElement('td');
        td5.innerHTML = users[i].Number

        let td6 = document.createElement('td');
        td6.innerHTML = "Delete";
        td6.addEventListener('click', () => StudentDelete(i, users[i].Fees))

        tr.append(td, td1, td2, td3, td4, td5, td6)

        document.getElementById("tbody").append(tr)

        Sales[users[i].Course].Fees += users[i].Fees;
        Sales[users[i].Course].Count += 1
        

    }
    document.getElementById("tbody1").append(tr)

    handleSalesData("FullStack", Sales.FullStack.Count, Sales.FullStack.Fees)

}
   

}

const content = () => {
    let Sales = {
        FullStack: {
            Count: 0,
            Fees: 0
        },
        BackendDevelopment: {
            Count: 0,
            Fees: 0
        },
        FrontendDevelopment: {
            Count: 0,
            Fees: 0
        },
        FlutterDevelopment: {
            Count: 0,
            Fees: 0
        },
        UI_UX_Designer: {
            Count: 0,
            Fees: 0
        }
    }


    const studentdata = (events) => {
        events.preventDefault();

        let name = document.getElementById('name').value;
        let grid = document.getElementById('grid').value;
        let Course = document.getElementById('Course').value
        let Fees = document.getElementById('Fees').value;
        let Number = document.getElementById('Number').value;

        let user = {
            name: name,
            grid: grid,
            Course: Course,
            Fees: Fees,
            Number: Number,
        }

        if (user.name.length < 2) {
            alert('Name must be at least 2 characters long')
            return;
        }

        if (user.grid.length < 4) {
            alert('Name must be at least 4 digit long')
            return;
        }

        if (user.Number.length < 10) {
            alert('Name must be at least 10 digit long')
            return;
        }


        users.push(user);
        console.log(users);
        idmaker();

    }
}
document.getElementById('studentdata').addEventListener('submit', studentdata)
