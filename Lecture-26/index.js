import apimethod from "./components/api.js";

let id = -1;

const add = async (e) => {
    e.preventDefault();

    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        course: document.getElementById('course').value,
    };

    if (id === -1) {
        await post(user);
    } else {
        await apimethod.patch(user, id);
    }

    await studentdata();
    
};

document.getElementById('form').addEventListener('submit', add);

const post = async (user) => {
    await apimethod.post(user);
};

const deletedData = async (id) => {
    await apimethod.delete(id);
};

const update = (item) => {
    document.getElementById('name').value = item.name;
    document.getElementById('email').value = item.email;
    document.getElementById('number').value = item.number;
    document.getElementById('course').value = item.course;
    document.getElementById('submit').value = "Update";
    id = item.id;
}

const studentdata = async () => {
    let users = await apimethod.get();

    document.getElementById('dlp').innerHTML = '';

    users.map((item) => {
        let div = document.createElement('div');
        div.className = 'student';

        let name = document.createElement('h2');
        name.innerHTML = item.name;

        let email = document.createElement('h3');
        email.innerHTML = item.email;

        let number = document.createElement('h4');
        number.innerHTML = item.number;

        let course = document.createElement('p');
        course.innerHTML = item.course;

        let btn = document.createElement('button');
        btn.innerHTML = 'Delete';

        let btn2 = document.createElement('button');
        btn2.innerHTML = 'Update';
        btn2.addEventListener('click', () => update(item));

        btn.addEventListener('click', async () => {
            await deletedData(item.id);
            await studentdata();
        });

        div.append(name, email, number, course, btn, btn2);
        document.getElementById('dlp').append(div);
    });
};

studentdata();
