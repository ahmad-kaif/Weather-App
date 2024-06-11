const form = document.querySelector('.search')
const input = document.querySelector('#input');
const click = document.querySelector('#click');
let city = document.querySelector('#city');
const temp =document.querySelector('#temp');
const speed =document.querySelector('#speed');
const humidity =document.querySelector('#humidity');
const pic = document.querySelector('#pic');
console.log(pic);

let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let cityName;
let key = '7b7393e188f16ef866c4c7861f882689'


async function checkWeather(cityName){
    const response = await fetch(url + cityName + `&appid=${key}`);
    let data = await response.json();
    console.log(data);
    console.log(input.value);
    city.innerHTML=data.name;
    temp.innerHTML= `${Math.round(data.main.temp)} °C`;
    speed.innerHTML=`Speed: ${data.wind.speed} km/h`;
    humidity.innerHTML = `Humidity: ${data.main.humidity} %`;

    if(data.weather[0].main == 'Clouds'){
        pic.src = './images/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
        pic.src = './images/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
         pic.src = './images/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
         pic.src = './images/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
         pic.src = './images/mist.png'
    }
    


}

form.addEventListener('submit',(e)=>{
    // console.log(input.value);
    e.preventDefault()
    checkWeather(input.value)
    
})