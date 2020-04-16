import React from 'react'
import backgroundImageUrl from '../../assets/images/bg_new.jpg'
import profileImage from '../../assets/images/godson.jpg'

const profile = (props) => {

    return (
        <div className="profile-page">
            <div className="wrapper">
                <div className="page-header page-header-small" filter-color="green">
                    <div className="page-header-image" data-parallax="true" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
                    <div className="container">
                        <div className="content-center">
                        <div className="cc-profile-image">
                            <a href="/#"><img src={profileImage} alt="Profile" /></a>
                        </div>
                        <div className="h2 title">Godson Ositadinma</div>
                        <p className="category text-white">Software Engineer, Thinker</p>
                        {/* <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a>
                        <a className="btn btn-primary" href="/#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a> */}
                        <a className="btn btn-primary smooth-scroll mr-2" href="https://www.linkedin.com/in/godson-ositadinma-23036110b/" target="_blank" rel="noopener noreferrer">Hire Me</a>
                        <a className="btn btn-primary" href="https://drive.google.com/open?id=19BxBtJ3ip6Z0-OhLdppk9MacRrn91yAB" target="_blank" rel="noopener noreferrer">Download CV</a>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="button-container">
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://www.linkedin.com/in/godson-ositadinma-23036110b/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://github.com/prestigegodson" rel="noopener noreferrer" target="_blank" title="Follow me on Github">
                                    <i className="fa fa-github"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://medium.com/@prestigegodson" rel="noopener noreferrer" target="_blank" title="Follow me on Medium">
                                    <i className="fa fa-medium"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://www.instagram.com/prestige_godson/" rel="noopener noreferrer" target="_blank" title="Follow me on Instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default profile