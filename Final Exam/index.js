
import methods from "./components/api.js";
import navbar from "./components/navbar.js";

document.getElementById("navbar").innerHTML= navbar()


const uimaker = async () => {
    let Data = await methods.get();  

    document.getElementById('question-list').innerHTML = '';

    Data.map((ele) => {
        let div = document.createElement('div');

        let question = document.createElement('h2');
        question.innerHTML = ele.question;

        let option1 = document.createElement('p');
        option1.innerHTML = ele.option1;

        let option2 = document.createElement('p');
        option2.innerHTML = ele.option2;

        let option3 = document.createElement('p');
        option3.innerHTML = ele.option3;

        let option4 = document.createElement('p');
        option4.innerHTML = ele.option4;

        div.append(question, option1, option2, option3, option4);

        document.getElementById('question-list').append(div);
    });
}

await uimaker();
