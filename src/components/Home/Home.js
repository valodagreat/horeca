import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import {FaCheck } from 'react-icons/fa'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <HelmetProvider>
                <Navigation />
                <Helmet>
                    <title>{this.props.root}</title>
                </Helmet>
                <section className="d-flex justify-content-between pb-5 pt-5 bgnd">
                        <div className="beam txt">
                            <h1 className="pb-4">Managing your business can be easier</h1>
                            <p className="mb-5">Running a hospitality business can be super hectic.Not having <br/>
                            the right tools takes you away from your guests.With Horeca <br/>
                            Cloud,you could have one log in,one system that is always in sync <br/>
                            and you can always manage and monitor your property from <br/>
                            wherever you are...</p>
                            <a href="#horecahomepage" id="start-btn" className="gsent">Get Started</a>
                        </div>
                        <div className="beam d-flex align-items-end txt">
                            <img className="img-fluid" height="539.46px" width="645.02px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592315351/receptionist_fbrm9h.png" alt="recept" />
                        </div>
                    </section>
                    <div id="start" className="shadow ever pt-3">
                        <section className="">
                            <div className="rondo">
                                <div className="stuff">
                                <div className="myMenu">
                                <div className="sround gin">
                                    <div className="round d-flex justify-content-center">
                                        <img src="https://res.cloudinary.com/valodagreat/image/upload/v1592319004/reception_tcud4o.png" alt="fd" />
                                    </div>
                                </div>
                                </div>
                                    <h1>My Menu</h1>
                                    <p className="menuhead">My Menu is a two in 1 flexible solution for restaurants owner.
                                        It allows you to list your menu online and manage in dining restaurant reservations on site.
                                        With my Menu owners can create and list multiple menus online,
                                        choose their preferred delivery partner and manage advance dinning reservation. </p>
                                    <p className="menuhead">Restaurants owners can also offer Guest discount and signup customer to their loyalty scheme</p>
                            </div>
                            <div className="stuff">
                                <div className="boss">
                                <div id="ink" className="sround gin">
                                    <div className="round d-flex justify-content-center">
                                        <img src="https://res.cloudinary.com/valodagreat/image/upload/v1592319048/human-resources-symbol_ry8olf.png" alt="hr" />
                                    </div>
                                </div>
                                </div>
                                <h1>My Guest</h1>
                                <div className="mhead">My guest is a Contactless Guest Management Software designed for hotels business.
                                            With My Guest hotels can customize their dashboard and create tailored -made experiences for their guest.
                                            My Guest delivers an exceptional experience with a personalized approach to guest service. My Guest offers:
                                    <p className="pt-3 ">⦁ Mobile Check- In & Check Out</p>
                                    <p className="">⦁ Mobile Room Service Order, Housekeeping & laundry request </p>
                                    <p className="">⦁ Send guest welcome & departure email with a link to review their stay </p>
                                </div>
                            </div>
                            <div className="stuff">
                                <div className="PMS">
                                <div className="sround gin">
                                    <div className="round d-flex justify-content-center">
                                        <img src="https://res.cloudinary.com/valodagreat/image/upload/v1592319093/sales_eqaneg.png" alt="ac" />
                                    </div>
                                </div>
                                </div>
                                <div className="pmshead">
                                <h1>PMS</h1>
                                <p className="">Horeca Cloud PMS has everything a hotel needs because it was made by hoteliers.We 
                                    offer a two in one integration of Cloud and Offline thus allowing you to use the software when you 
                                    have internet and work offline during internet downtime.Don't Make Wild Guesses; let your decision making
                                    be influenced by genuine data with HORECA cloud PMS embedded into every aspect of your business.We offer
                                    Frontdesk, F&B,Inventory Management Accounts.Click here to <Link to='/horecapms'><span>Know more</span></Link>
                                </p>
                                </div>
                            </div>
                            </div>
                        </section>
                    </div>
                    <section>
                        <div className="prt">
                            <div className="easy usage">
                                <div className="tlk">
                                    <h4 className="pb-3 font-weight-bold">Easy to use</h4>
                                    <p className="pb-5">Horeca cloud is a Hospitality cloud based solution designed <br/>for hotels,restaurants and Cafes in Nigeria.Designed by a
                                    <br/>Nigerian for the Nigerian hospitality business</p>
                                    <Link to='/contact'><span  id="start-btn" className="gsent">Contact Us</span></Link>
                                </div>
                                <div>
                                    <img height="433.4px" className="image-fluid" id="accu" width="493.91px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592334595/accountant_jwe53m.png" alt="accu" />
                                </div>
                            </div>
                            <div className="every">
                                <h3 className="pt-5 pb-5 pl-4">Who Can Use Horeca Cloud?</h3>
                                <h5 className="pl-4 pb-5">Horeca Cloud is For You,if you own or manage</h5>
                                <div className="why">
                                    <div className="shadow ozil">
                                        <img className="int case" width="239.9px" height="179.41px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592342085/guest_jgalpd.png" alt="guest"/>
                                        <h5>Hotels</h5>
                                    </div>
                                    <div className="shadow ozil">
                                        <img className="int case" width="250px" height="151.39px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592342032/b_b_oayb4l.png" alt="bedding"/>
                                        <h5>Guest House</h5>
                                    </div>
                                    <div className="shadow ozil">
                                        <img className="int case" width="289.47px" height="131.89px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592342013/airb_lusx3r.png" alt="bb"/>
                                        <h5>An Air B&B Property</h5>
                                    </div>
                                    <div className="shadow ozil">
                                        <img className="int case" width="297.73px" height="148.32px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592342119/qsr_liehxf.png" alt="qsr"/>
                                        <h5>Quick Service Restaurants</h5>
                                    </div>
                                    <div className="shadow ozil">
                                        <img className="int" width="238.29px" height="170.46px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592342145/restaurant_fi9zeh.png" alt="fs"/>
                                        <h5>Full Scale Restaurants</h5>
                                    </div>
                                    <div className="shadow ozil">
                                        <img className="int" width="215.83px" height="167.97px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592342049/catering_wrq8oo.png" alt="oc"/>
                                        <h5>Outdoor Cateering</h5>
                                    </div>
                                    <div className="shadow ozil">
                                        <img className="int" width="229.18px" height="160.72px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592342067/employee_wm4uzn.png" alt="sc"/>
                                        <h5>Event Hall & Management</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pb-5">
                        <h1 className="mb-5 pl-4">Why Choose Us</h1>
                        <div className="list">
                            <div className="fl">
                                <ul className="fa-ul">
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>We are the Cheapest in the market</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>Verification</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>Cloud Based</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>We are the only PMS offering Employee</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>KYS(Know Your Staff before you hire them)</li>
                                </ul>
                            </div>
                            <div className="sl">
                                <ul className="fa-ul">
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>We Understand the Nigerian Peculiarity</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>Simple to use</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>Cloud Based</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>Direct integration to OTA</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>No Jargon</li>
                                    <li><span className="fa-li bluey pr-3"><FaCheck/></span>Designed by a Nigerian for the Nigerian Utility business</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <Footer />
                    </HelmetProvider>
            </div>
        )
    }
}

export default Home
