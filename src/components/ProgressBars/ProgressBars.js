import React from 'react'

import ProgressBar from './ProgressBar'

const ProgressBars = (props) => {

    
    let skills = props.skills.map((skill, index) => renderSkill(index, skill.language, skill.percentage))

    return (
        <div className="row">
            {skills}
        </div>
    );
    
}

const renderSkill = (key, language, percentage) => {

    return (
        <div key={key} className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">{language}</span>
                <div className="progress">
                    <ProgressBar percentage={percentage} />
                    <span className="progress-value">{`${percentage}%`}</span>
                </div>
            </div>
        </div>
    )
}



export default ProgressBars;