import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './About.css'

class About extends Component {
    render() {
        return (
            <div>
                <HelmetProvider>
                    <Helmet>
                        <title>{this.props.root}</title>
                    </Helmet>
                    <section className="d-flex justify-content-between mt-5 pt-5 about-bgnd">
                            <div className="beam about-txt">
                                <div className="about-firstcont">
                                    <h1 className="pb-5 display-3">About Us</h1> 
                                <a href="#start" id="start-btn" className="gsent">Know More</a>
                                </div>
                            </div>
                            <div className="beam d-flex align-items-end about-txt">
                                <img className="img-fluid" height="400px" width="400px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592992122/undraw_searching_p5ux_wvh1jc.svg" alt="recept"/>
                            </div>
                        </section>
                        <section id="start">
                            <div className="about-prt">
                                <div className="about-easy about-usage">
                                    <div className="about-tlk">
                                        <h2 className="pb-4  font-weight-bold">Mission & Objectives</h2>
                                        <p>Horeca Cloud mission is simple,<br/>which is to Provide Hospitality <br/> Solutions & software to African Hotels, <br/> Restaurant, and Guest–houses.</p>
                                        <p className="pb-5">Horeca Cloud Hotel PMS is used by boutique hotels <br/> around Nigeria and is the first to integrate <br/> a dual approach of Cloud + On-Premise to bridge <br/> the internet downtime issues prevalent in Africa.</p>
                                        <a href="#sign" id="start-btn" className="gsent">Coming Soon</a>
                                    </div>
                                    <div>
                                        <img height="433.4px" className="image-fluid" id="accu" width="493.91px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592992895/undraw_work_time_lhoj_esbgw7.svg" alt="accu"/>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="sign" className="pt-5">
                            <div className="about-every">
                                <h1 className="pt-5 pb-5 text-center">Coming Soon</h1>
                                <div className="about-why">
                                    <div className="shadow about-ozil p-2">
                                        <img className="int case" width="239.9px" height="179.41px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592994241/undraw_under_construction_46pa_1_uxa0nj.svg" alt="guest"/>
                                        <h5>My Hotel</h5>
                                    </div>
                                    <div className="shadow about-ozil p-2">
                                        <img className="about-int about-case" width="250px" height="151.39px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592994241/undraw_under_construction_46pa_1_uxa0nj.svg" alt="bedding"/>
                                        <h5>My Restaurant</h5>
                                    </div>
                                    <div className="shadow about-ozil p-2">
                                        <img className="about-int about-case" width="289.47px" height="131.89px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592994241/undraw_under_construction_46pa_1_uxa0nj.svg" alt="bb"/>
                                        <h5>My Recipe</h5>
                                    </div>
                                    <div className="shadow about-ozil p-2">
                                        <img className="about-int about-case" width="297.73px" height="148.32px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592994241/undraw_under_construction_46pa_1_uxa0nj.svg" alt="qsr"/>
                                        <h5>My Loyalty</h5>
                                    </div>
                                    <div className="shadow about-ozil p-2">
                                        <img className="about-int" width="238.29px" height="170.46px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592994241/undraw_under_construction_46pa_1_uxa0nj.svg" alt="fs"/>
                                        <h5>Q</h5>
                                    </div>
                                    <div className="shadow about-ozil p-2">
                                        <img className="about-int" width="215.83px" height="167.97px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592994241/undraw_under_construction_46pa_1_uxa0nj.svg" alt="oc"/>
                                        <h5>My Spa</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                </HelmetProvider>
            </div>
        )
    }
}

export default About
