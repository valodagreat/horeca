import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import {FaCheck,FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom';
import './Pms.css';

class Pms extends Component {
    render() {
        return (
            <div>
                <HelmetProvider>
                    <Navigation />
                    <Helmet>
                        <title>{this.props.root}</title>
                    </Helmet>
                    <div>
                    <section className="d-flex justify-content-between pb-5 mt-5 pt-5 pms-bgnd">
                        <div className="beam pms-txt">
                        <div className="pms-firstcont">
                            <h1 className="pb-3">Horeca Cloud PMS</h1> 
                            <p className="mb-5">Horeca Cloud PMS has everything a hotel needs because <br/> it was made by hoteliers.We 
                                offer a two in one integration <br/> of Cloud and Offline thus allowing you to use the software <br/> when you 
                                have internet and work offline during internet downtime. <br/> Don't Make Wild Guesses; let your decision making <br/>
                                be influenced by genuine data with HORECA cloud PMS <br/> embedded into every aspect of your business. <br/> We offer
                                Frontdesk, F&B,Inventory Management Accounts.
                            </p>
                            <a href="#start" id="start-btn" className="gsent">Get Started</a>
                        </div>
                        </div>
                        <div className="beam d-flex align-items-end pms-txt">
                            <img className="img-fluid" height="402px" width="496px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592439297/Mockup__nshhus.png" alt="recept"/>
                        </div>
                    </section>
                    <div className="booking pt-3" id="start">
                    <section className="db">
                        <div className="shadoe">
                        <div>
                            <div className="pms-easy">
                            <div className="pms-tlk pr-5">
                                <h3 className="pb-3 font-weight-bold">Detailed Booking</h3>
                                <p className="pb-5 font-weight-bold">A fast and intuitive user <br/> experience to complement <br/> the interface in an accurately <br/> organized manner</p>
                            </div>
                            <div>
                                <img height="550px" className="image-fluid" id="accu" width="700px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592502229/Booking_Dashboard_ostprn.png" alt="accu"/>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="rd">
                            <div className="shadow text-center">
                            <img className="imag" width="94px" height="94px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592509263/startup_ygloks.png" alt="guest"/>
                            </div>
                            <h6 className="font-weight-bold pt-1">Responsive Design</h6>
                            <p>A web app that works with <br/>different screen sizes</p>
                            </div>
                            <div className="cb">
                            <div className="shadow text-center">
                            <img className="imag" width="96px" height="96px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592509225/cloud-computing_hlxrjf.png" alt="guest"/>
                            </div>
                            <h6 className="font-weight-bold pt-1">Cloud Based</h6>
                            <p>All data are stored in a super <br/> secured and fast cloud server</p>
                        </div>
                        </div>
                        </div>
                        </section>
                        <section className="km">
                        <div className="industry pb-5 ">
                            <div className="gm pb-3">
                            <div className="shadow text-center">
                                <img className="py-4 px-2" src="https://res.cloudinary.com/valodagreat/image/upload/v1592520817/business_qmyf6x.png" width="95px" height="95px" alt="biz"/>
                            </div>
                            <h6 className="font-weight-bold pt-2">Good Management</h6>
                            <p>A system that manages all <br/> activities efficiently and <br/>optimally</p>
                            </div>
                            <div className="tv pb-3">
                            <img className="gallery" src="https://res.cloudinary.com/valodagreat/image/upload/v1592520857/Mockup_2_flkpzy.png" width="652px" height="528px" alt="biz"/>
                            </div>
                            <div className="mic pb-3">
                            <div className="shadow text-center">
                                <img className="py-4 px-2" src="https://res.cloudinary.com/valodagreat/image/upload/v1592520923/enterprise_dzj7sv.png" width="110px" height="110px" alt="biz"/>
                            </div>
                            <h6 className="font-weight-bold pt-2">Multi Industry Compatible</h6>
                            <p>This system works for many industries,<br/>Not just a single industry</p>
                            </div>
                        </div>
                        </section>
                        </div>
                        <section >
                            <h1 className="mb-5 pt-4 pl-4">Our Modules</h1>
                            <div className="first">
                            <div className="pms-list">
                                <div className="pms-fl">
                                    <ul className="fa-ul lst">
                                        <li className="list-unstyled font-weight-bolder">Front Office</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Front Office Management</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Reservation Management for individuals and groups </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Guest In House Management </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Billing</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Housekeeping Report </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Breakfast Report </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>End of Shift Report
                                        </li>
                                        </ul>
                                </div>
                                <div className="pms-sl">
                                    <ul className="fa-ul lst">
                                        <li className="list-unstyled font-weight-bolder">Point of Sale</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Restaurant Management</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Menu Management</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Room Service Management</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Billing</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Banquet Management</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>End of Shift Report</li>
                                        </ul>
                                </div>
                            </div>
                            </div>
                            <div className="second">
                                <div className="pms-list">
                                <div className="pms-fl">
                                    <ul className="fa-ul lst">
                                        <li className="list-unstyled font-weight-bolder">Accounting</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Records of income and expenditures</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Posting of Expense </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Creditor and Debtors Ledger </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Payroll</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Bank statement </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Breakfast Report </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Run P&L
                                        </li>
                                        </ul>
                                </div>
                                <div className="pms-sl">
                                    <ul className="fa-ul lst">
                                        <li className="list-unstyled font-weight-bolder">HR</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Create Employee Profile</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Profile Management</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Payroll</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Employee Exit</li>
                                        </ul>
                                </div>
                            </div>
                            </div>
                            </section>
                            <section className="third">
                            <div className="pms-list">
                                <div className="pms-fl">
                                    <ul className="fa-ul lst">
                                        <li className="list-unstyled font-weight-bolder">Engineering</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Raise Maintenance Request</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Set Maintenance Reminder </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Issue Maintenance Ticket </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Track Complaints</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Develop Preventative Maintenance Schedule </li>
                                    </ul>
                                </div>
                                <div className="pms-sl">
                                    <ul className="fa-ul lst">
                                        <li className="list-unstyled font-weight-bolder">Housekeeping</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Schedule and monitor room cleaning</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Update status after cleaning</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Review status of rooms</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Initiate maintenance,if required</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Task Reminder</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Post Laundry bills Design Housekeeping Checkpms-list</li>
                                    </ul>
                                </div>
                            </div>
                            </section>
                            <section className="four">
                            <div className="pms-list">
                                <div className="pms-fl ffl">
                                <ul className="fa-ul lst">
                                    <li className="list-unstyled font-weight-bolder">Sales & Marketing</li>
                                    <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Send Bulk SMS</li>
                                    <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Send Bulk email </li>
                                    <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Send Welcome Letter </li>
                                    <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Send guest experience feedback letter </li>
                                </ul>
                            </div>
                                <div className="pms-sl fsl">
                                    <ul className="fa-ul lst">
                                        <li className="list-unstyled font-weight-bolder">Admin</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Staff Activity Log</li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Rate Management </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Night Audit </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Manager Report </li>
                                        <li><span className="fa-li bluey"><FaTimes className='pr-2'/></span>Owner Report </li>
                                    </ul>
                                </div>
                            </div>
                            </section>
                            <section>
                            <section className="pb-5">
                                <div className="totalpricing">
                                <div className="pricing pt-5">
                                    <div className="price">
                                        <h3>Pricing</h3>
                                        <p className="font-weight-bold">Different packages for your business</p>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/valodagreat/image/upload/v1592405895/bitcoin_1_q428sk.png" height="400px" className="bitcoin" width="526px" alt="bitcoin"/>
                                    </div>
                                </div>
                                </div>
                                <div className="purebusiness pt-5">
                                    <div className="shadow py-5 enterprise">
                                    <div className="text-center">
                                        <img className="px-2 py-4" src="https://res.cloudinary.com/valodagreat/image/upload/v1592410135/reception_1_joqtum.png" height="130px" width="130px" alt="point"/>
                                        <h4 className="text-center">Business</h4>
                                    </div>
                                    <div className="px-2 pt-5">
                                        <ul className="fa-ul lst">
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Front Office</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>F&B</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Accounting</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>HR</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Stock Control</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Inventory Management</li>
                                        </ul>
                                    </div>
                                    <div className="py-5 text-center">
                                            <h3 className="pb-5">35,000/mo</h3>
                                            <a href="#sign" id="start-btn" className="gsent">Get Started</a>
                                    </div>
                                    </div>
                                    <div className="shadow py-5 enterprise">
                                    <div className="text-center">
                                        <img className="px-2 py-4" src="https://res.cloudinary.com/valodagreat/image/upload/v1592410155/user_re35dj.png" height="125px" width="120px" alt="point"/>
                                        <h4>Premium</h4>
                                    </div>
                                    <div className="px-2 pt-5">
                                        <ul className="fa-ul lst">
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Front Office</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>F&B</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Accounting</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>HR</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Stock Control</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Inventory Management</li>
                                        </ul>
                                    </div>
                                    <div className="py-5 text-center">
                                        <h3 className="pb-5">75,000/mo</h3>
                                            <a href="#sign" id="start-btn" className="gsent">Get Started</a>
                                    </div>
                                    </div>
                                    <div className="shadow py-5 enterprise">
                                        <div className="text-center">
                                        <img className="px-2 py-4" height="90px" width="120px" src="https://res.cloudinary.com/valodagreat/image/upload/v1592410111/enterprise_r05ewd.png" alt="point"/>
                                        <h4>Enterprise</h4>
                                        </div>
                                        <div className="pb-5">
                                            <ul className="fa-ul lst px-2 pt-5">
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>All Premium Features</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Loyalty Program</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Digital Marketing</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Website Development</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>CCTV Integratiom</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Channel Management</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Social Media Management</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Reputation Management</li>
                                            <li><span className="fa-li greene"><FaCheck className='pr-1'/></span>Contact Us If You Need Even More</li>
                                            </ul>
                                        </div>
                                        <div className="text-center py-5">
                                        <Link to='/contact' className=" gsent">Contact Us</Link>  
                                        </div>
                                    </div>
                                    </div>
                            </section>
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
                                <label htmlFor="outletype">Quantity of Rooms</label>
                                <select id="outletype" name="noOfRooms" onChange={this.handleChange} className="form-control" required>
                                    <option value="0-15">0-15</option>
                                    <option value="16-30">16-30</option>
                                    <option value="31-45">31-45</option>
                                    <option value="50-100">50-100</option>
                                </select>
                                </div>
                                <div className="form-group col-md-4">
                                <label htmlFor="position">Position</label>
                                <input type="text" name="Position" className="form-control" id="position" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 ">
                                <label htmlFor="software">Your Current PMS System</label>
                                <input type="text" name="Software" className="form-control" id="software" required placeholder="management software"/>
                            </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </section>
                    </div>
                    <Footer />
                </HelmetProvider>
            </div>
        )
    }
}

export default Pms
