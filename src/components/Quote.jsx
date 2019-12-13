import React from 'react';

const Quote = ({quote, resubmitSummary}) => (
    <div>
        <button className="btn-sm btn-danger centreButton" onClick={resubmitSummary}>Previous</button>
        <div style={{marginTop: "10%"}}> </div>
        <h2>Your Quote: £{quote}</h2>
    </div>
)

export default Quote