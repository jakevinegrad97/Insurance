import React, {Component} from 'react';

class TextBox extends Component {
    render() {
        const {title, doChange, name, maxLength, value} = this.props;
        return(
            <div>
                <div className="formText">{title}</div>
                <input className="formBox" onChange={doChange} maxLength={maxLength} name={name} value={value} required/>
            </div>
        )
    }
}

export default TextBox;