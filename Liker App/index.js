let count = localStorage.getItem('count') || 0;

const handlecount = (e) => {
    e.preventDefault();
    count++;
    document.getElementById('count').innerHTML = count;

    localStorage.setItem("count", count);
}
document.getElementById("counter").addEventListener("click", handlecount);

let count2 = localStorage.getItem('count2') || 0;

const handlecount2 = (e) => {
       
    count2++;
    document.getElementById('count2').innerHTML = count2;

    localStorage.setItem("count2", count2);
}
document.getElementById("counter2").addEventListener("click", handlecount2);

let count3 = sessionStorage.getItem('count3') || 0;

const handlecount3 = (e) => {
    e.preventDefault();
    count3++;
    document.getElementById('count3').innerHTML = count3;

    sessionStorage.setItem("count3", count3);
}
document.getElementById("counter3").addEventListener("click", handlecount3);

let count4 = sessionStorage.getItem('count4') || 0;

const handlecount4 = (e) => { 
    e.preventDefault();
    count4++;
    document.getElementById('count4').innerHTML = count4;

    sessionStorage.setItem("count4", count4);
}
document.getElementById("counter4").addEventListener("click", handlecount4);

