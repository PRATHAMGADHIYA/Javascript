let users=[];

const handledata=(e)=>{
     e.preventDefault();

    let user={
        question:document.getElementById('question').value,
        option1:document.getElementById('option1').value,
        option2:document.getElementById('option2').value,
        option3:document.getElementById('option3').value,
        option4:document.getElementById('option4').value,
        answer:document.getElementById('answer').value
    }    
}
document.getElementById('Answer').addEventListener('submit',handledata)

