const axios = require('axios');




const init = () => {
    getWeatherData();
}



const getPosition = (options) => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}



const getWeatherData = () => {


    getPosition()
        .then((position) => {

            axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
                .then((response) => {
                    setWeather(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })

        })
        .catch((err) => {
            console.error(err.message)
        })
}



const setWeather = (data) => {

    var root = document.querySelector('#root')
    var tpl = `
        <h1>Free Code Camp Weather App</h1>
        <p>${data.name}</p>
        <p>${data.main.temp}°C</p>
        <img src='${data.weather[0].icon}'/>
    `

    root.innerHTML = tpl

}


init();