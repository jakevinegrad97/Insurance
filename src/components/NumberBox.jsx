import React, {Component} from 'react';

class NumberBox extends Component {
    render() {
        const {title, doChange, name, max, min} = this.props;
        return(
            <div>
                <div className="formText">{title}</div>
                <input className="formBox" type="number" onChange={doChange} min={min} max={max} name={name}/>
            </div>
        )
    }
}

export default NumberBox;