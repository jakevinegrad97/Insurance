import React, {Component} from 'react';

class NumberBox extends Component {
    render() {
        const {title, doChange, name, max, min, value} = this.props;
        return(
            <div>
                <div className="formText">{title}</div>
                <input className="formBox" value={value} type="number" onChange={doChange} min={min} max={max} name={name}/>
            </div>
        )
    }
}

export default NumberBox;