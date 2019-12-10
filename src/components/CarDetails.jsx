import React, {Component} from 'react';

class CarDetails extends Component {
    render() {
        const {car, submitted} = this.props;
        return(
            <div className='carDetails'>
                {car.make !== "" && <> 
                    {car.registration} {car.make} {car.model} {car.yearOfManufacture}
                </>}
                {car.make === "" && submitted && <> Fetching Details </>}
            </div>  
        )
    }
}

export default CarDetails;