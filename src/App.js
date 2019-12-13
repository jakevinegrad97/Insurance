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

    person: {
      name: "",
      dateOfBirth: "",
      passedTest: "",
      postcode: "",
      noClaims: 0
    },

    quote: 0,

    regSubmitted: false,
    carSubmitted: false,
    personSubmitted: false,
    quoteSubmitted: false
  }

getQuote = () => {
  const quoteSubmitted = !this.state.quoteSubmitted
  this.setState({quoteSubmitted})
  const quote = 500 + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100) / 100
  this.setState({quote})
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

resubmitSummary = () => {
  const quoteSubmitted = !this.state.quoteSubmitted
  this.setState({quoteSubmitted})
}

resubmitCarDetails = () => {
  let carSubmitted = !this.state.carSubmitted
  this.setState({carSubmitted})
}

resubmitPersonDetails = () => {
  let personSubmitted = !this.state.personSubmitted
  this.setState({personSubmitted})
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

changeName = event => {
  let person = this.state.person
  person.name = event.target.value
  this.setState({person})
}

changePostcode = event => {
  let person = this.state.person
  person.postcode = event.target.value
  this.setState({person})
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
  const carSubmitted = !this.state.carSubmitted
  this.setState({carSubmitted})
}

changeHandDrive = event => {
  let car = this.state.car;
  car.handDrive = event.target.value
  this.setState({car})
}

updatePersonDetails = event => {
  event.preventDefault()
  const personSubmitted = this.state.personSubmitted
  this.setState({personSubmitted: !personSubmitted})
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
          personSubmitted={this.state.personSubmitted}
          resubmitReg={this.resubmitReg}
          updatePersonDetails={this.updatePersonDetails}
          changeName={this.changeName}
          person={this.state.person}
          resubmitCarDetails={this.resubmitCarDetails}
          changePostcode={this.changePostcode}
          resubmitPersonDetails={this.resubmitPersonDetails}
          quote={this.state.quote}
          getQuote={this.getQuote}
          quoteSubmitted={this.state.quoteSubmitted}
          resubmitSummary={this.resubmitSummary}
        />
      </div>
    );
  }
}

export default App;
