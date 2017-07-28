import Rx from 'rx';
import 'rx-dom';

const source = Rx.DOM.geolocation.getCurrentPosition();

const getPosition$ = source.subscribe(
    (pos) => {

        const getData$ = Rx.DOM.get(`https://fcc-weather-api.glitch.me/api/current?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
            .subscribe(
                (data) => {
                    var data = JSON.parse(data.response);
                    var root = document.querySelector('#root')
                    var tpl = `
                        <h1>Free Code Camp Weather App</h1>
                        <p>${data.name}</p>
                        <p>${data.main.temp}°C</p>
                    `

                    root.innerHTML = tpl
                },
                (err) => {
                    console.log(err)
                }
            )

    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log('completed')
    }
)


// const getData$ = Rx.DOM.get(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
//     .subscribe(
//         (data) => {
//             console.log(data)
//         },
//         (err) => {
//             console.log(err)
//         }
//     )