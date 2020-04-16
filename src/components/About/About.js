import React from 'react'

const about = (props) => {

    return (
        <div className="section" id="about">
            <div className="container">
                <div className="card" >
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">About</div>
                                <p>
                                    I am a Software Engineer based in Lagos Nigeria. I love building robust and scalable software application that solves the everyday business challenge. 
                                </p>
                                <p>My software Engineering experience cut across building software applications ranging from Fintech, EduTech, and AgricTech solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Basic Information</div>
                                {/* <div className="row">
                                    <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                    <div className="col-sm-8">24</div>
                                </div> */}
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                    <div className="col-sm-8">prestigegodson@gmail.com</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                                    <div className="col-sm-8">+234 8064334657</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                                    <div className="col-sm-8">Victory Estate, Ago palace way, Isolo, Lagos</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                                    <div className="col-sm-8">English</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default about;