import {getWeatherByCity, getForecastByCity} from './weather.js'
import {getSvg} from './svg_switcher.js'
import {getGeoLocation} from './geo.js'
import {min, max} from './minMax.js'

const button = document.querySelector('.button');
const input = document.querySelector('.form__field');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const days_short = {
    'Sun.' : 'Sunday' ,
    'Mon.' :'Monday',
    'Tue.' : 'Tuesday',
    'Wed.' : 'Wednesday',
    'Thu.' : 'Thursday',
    'Fri.' : 'Friday',
    'Sat.' : 'Saturday',
};

window.addEventListener('load', loadDataFromApi);
button.addEventListener('click', loadDataFromApi);
document.addEventListener('keypress', loadDataFromApi);

window.addEventListener('resize', (e) => {
    const weekDay = document.querySelectorAll('.week-day');
    weekDay.forEach((el) => {
        if (window.innerWidth < 850) {
            el.innerHTML = el.innerHTML.slice(0, 3) + '.';
        } else if (el.innerHTML[3] === '.'){
            el.innerHTML = days_short[el.innerHTML];
        }
    });
});

async function loadDataFromApi(e) {
    if (input.value === '' && e.type !== 'load') return;
    
    if (e.type === 'load' || e.key === 'Enter' || e.type === 'click') {
        let data;
        const cityName = (e.type === 'load') ? await getGeoLocation() : input.value;
        
        data = getWeatherByCity(cityName);
        data.then(data => {
            document.querySelector('#temperature').innerHTML = Math.round(data.main.temp);
            document.querySelector('#celsium').innerHTML = '°C';
            document.querySelector('#city-name').innerHTML = data.name;

            const time = new Date((data.dt + data.timezone - 3*60*60) * 1000);

            let timeField = days[time.getDay()] + ' '
                + ((time.getHours() < 10) ? '0' : '') + time.getHours() 
                + ':' + ((time.getMinutes() < 10) ? '0' : '') + time.getMinutes();

            document.querySelector('#time').innerHTML = timeField;
            document.querySelector('#description').innerHTML = data.weather[0].main;

            document.querySelector('#more-info :nth-child(1)').innerHTML = 'Cloudiness: ' + data.clouds.all + ' %';
            document.querySelector('#more-info :nth-child(2)').innerHTML = 'Humidity: ' + data.main.humidity + ' %';
            document.querySelector('#more-info :nth-child(3)').innerHTML = 'Wind: ' + data.wind.speed + ' m/sec';

            let img = document.createElement('img');
            img.src = getSvg(data.weather[0].icon);
            document.querySelector('.weather-info :nth-child(1)').innerHTML = '';
            document.querySelector('.weather-info :nth-child(1)').append(img);
        }).catch(err => alert(err));

        data = getForecastByCity(cityName, 'forecast');
        data.then(data => {
            const forecast = document.querySelector('.forecast');
            forecast.innerHTML = '';

            const arr = data.list;
            for (let i = 0; i < arr.length; i+=8) {
                let div = document.createElement('div');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                let div3 = document.createElement('div');
                let img = document.createElement('img');
                let br = document.createElement('br');

                br.classList.add('mini');
                img.src = getSvg(max(arr.slice(i, i + 7)).weather[0].icon);

                const time = new Date((arr[i].dt + data.city.timezone - 3*60*60) * 1000 );
                div1.append(days[time.getDay()]);
                div1.classList.add('week-day');
                div2.append(img);

                div3.append(Math.round(max(arr.slice(i, i + 7)).main.temp) + '°' + ' ');
                div3.append(br);
                div3.append(Math.round(min(arr.slice(i, i + 7)).main.temp) + '°');

                div.append(div1, div2, div3);
                forecast.append(div);
            }
        }).catch(err => {});
    }
}