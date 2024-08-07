let square=()=>{

    let num1=document.getElementById('num1').value; 

    let square=Number(num1)*Number(num1);

    document.getElementById('result').innerHTML=`Multiply of ${num1}*${num1}=${square}`
}