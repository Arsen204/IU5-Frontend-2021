async function getDataFromApi(params, option = 'weather') {
    const urlDefaultParams = {
        lang: 'en',
        units: 'metric',
        appid: '94bf8e9c966cf8e0a6a55e75b258f840',
    };

    const urlParams = Object.assign(params, urlDefaultParams);

    const url = new URL(`https://api.openweathermap.org/data/2.5/${option}`);
    Object.entries(urlParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    return fetch(url)
        .then(data => data.json())
        .then(data => {
            if(data.cod === '404') {
                throw Error(data.message);
            } else {
                return data;
            }
        });
}

async function getWeatherByCity(city) {
    return getDataFromApi({q: city});
}

async function getForecastByCity(city) {
    return getDataFromApi({q: city}, 'forecast');
}

export {
    getWeatherByCity,
    getForecastByCity,
};