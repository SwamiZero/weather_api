const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.humidity');
const form = document.querySelector('.locationinput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');


let cityInput = 'London';

cities.forEach((city) => {
    city.addEventListener('click',(e) =>{
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";


    })
})

form.addEventListener('submit', (e)=>{
    if(search.ariaValueMax.length = =0){


        alert("Please type a City name")
    }

    else {
        cityInput = search.value;
        fetchWeatherData();
        search.value="";
        app.style.opacity = "0";
    }
    e.preventDefault();

})


function dayOfTheWeek(day,month,year){
 const weekday = [ "Sunday",
  "Monday","Tuesday",
  "Wednesday","Thursday","Friday", "Saturday"];
   return weekday[new Date(`${day}/${month}/${year}`).getDay()];

  
}

function fetchWeatherData(){

    fetch(`https://www.weatherapi.com/v1/current.json?key=0811769571514352acb35943230307=${cityInput}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        temp.innerHTML = data.current.temp_c + "&#176";
        conditionOutput.innerHTML = data.crrent.condition.text;



        const date = date.location.localtime;
        const y = parseInt(date.substr(0,4));
        const m = parseInt(date.substr(5,2));
        const d = parseInt(date.substr(8,2));
        const time  =date.substr(11);


        dateOutput.innerHTML = `${dayOfTheWeek(d,m,y)} ${d},${m} ${y}`
        timeOutput.innerHTML = time;

        nameOutput.innerHTML = date.location.name;
        const iconId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
        icon.src = "./icons/" + iconId



        cloudOutput.innerHTML = data.current.cloud + "%";
        humidityOutput.innerHTML = data.current.humidity + "%"
        windOutput.innerHTML = data.current.wind_kph + "km/h"
      

        let timeOfDay = "day";
        const code = data.current.condition.code;

        if(!data.current.is_day){
            timeOfDay = "night"
        }
        if(code==1000){
         app.style.backgroundImage = `url(./images/${timeOfDay}/117.jpg)`;
            btn.style.background = "#e5ba92"
            if(TimeOfDay == "night"){
                btn.style.background = "#181e27"
            }
        }
        else if (
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282 ||
            code == 1120 ||
        ){
            app.styl.backgroundImage = `url(./images/${timeOfDay}/119.jpg)`
            btn.style.background = "#e5ba92"
        }





    )}