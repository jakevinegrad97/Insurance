import React, {Component} from 'react';
import CarDetails from '../components/CarDetails';
import RegistrationForm from '../forms/RegistrationForm';
import CarDetailsForm from '../forms/CarDetailsForm';

class Container extends Component {
    render() {
        const {car, updateReg, findByReg, carValue, submitCarDetails, changeSeats, handDrive, regSubmitted, resubmitReg} = this.props
        return (
            <div className="container">
                {!regSubmitted && <> 
                    <RegistrationForm car={car} updateReg={updateReg} findByReg={findByReg}/>
                </>}
                {regSubmitted && <>
                    <button className="btn-sm btn-danger centreButton" onClick={resubmitReg}>Different Registration</button>
                    <CarDetails
                        car={car}
                    />
                    <CarDetailsForm submitCarDetails={submitCarDetails} carValue={carValue} changeSeats={changeSeats} handDrive={handDrive} />
                </>}
            </div>
        )
    }
}

export default Container;