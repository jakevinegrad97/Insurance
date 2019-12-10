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
      numberOfSeats: 0,
      handDrive: ""
    },

    policy: {
      monthBought: 0,
      yearBought: 0
    },

    regSubmitted: false,
    carSubmitted: false
  }

changeReg = event => {
  let car = this.state.car
  car.registration = event.target.value
  this.setState({car})
}

resubmitReg = () => {
  let regSubmitted = !this.state.regSubmitted
  this.setState({regSubmitted})
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
      car.registration = registration.toUpperCase()
      const newSubmitted = !this.state.regSubmitted;
      this.setState({ car, regSubmitted: newSubmitted })
  })  
}

submitCarDetails = event => {
  event.preventDefault()
  const car = this.state.car
  alert("Car: {registration: " + car.registration 
  + ", make: " + car.make
  + ", model: " + car.model
  + ", year: " + car.yearOfManufacture
  + ", value: £" + car.value
  + ", numberOfSeats: " + car.numberOfSeats
  + ", hand-drive: " + car.handDrive + "/}")
}

changeHandDrive = event => {
  let car = this.state.car;
  car.handDrive = event.target.value
  this.setState({car})
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
          handDrive={this.changeHandDrive}
          regSubmitted={this.state.regSubmitted}
          carSubmitted={this.state.carSubmitted}
          resubmitReg={this.resubmitReg}
        />
      </div>
    );
  }
}

export default App;
