import React, {Component} from 'react';
import TextBox from '../components/TextBox';

class PersonDetailsForm extends Component {
    render() {
        const {onSubmit, changeName, person, changePostcode} = this.props
        return(
            <div className="form">
                <form onSubmit={onSubmit}>
                    <TextBox 
                        title="Name"
                        doChange={changeName}
                        maxLength="30"
                        value={person.name}
                    />
                    <TextBox 
                        title="Postcode"
                        doChange={changePostcode}
                        maxLength="9"
                        value={person.postcode}
                    />
                    <input className="btn-md btn-success centreButtonSubmit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default PersonDetailsForm