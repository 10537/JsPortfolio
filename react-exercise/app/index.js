import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const key = "170261d3df4ed0262a39e8eee3ee4b01";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: 'Medellin',
      country_code: 'CO',
    }
  }

  componentDidMount(){
    this.grabWeather(this.state.city, this.state.country_code);
  }

  grabWeather(city, country_code){
      fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${key}&q=${city},${country_code}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          description: json.weather[0].description
        })
      });
  }
  render() {
    return (
      <div>
        <h1>Weather for {this.state.city}, {this.state.country_code}</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
