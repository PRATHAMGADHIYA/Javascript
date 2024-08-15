setInterval(() => {
    let monthsnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let daysnames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let today = new Date();

    document.getElementById("Date").innerHTML = daysnames[today.getDay()] + " " + today.getDate() + " " + monthsnames[today.getMonth()] + " " + today.getFullYear();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    if(h < 12){
        console.log("AM");
    } 
    else{
        console.log("PM");
    }
    h = h % 12;
    h = h
    m = m
    s = s

    document.getElementById("hour").innerHTML = h;

    document.getElementById("minute").innerHTML = m;

    document.getElementById("second").innerHTML = s;
    
}, 1000);
