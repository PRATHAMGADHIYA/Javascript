import navbar from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const handledata = async (e) => {
    e.preventDefault();
    
    let user = {
        question: document.getElementById("question").value,
        option1: document.getElementById("option1").value,
        option2: document.getElementById("option2").value,
        option3: document.getElementById("option3").value,
        option4: document.getElementById("option4").value,
    }
    console.log(user)
    await uimaker();
}

document.getElementById('question-list').addEventListener('submit', handledata);

