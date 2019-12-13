import React from 'react';

const Summary = ({car, person}) => (
    <div className="details">
        <h1>Car Details</h1>
        <h3>{car.registration} {car.make} {car.model} {car.yearOfManufacture}</h3>
        <h3>£{car.value} {car.numberOfDoors} doors {car.handDrive}</h3>
        <h1>Your Details</h1>
        <h3>{person.name} {person.postcode} {person.noClaims} years no claims</h3>
    </div>
)

export default Summary