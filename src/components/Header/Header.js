import React, { Component } from 'react'
import { Link } from 'react-scroll'

class Header extends Component {

    state = {
        scrollPosition: 0,
        showDrawer: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.setScrollPosition)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.setScrollPosition)
    }

    setScrollPosition = () => {
        let position = window.pageYOffset;
        this.setState({
            scrollPosition: position
        })
    }

    openDrawer = () => {

        document.body.classList.toggle('nav-open', !this.state.showDrawer)
        this.setState({
            showDrawer: !this.state.showDrawer
        })
       
    }

    render() {

        let classes = ['navbar', 'navbar-expand-lg', 'fixed-top', 'bg-primary']
        let navButtonClasses = ['navbar-toggler','navbar-toggler']

        if (this.state.scrollPosition < 400) {
            classes.push('navbar-transparent')
        }

        if(this.state.showDrawer){
            navButtonClasses.push('toggled')
        }

        return (
            <header>
                <div className="profile-page sidebar-collapse">
                    <nav className={classes.join(' ')} color-on-scroll="400">
                        <div className="container">
                            <div className="navbar-translate"><a className="navbar-brand" href="/#" rel="tooltip">Godson CV</a>
                                <button className={navButtonClasses.join(' ')} onClick={this.openDrawer} type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse justify-content-end show" id="navigation">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link to='about' spy={true} smooth={true} duration={1000} className="nav-link" >About</Link></li>
                                    <li className="nav-item"><Link to='skill' spy={true} smooth={true} duration={1000} className="nav-link" >Skills</Link></li>
                                    <li className="nav-item"><Link to='experience' spy={true} smooth={true} duration={1000} className="nav-link">Experience</Link></li>
                                    <li className="nav-item"><Link to='contact' spy={true} smooth={true} duration={1000} className="nav-link">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }

}

export default Header