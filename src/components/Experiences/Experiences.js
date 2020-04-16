import React, { Component } from 'react'
import Experience from './Experience/Experience'

class Experiences extends Component {

    render() {
        return (
            <div className="section" id="experience">
                <div className="container cc-experience">
                    <div className="h4 text-center mb-4 title">Work Experience</div>
                    {this.getExperience().map(exp => {
                        return <Experience 
                                key={exp.company}
                                company={exp.company} 
                                startDate={exp.startDate}
                                endDate={exp.endDate}
                                isPresent={exp.isPresent}
                                description={exp.description} />
                    })}
                </div>
            </div>
        );
    }

    getExperience = () => {

        return [
            {
                company: 'Andela',
                startDate: 'Dec 2019',
                endDate: '',
                isPresent: true,
                position: 'Software Engineer',
                description: {
                    texts: [
                        "Reinforcing SOLID and DRY principles to write clean code", 
                        "Writing scalable server-side application with java, NodeJS, and python",
                        "Constantly learning new technologies to evolve client solutions",
                        "Mentorship for new and aspiring software developers"
                    ]
                },
            },
            {
                company: 'Swifta',
                startDate: 'Feb 2017',
                endDate: 'Nov 2019',
                isPresent: false,
                position: 'Software Engineering Lead',
                description: {
                    texts: [
                        `At swifta I built various software solutions that solve business challenges, one of the biggest solutions is Omnibranches. Omnibranches is a fintech solution that is targeted on providing services to customers in remote parts of the country through a very large network of agent hierarchy.`
                    ]
                },
            },
            {
                company: 'Techie Planet',
                startDate: 'April 2016',
                endDate: 'Jan 2017',
                isPresent: false,
                position: 'Software Engineer',
                description: {
                    texts: [
                        'Built an application for real estate agency using Java EE and PostgreSQL, the application allows customer to pay for properties in installment and track payments due dates.',
                        'Maintained and extended existing family planning system used by the federal ministry of health, this apllication was built using PHP Zend Framework, and Yahoo YUI library. fpdashboard.ng',
                        'Planned sprint meeting with prouct owners to gather requirements and convert them to user stories.'
                    ]
                },
            },
            {
                company: 'NIIT',
                startDate: 'JAN 2015',
                endDate: 'FEB 2016',
                isPresent: false,
                position: 'Software Engineering Trainer',
                description: {
                    texts: [
                        'Trained and mentored students in software development using programming languages like Java, C#, and Php'
                    ]
                },
            },
        ];
    }
}

export default Experiences;