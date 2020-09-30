import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './MyGuest.css';

class MyGuest extends Component {
    handleChange=()=>{
        let x = document.getElementById("outletype").value;
        if (x==="others") {
            var parent = document.getElementById("board");
            var child = document.getElementById("outletype");
            var para = document.createElement("INPUT");
            para.setAttribute("type","text");
            para.setAttribute("class","form-control")
            para.setAttribute("name","outletType");
            para.setAttribute("placeholder","Outlet Type");
            parent.replaceChild(para,child);
        }
    }
    render() {
        return (
            <div>
                <HelmetProvider>
                    <Helmet>
                        <title>{this.props.root}</title>
                    </Helmet>
                    <section className="d-flex justify-content-between pb-5 mt-5 pt-5 guest-bgnd">
                        <div className="beam guest-txt">
                        <div className="guest-firstcont">
                            <h1 className="pb-4">Horeca My Guest</h1> 
                            <p className="mb-5">
                                My guest is a Contactless Guest Management Software designed <br/> for hotels business. 
                                With My Guest hotels can customize their <br/> dashboard and create tailored-made experiences for their guest. <br/>
                                My Guest delivers an exceptional experience with a personalized <br/> approach to guest service.
                                My Guest offers: <br/>
                                • Mobile Check- In & Check Out<br/>
                                • Mobile Room Service Order, Housekeeping & laundry request <br/>
                                • Send guest welcome & departure email with a link to review their stay 
                                <br/>
                            </p>
                            <a href="#start" id="start-btn" className="gsent">Get Started</a>
                        </div>
                        </div>
                        <div className="beam d-flex align-items-end guest-txt">
                            <img className="img-fluid" height="500px" width="500px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592907093/myGuest_dkx1vb.svg" alt="recept"/>
                        </div>
                    </section>
                    <section id="start">
                        <div className="guest-prt">
                            <div className="guest-easy guest-usage">
                                <div className="guest-tlk">
                                    <h2 className="pb-4 pt-4 font-weight-bold">My Guest</h2>
                                    <p className="pb-1">Dear Partner, </p> 
                                    <p className="pb-1"> My Guest by Horeca Cloud is on the verge of <br/> releasing the company’s most innovative product yet. <br/>
                                        We believe it will fundamentally change <br/> the way you interact with your guest. </p><p className="pb-1">
                                        We are selecting a diverse group of hotels <br/> to be accepted into our 'Early User Program' and <br/>
                                        you will receive My Guest Access free of charge <br/> for 90days in exchange for your valued and <br/>
                                        professional feedback. </p><p className="pb-1">
                                        Please sign up now! </p><p className="pb-1">
                                        Welcome to Our World </p><p className="pb-5">
                                        Best regards, <br/>
                                        Israel Ifedayo- CTO- Horeca Cloud 
                                        </p>
                                    <a href="#sign" id="start-btn" className="gsent">Sign Up</a>
                                </div>
                                <div>
                                    <img height="433.4px" className="image-fluid" id="accu" width="493.91px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592907093/bottom-guest_hzasv1.svg" alt="accu"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="sign" className="p-5">
                        <h2 className="text-center py-5">Register With Us</h2>
                        <form action="https://formspree.io/mqkyqrqq" method="POST" name="signup">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="name">Business Name</label>
                                <input type="text" className="form-control" name="Business Name" id="name" placeholder="Horeca Ng" required/>
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="location">Business Location</label>
                                <input type="text" className="form-control" name="Business Location" id="location" placeholder="Location" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" required className="form-control" name="Address" id="inputAddress" placeholder="17 Ibikunle St, Yaba, Lagos,Nigeria"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="Email" id="email" placeholder="info@horecacloud.ng" required/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                <label htmlFor="number">Contact Number</label>
                                <input type="number" name="Contact Number" className="form-control" id="number" required/>
                                </div>
                                <div className="form-group col-md-4" id="board">
                                <label htmlFor="outletype">Outlet Type</label>
                                <select id="outletype" name="outletType" onChange={this.handleChange} className="form-control" required>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Buka">Buka</option>
                                    <option value="Independent Vendor">Independent Vendor</option>
                                    <option value="others">Others specify...</option>
                                </select>
                                </div>
                                <div className="form-group col-md-4">
                                <label htmlFor="position">Position</label>
                                <input type="text" name="Position" className="form-control" id="position" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 ">
                                <label htmlFor="software">Your Current POS System</label>
                                <input type="text" name="Software" className="form-control" id="software" required placeholder="management software"/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </section>
                </HelmetProvider>
            </div>
        )
    }
}

export default MyGuest
