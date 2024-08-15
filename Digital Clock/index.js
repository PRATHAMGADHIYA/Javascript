const clock=()=>{
    let monthsnames=['January', 'February', 'March', 'April','May', 'Jun', 'July', 'August', 'September', 'octomber', 'november', 'december'];
    let daysnames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurseday', 'Friday', 'saterday'];
    let today=new Date();

    document.getElementById("Date").innerHTML = (daysnames[today.getDay()]+""+ today.getDate()+""+monthsnames[today.getMonth()]+""+today.getFullYear());

    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();

    if (h<=11){
        console.log("AM");
    }
    else{
        console.log("PM");
    }

    h=h<12? '0'+h:h;
    m=m<10? '0'+m:m;
    s=s<10? '0'+s:s;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
}
var inter = setInterval(clock,400);