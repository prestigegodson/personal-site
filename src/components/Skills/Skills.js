import React from 'react'
import ProgressBar from '../ProgressBars/ProgressBars'

const skills = (props) => {

    let skillSet = [
        [{language : 'Java', percentage: '90'},{language : 'HTML', percentage : '90'}],
        [{language : 'NodeJS', percentage: '90'},{language : 'CSS', percentage : '60'}],
        [{language : 'Python', percentage: '90'},{language : 'React', percentage : '85'}],
        [{language : 'Postgresql', percentage: '90'},{language : 'MongoDB', percentage : '80'}]
    ];

    return (
        <div className="section" id="skill">
            <div className="container">
                <div className="h4 text-center mb-4 title">Professional Skills</div>
                <div className="card">
                    <div className="card-body">
                        {skillSet.map((skills, index) => <ProgressBar key={index} skills={skills} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skills;