import React from 'react'

const experience = (props) => {

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" >
                    <div className="card-body cc-experience-header">
                        <p>{props.startDate} - {props.isPresent ? 'Present' : props.endDate} </p>
                        <div className="h5">{props.company}</div>
                    </div>
                </div>
                <div className="col-md-9" >
                    <div className="card-body">
                        <div className="h5">{props.position}</div>
                        {props.description.texts.map(txt => <p>{txt}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default experience;