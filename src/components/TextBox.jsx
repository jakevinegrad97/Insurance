import React, {Component} from 'react';

class TextBox extends Component {
    render() {
        const {title, doChange, type, name} = this.props;
        return(
            <div>
                <div className="formText">{title}</div>
                <input className="formBox" type={type} onChange={doChange} maxLength="8" name={name}/>
            </div>
        )
    }
}

export default TextBox;