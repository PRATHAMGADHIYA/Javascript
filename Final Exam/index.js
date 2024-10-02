import methods from "./components/api.js";

const handledata = async(e) => {
    e.preventDefault();

    let user = {
        question: document.getElementById('question').value,
        option1: document.getElementById('option1').value,
        option2: document.getElementById('option2').value,
        option3: document.getElementById('option3').value,
        option4: document.getElementById('option4').value,
        answer: document.getElementById('Answer').value
    }
    console.log(user);

    await methods.post("user",user)

    await uimaker(user);
}

document.getElementById('add-data').addEventListener('submit', handledata);

const uimaker = async (data) => {

    let Data= await methods.get();

    data.map((ele) => {
        let div = document.createElement('div');

        let question = document.createElement('h2');
        question.innerHTML = ele.question;

        let option1 = document.createElement('button');
        option1.innerHTML = ele.option1;

        let option2 = document.createElement('button');
        option2.innerHTML = ele.option2;

        let option3 = document.createElement('button');
        option3.innerHTML = ele.option3;

        let option4 = document.createElement('button');
        option4.innerHTML = ele.option4;

        let answer = document.createElement('button');
        answer.innerHTML = ele.answer;

        div.append(question, option1, option2, option3, option4, answer);

        document.getElementById('question-list').append(div);
    });
}
uimaker();
