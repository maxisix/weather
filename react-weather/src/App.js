import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {}



  setStateAsync(state) {

    return new Promise((resolve) => {
      this.setState(state, resolve)
    })

  }



  async componentDidMount() {

    this.getPosition()
      .then((position) => {
        this.setStateAsync({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })

        this.getApiData();
      })
      .catch((err) => {
        console.log(err)
      })


  }



  getPosition() {

    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })

  }



  getApiData() {

        axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${this.state.lat}&lon=${this.state.lng}`)
          .then((response) => {
            this.setStateAsync({
              name: response.data.name,
              temp: response.data.main.temp
            })
          })
          .catch((error) => {
          })

  }




  render() {
    return (
      <div className="App">
        <h1>Free Code Camp Weather App</h1>
        <p>{this.state.name}</p>
        <p>{this.state.temp}</p>
      </div>
    );
  }



}

export default App;
