import React, {Component} from 'react';

class CarDetails extends Component {
    render() {
        const {car, submitted} = this.props;
        return(
            <div>
                {car.make !== "" && <> 
                    <ul>
                        <li>{car.registration}</li>
                        <li>{car.make}</li>
                        <li>{car.model}</li>
                        <li>{car.yearOfManufacture}</li>
                    </ul>
                </>}
                {car.make === "" && submitted && <> Fetching Details </>}
            </div>  
        )
    }
}

export default CarDetails;