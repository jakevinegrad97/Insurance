import React, {Component} from 'react';

class Select extends Component {
    render() {
        const {title, options, onChange, value} = this.props;
        return(
            <div>
                <div className="formText">{title}</div>
                <select value={value} name="Drive" className="formBox" onChange={onChange}>
                    {options.map(option => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Select;