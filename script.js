const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;
flag=1;
let a=document.getElementById('storage');
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    openwindow();
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerHTML=text;
}
function openwindow(){
        a.style.width="50vw";
        a.style.height="50vh";
        document.getElementById('city-name').value="";
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp + '°');
    setInnerText('weather', temperature.weather[0].main);
    setInnerText('humidity','Humidity :'+ temperature.main.humidity + '%');
    setInnerText('wind','Wind Speed :' +temperature.wind.speed + ' km/h');
 }