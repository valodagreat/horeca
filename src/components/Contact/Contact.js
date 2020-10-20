import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {FaEnvelope,FaHome,FaPhoneAlt,FaTwitter } from 'react-icons/fa';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Contact.css';

class Contact extends Component {

    trackEvent =()=>{
        window.fbq('track','Filled Contact Form',{Name:document.getElementById("fullName").value,Email : document.getElementById("email").value})
    }
    
    handleSubmit=(event)=> {
        
        this.trackEvent()
    }
    render() {

        return (
            <div>
            <HelmetProvider>
            <Navigation />
            <Helmet>
                <title>{this.props.root}</title>
            </Helmet>
            <section className="d-flex justify-content-between pb-5 mt-5 pt-5 contact-bgnd">
            <div className="beam contact-txt">
                <div className="contact-firstcont">
                    <h1>Contact Us</h1> 
                    <p className="mb-5">
                    You can reach out to us through mails, <br/>on social media platforms, through our <br/>contact number,office address and so on. <br/> We are always at your reach whenever you need us.
                    </p>
                <a href="#start" id="start-btn" className="gsent">Get Started</a>
                </div>
            </div>
            <div className="beam d-flex align-items-end contact-txt">
                <img className="img-fluid" height="500px" width="500px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592910700/undraw_contact_us_15o2_2_fqamsj.svg" alt="recept"/>
            </div>
        </section>
        <section className="p-5" id="start">
            <h2 className="text-center py-5">Get In Touch</h2>
                <p className="text-center py-5"><span className="mylink"><FaEnvelope/> </span> <a className="links" rel='noopener noreferrer' target="_blank" href="mailto:info@horecacloud.ng">info@horecacloud.ng</a><br/><small>Send us your query anytime</small></p>
                <address className="text-center py-5 mylink"><span className="mylink"><FaHome /></span> 17 Ibikunle St, Yaba, Lagos <br/>
                    <span className="little">Lagos,Nigeria</span></address>
                <address className="text-center py-5 mylink"><span className="mylink"><FaPhoneAlt /> </span>  08061654297 <br/>
                    <span className="little">Mon to Fri 9am to 6pm</span></address>
                    <p className="text-center py-5"><span className="mylink"><FaTwitter /> </span> <a className="links" rel='noopener noreferrer' target="_blank" href="https://twitter.com/HorecaCloud">
                        @HorecaCloud</a><br/><small>Follow us on twitter</small></p>
        </section>
        <section className="py-5">
                <div className="text-center">
                    <button type="button" className="buton" data-toggle="modal" data-target="#exampleModalLong">
                        Contact Form
                    </button>
                </div>
                    
                    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Contact Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                            <form action="https://formspree.io/mqkyqrqq" method="POST" name="contact">
                                        <div className="form-row d-flex justify-content-center">
                                            <div className="form-group col-md-6 ">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input type="text" name="Full Name" className="form-control" id="fullName" required placeholder="Jim Beglin"/>
                                            </div>
                                        </div>
                                        <div className="form-row d-flex justify-content-center">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" name="Email" id="email" placeholder="info@horecacloud.ng" required/>
                                            </div>
                                        </div>
                                        <div className="form-row d-flex justify-content-center">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="contact">Contact No</label>
                                                <input type="number" name="Phone No" className="form-control" id="contact" required/>
                                            </div>
                                        </div>
                                        <div className="form-row d-flex justify-content-center">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="subject">Subject</label>
                                                <input type="text" name="Subject" className="form-control" id="subject" required/>
                                            </div>
                                        </div>
                                        <div className="form-row d-flex justify-content-center">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea className="form-control" name="Contact Message" id="message" placeholder="Enter Your Message" rows="6" required/>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Send Your Message</button>
                                        </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <Footer/>
                </HelmetProvider>
            </div>
        )
    }
}

export default Contact
