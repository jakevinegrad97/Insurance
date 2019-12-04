import React, {Component} from 'react';
import TextBox from '../components/TextBox';
import CarDetails from '../components/CarDetails';

class Container extends Component {
    render() {
        const {car, updateReg, findByReg, submitted} = this.props
        return (
            <div className="container">
                <TextBox 
                    title="Enter Registration" 
                    car={car}
                    doChange={updateReg}
                    doSubmit={findByReg}
                />
                <CarDetails
                    car={car}
                    submitted={submitted}
                />
            </div>
        )
    }
}

export default Container;