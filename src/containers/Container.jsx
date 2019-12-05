import React, {Component} from 'react';
import TextBox from '../components/TextBox';
import CarDetails from '../components/CarDetails';

class Container extends Component {
    render() {
        const {car, updateReg, findByReg, carValue, submitCarDetails, changeSeats} = this.props
        return (
            <div className="container">
                <div className="form">
                    <form onSubmit={findByReg}>
                        <TextBox 
                            title="Enter Registration" 
                            type="text"
                            car={car}
                            doChange={updateReg}
                            name="Reg"
                        />
                        <input type="submit" value="Search"/>
                    </form>
                </div>
                <CarDetails
                    car={car}
                />
                
                {car.model !== "" && <>
                <hr />
                <div className="form">
                    <form onSubmit={submitCarDetails}>
                        <TextBox
                            title="Car Value"
                            type="number"
                            car={car}
                            doChange={carValue}
                            name="Value"
                        />
                        <TextBox
                            title="Number of Seats"
                            type="number"
                            car={car}
                            doChange={changeSeats}
                            name="Seats"
                        />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                </>}
            </div>
        )
    }
}

export default Container;