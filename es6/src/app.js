// [X] API : https://fcc-weather-api.glitch.me/
// [X] Include Geo-Loc
// [X] Only use ES6 and Axios
// [X] Use promise
// [X] Use Classes ES6

import axios from 'axios'


// const init = () => {
//     getWeatherData();
// }



// const getPosition = (options) => {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject, options)
//   })
// }

// // const getPosition = (options) => {

// //     return navigator.geolocation.getCurrentPosition((position) => {
// //         window.currentLat = position.coords.latitude;
// //         window.currentLong = position.coords.longitude;
// //     })

// // }



// const getWeatherData = () => {

//     getPosition()
//         .then((position) => {

//             axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
//                 .then((response) => {
//                     setWeather(response.data);
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                 })

//         })
//         .catch((err) => {
//             console.error(err.message)
//         })
// }



// const setWeather = (data) => {

//     var root = document.querySelector('#root')
//     var tpl = `
//         <h1>Free Code Camp Weather App</h1>
//         <p>${data.name}</p>
//         <p>${data.main.temp}°C</p>
//         <img src='${data.weather[0].icon}'/>
//     `

//     root.innerHTML = tpl

// }


// init();



class ModuleWeather {

    constructor() {
    }

    init() {
        this.getData();
    }


    getPosition() {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }


    getData() {

        this.getPosition()
            .then((position) => {

                axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
                    .then((response) => {
                        this.setWeather(response.data);
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            })
            .catch((err) => {
                console.error(err.message)
            })
    }


    setWeather(data) {
        console.log(data)

        var root = document.querySelector('#root')
        var tpl = `
            <h1>Free Code Camp Weather App</h1>
            <p>${data.name}</p>
            <p>${data.main.temp}°C</p>
            <img src='${data.weather[0].icon}'/>
        `

        root.innerHTML = tpl
    }

}


new ModuleWeather().init();