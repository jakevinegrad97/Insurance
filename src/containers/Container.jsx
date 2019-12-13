import React, {Component} from 'react';
import CarDetails from '../components/CarDetails';
import RegistrationForm from '../forms/RegistrationForm';
import CarDetailsForm from '../forms/CarDetailsForm';
import PersonDetailsForm from '../forms/PersonDetailsForm';
import Summary from '../components/Summary';
import Quote from '../components/Quote';

class Container extends Component {
    render() {
        const {car, updateReg, findByReg, carValue, submitCarDetails,
             changeSeats, handDrive, regSubmitted, carSubmitted, resubmitReg,
             resubmitCarDetails, updatePersonDetails, changeName, person,
            changePostcode, personSubmitted, resubmitPersonDetails, getQuote,
             quoteSubmitted, quote, resubmitSummary} = this.props
        return (
            <div className="container">
                {!regSubmitted && <> 
                    <RegistrationForm car={car} updateReg={updateReg} findByReg={findByReg}/>
                </>}
                {(regSubmitted && !carSubmitted) && <>
                    <button className="btn-sm btn-danger centreButton" onClick={resubmitReg}>Previous</button>
                    <CarDetails
                        car={car}
                    />
                    <CarDetailsForm submitCarDetails={submitCarDetails} carValue={carValue} changeSeats={changeSeats} handDrive={handDrive} car={car}/>
                </>}
                {(carSubmitted && !personSubmitted) && <>
                    <button className="btn-sm btn-danger centreButton" onClick={resubmitCarDetails}>Previous</button>
                    <PersonDetailsForm onSubmit={updatePersonDetails} changeName={changeName} person={person} changePostcode={changePostcode}/>
                </>}
                {(personSubmitted && !quoteSubmitted) && <>
                    <button className="btn-md btn-danger centreButton" onClick={resubmitPersonDetails}>Previous</button>
                    <Summary car={car} person={person} />
                    <div style={{marginBottom: "10%"}}> </div>
                    <button id="margin" className="btn-md btn-success centreButton" onClick={getQuote}>Get Quote!</button>
                </>}
                {quoteSubmitted && <>
                    <Quote quote={quote} resubmitSummary={resubmitSummary} />
                </>}
            </div>
        )
    }
}

export default Container;