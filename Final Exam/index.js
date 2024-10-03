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

        let btndiv = document.createElement('div');
        btndiv.className = 'button-div';

        let option1 = document.createElement('button');
        option1.innerHTML = `A- ${ele.option1}`

        let option2 = document.createElement('button');
        option2.innerHTML = `B-${ele.option2}`;

        let option3 = document.createElement('button');
        option3.innerHTML = `C-${ele.option3}`;

        let option4 = document.createElement('button');
        option4.innerHTML = `D-${ele.option4}`;
        btndiv.append(option1, option2, option3, option4);

        div.append(question, btndiv);

        document.getElementById('question-list').append(div);

        const answer = ele.answer;
    });
}

await uimaker();
