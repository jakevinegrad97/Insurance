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
      yearOfManufacture: 2019
    },

    submitted: false
  }

changeReg = event => {
  let car = this.state.car
  car.registration = event.target.value
  this.setState({car})
}

getVehicleFromReg = event => {
  
  event.preventDefault();
  const submitted = !this.state.submitted
  this.setState({submitted})
  const registration = this.state.car.registration;

  getVehicleByReg(registration, response => {
      
      this.setState({ car: response })
      let car = this.state.car
      car.registration = registration
      this.setState({ car })
  })  
  
  console.log(this.state.car)
}

  render() {
    return (
      <div className="App">
        <Container 
          car={this.state.car}
          updateReg={this.changeReg}
          findByReg={this.getVehicleFromReg}
          submitted={this.state.submitted}
        />
      </div>
    );
  }
}

export default App;
