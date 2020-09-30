import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Reseller.css';

class Reseller extends Component {
    render() {
        return (
            <div>
                <HelmetProvider>
                <Helmet>
                    <title>{this.props.root}</title>
                </Helmet>
                <section className="d-flex justify-content-between pb-5 pt-5 reseller-bgnd">
                    <div className="beam reseller-txt">
                        <div className="reseller-firstcont">
                            <h1>Join Us To Grow</h1> 
                            <p className="mb-5">
                                Become our partner and be a reseller of <br/>
                                HORECA PMS in your area to gain monetary benefits 
                            </p>
                            <a href="#start" id="start-btn" className="gsent">Get Started</a>
                    </div>
                    </div>
                    <div className="beam d-flex align-items-end reseller-txt">
                        <img className="img-fluid" height="300px" width="400px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592907093/top-reseller_yfbesm.svg" alt="recept"/>
                    </div>
                </section>
                <section id="start">
                    <div className="reseller-prt">
                        <div className="reseller-easy reseller-usage">
                            <div className="reseller-tlk">
                                <h2 className="pb-3 pt-4 font-weight-bold">Benefits Of Partnering With Us</h2>
                                <p>• Sales support</p>
                                <p>• Marketing assistance</p>
                                <p>• Online training schedule</p>
                                <p>• A dedicated account manager</p>
                                <p>• Generate additional revenue streams </p>
                                <p className="pb-5">• Get involved in the present hospitality <br/> technology   business that’s growing exponentially</p>
                                <a href="#sign" id="start-btn" className="gsent">Become Our Partner</a>
                            </div>
                            <div>
                                <img height="433.4px" className="image-fluid" id="accu" width="493.91px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592907093/bottom-reseller_by0tmn.svg" alt="accu"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sign" className="p-5 shadow">
                    <h2 className="text-center py-5">Become Our Partner</h2>
                    <form action="https://formspree.io/mqkyqrqq" method="POST" name="signup">
                        <div className="form-group">
                            <label htmlFor="look">You are looking for:</label>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" name="Hotel" type="checkbox" id="Hotel"/>
                                <label className="form-check-label" htmlFor="Hotel">
                                    Hotel Management Software
                                </label>
                            </div>
                        </div>
                        <div className="form-group pb-5">
                            <div className="form-check">
                                <input className="form-check-input" name="Restaurant" type="checkbox" id="restaurant"/>
                                <label className="form-check-label" htmlFor="restaurant">
                                    Restaurant Management Software
                                </label>
                            </div>
                        </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 ">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" name="Full Name" className="form-control" id="fullName" required placeholder="Jim Beglin"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="Email" id="email" placeholder="info@horecacloud.ng" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="contact">Contact No</label>
                                    <input type="number" name="contact" className="form-control" id="contact" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="Business">Business Name</label>
                                    <input type="text" name="Business Name" className="form-control" id="Business" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="remarks">Remarks</label>
                                    <textarea className="form-control" name="Remarks" id="remarks" rows="3" required/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Become Our Partner</button>
                            </div>
                    </form>
                </section>
                </HelmetProvider>
            </div>
        )
    }
}

export default Reseller
