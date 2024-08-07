let odd=()=>{

    let num1=document.getElementById('num1').value; 

    if(num1%2!=0){
        document.getElementById('result').innerHTML="it's odd number";
    }
    else{
        document.getElementById('result').innerHTML="it's even number";
    }

}