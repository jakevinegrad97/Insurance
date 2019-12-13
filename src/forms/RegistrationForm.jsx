import React from 'react';
import TextBox from '../components/TextBox';

const RegistrationForm = ({car, findByReg, updateReg}) => (
    <div className="form">
        <form onSubmit={findByReg}>
            <TextBox 
                title="Enter Registration" 
                doChange={updateReg}
                name="Reg"
                maxLength="8"
                value={car.registration}
            />
            <input className="btn-md btn-success centreButtonSubmit" type="submit" value="Search"/>
        </form>
    </div>
)

export default RegistrationForm