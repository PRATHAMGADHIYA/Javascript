const getdata = async (cityName="surat") => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=f325f171f240c1035ba7d4dce7cf7e40&q=${cityName}&units=metric`);
    let res = await req.json();

    console.log(res);
    ui(res);
}

const weatherlocation = async (lat, lon) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f325f171f240c1035ba7d4dce7cf7e40&units=metric`);
    let res = await req.json();
    console.log(res);
    ui(res);
}

const ui = (data) => {
    let cityName = data.name;
    let temp = Math.round(data.main.temp);
    document.getElementById("container").innerHTML = `Temperature: ${temp}°C`;
    document.getElementById("box").innerHTML = `City:${cityName}`;
}

const handleweather = (e) => {
    e.preventDefault();
    let cityName = document.getElementById("cityname").value;

    getdata(cityName);
}

const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        weatherlocation(lat, lon);
    })
}
handleLocation();

document.getElementById("form").addEventListener("submit", handleweather);
 getdata()