import React, {Component} from 'react';
import './App.css';
import Container from './containers/Container'; 
import {getVehicleByReg} from './Api';

class App extends Component {

  state = {
    car: {
      registration: "",
      make: "",
      model: "",
      yearOfManufacture: 2019,
      value: 0,
      numberOfSeats: 0
    },
  }

changeReg = event => {
  let car = this.state.car
  car.registration = event.target.value
  this.setState({car})
}

changeValue = event => {
  let car = this.state.car
  car.value = event.target.value
  this.setState({car})
}

changeSeats = event => {
  let car = this.state.car
  car.numberOfSeats = event.target.value
  this.setState({car})
}

getVehicleFromReg = event => {
  
  event.preventDefault();
  const registration = this.state.car.registration;

  getVehicleByReg(registration, response => {
      
      this.setState({ car: response })
      let car = this.state.car
      car.registration = registration
      this.setState({ car })
  })  
}

submitCarDetails = event => {
  event.preventDefault()
  alert("Car Submitted")
}

  render() {
    return (
      <div className="App">
        <Container 
          car={this.state.car}
          updateReg={this.changeReg}
          findByReg={this.getVehicleFromReg}
          submitted={this.state.submitted}
          carValue={this.changeValue}
          changeSeats={this.changeSeats}
          submitCarDetails={this.submitCarDetails}
        />
      </div>
    );
  }
}

export default App;
