import React, {Component} from 'react';
import NumberBox from '../components/NumberBox';
import Select from '../components/Select';

class CarDetailsForm extends Component {
    render() {
        const {submitCarDetails, carValue, changeSeats, handDrive} = this.props
        const drives = ["", "Left Hand Drive", "Right Hand Drive"]
        return(
            <div className="form">
                <form onSubmit={submitCarDetails}>
                    <NumberBox
                        title="Car Value"
                        type="number"
                        doChange={carValue}
                        name="Value"
                        min="0"
                        max="10000000"
                    />
                    <NumberBox
                        title="Number of Seats"
                        type="number"
                        doChange={changeSeats}
                        name="Seats"
                        min="0"
                        max="9"
                    />
                    <Select title="What hand drive is it?" options={drives} onChange={handDrive}/>
                    <input className="btn-md btn-success centreButtonSubmit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default CarDetailsForm