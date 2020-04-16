import React from 'react'

const footer = (props) => {

    return (

        <footer className="footer">
            <div className="container text-center">
                <a className="btn btn-default btn-round btn-md btn-icon" href="https://www.linkedin.com/in/godson-ositadinma-23036110b/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a className="btn btn-default btn-round btn-md btn-icon" href="https://github.com/prestigegodson" target="_blank" rel="noopener noreferrer" title="Follow me on Github">
                    <i className="fa fa-github"></i>
                </a>
                <a className="btn btn-default btn-round btn-md btn-icon" href="https://medium.com/@prestigegodson" target="_blank" rel="noopener noreferrer" title="Follow me on Medium">
                    <i className="fa fa-medium"></i>
                </a>
                <a className="btn btn-default btn-round btn-md btn-icon" href="https://www.instagram.com/prestige_godson/" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram">
                    <i className="fa fa-instagram"></i>
                </a>
            </div>
            <div className="h4 title text-center">Godson Ositadinma</div>
            <div className="text-center text-muted">
                <p>Built with React & <i style={{color: 'red'}} className="fa fa-heart"></i></p>
            </div>
        </footer>
    );
}

export default footer;