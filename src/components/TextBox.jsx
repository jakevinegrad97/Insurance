import React, {Component} from 'react';

class TextBox extends Component {
    render() {
        const {title, doChange, doSubmit} = this.props;
        return(
            <div className="form">
                <div className="formText">{title}</div>
                <form onSubmit={doSubmit}>
                    <input className="formBox" type="text" onChange={doChange} maxLength="8"/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default TextBox;