import React, { Component } from 'react'
import axios from 'axios'
import Transition from 'react-transition-group/Transition'

import locationImageUrl from '../../assets/images/location.png'

class Contact extends Component {

    state = {
        showContactForm: true,
        submittingForm: false,
        form: {
            name: "",
            subject: "",
            replyTo: "",
            message: ""
        }
    }

    nameChangeHandler = (e) => {

        let form = { ...this.state.form }
        form.name = e.target.value;
        this.setState({ form })
    }

    subjectChangeHandler = (e) => {

        let form = { ...this.state.form }
        form.subject = e.target.value;
        this.setState({ form })
    }

    replyToChangeHandler = (e) => {

        let form = { ...this.state.form }
        form.replyTo = e.target.value;
        this.setState({ form })
    }

    messageChangeHandler = (e) => {

        let form = { ...this.state.form }
        form.message = e.target.value;
        this.setState({ form })
    }

    formSubmitHandler = (e) => {

        e.preventDefault();

        let body = {
            name: this.state.form.name,
            from_email: this.state.form.replyTo,
            to_email: 'prestigegodson@gmail.com',
            subject: this.state.form.subject,
            message: this.state.form.message
        }

        this.setState({ submittingForm: true })

        axios.post(process.env.REACT_APP_EMAIL_BASE_URL, body, {})
            .then(response => {
                console.log(response)
                this.setState({ showContactForm: false, submittingForm: false })
            })
            .catch(error => {
                console.log(error)
                this.setState({ showContactForm: false, submittingForm: false })
            })


    }

    renderSuccessCard = () => {


        const defaultStyle = {
            transition: `opacity .5s`,
            opacity: 0,
        }

        const transitionStyles = {
            entering: { opacity: '0.7' },
            entered: { opacity: '1' },
            exiting: { opacity: '0' },
            exited: { opacity: '0', display: 'none' },
        };

        return (
            <Transition in={!this.state.showContactForm} timeout={2000} unmountOnExi>
                {state => (
                    <div className="jumbotron jumbotron-fluid" style={{ ...defaultStyle, ...transitionStyles[state] }}>
                        <div className="container">
                            <h1 className="display-4">Message Sent <i style={{ color: 'green' }} className="fa fa-check-circle"></i> </h1>
                            <p className="lead">Hello dear, I have received your message and I will get back to you with the speed of light... sips <i style={{ color: 'brown' }} className="fa fa-coffee"></i></p>
                        </div>
                    </div>
                )}
            </Transition>

        );
    }
    renderContactForm = () => {

        let button = <button className="btn btn-primary" type="submit">Send</button>
        if (this.state.submittingForm) {
            button = (
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Sending...
                </button>
            )
        }
        return (
            <div className="card mb-0" >
                <div className="h4 text-center title">Contact Me</div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-body">
                            <form action="" method="POST" onSubmit={this.formSubmitHandler}>
                                <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="input-group"><span className="input-group-addon"><i className="fa fa-user-circle"></i></span>
                                            <input className="form-control" type="text" name="name" onChange={this.nameChangeHandler} value={this.state.form.name} placeholder="Name" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="input-group"><span className="input-group-addon"><i className="fa fa-file-text"></i></span>
                                            <input className="form-control" type="text" name="Subject" onChange={this.subjectChangeHandler} value={this.state.form.subject} placeholder="Subject" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                            <input className="form-control" type="email" name="_replyto" onChange={this.replyToChangeHandler} value={this.state.form.replyTo} placeholder="E-mail" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" onChange={this.messageChangeHandler} value={this.state.form.message} placeholder="Your Message" required="required"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {button}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="mb-0"><strong>Address </strong></p>
                            <p className="pb-2">Victory Estate, Ago palace way, Isolo, Lagos</p>
                            <p className="mb-0"><strong>Phone</strong></p>
                            <p className="pb-2">+234-0816-433-4657</p>
                            <p className="mb-0"><strong>Email</strong></p>
                            <p>prestigegodson@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {

        return (
            <div className="section" id="contact">
                <div className="cc-contact-information" style={{ backgroundImage: `url(${locationImageUrl})` }}>
                    <div className="container">
                        <div className="cc-contact">
                            <div className="row">
                                <div className="col-md-9">
                                    <React.Fragment>
                                    {this.state.showContactForm ? this.renderContactForm() : null}
                                    {this.renderSuccessCard()}
                                    </React.Fragment>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;