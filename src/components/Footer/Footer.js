import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <section className="ending">
                        <div className="pl-4">
                        <div>
                            <h2 className="py-5">
                                Very Useful,Friendly
                            </h2>
                            <p className="pb-5 font-weight-bold">With an intuitive and easy to use <br/>interface that is super responsive</p>
                        </div>
                        <div className="pb-5">
                            <Link to='/contact'>
                                <span  id="start-btn" className=" gsent">Contact Us</span>
                            </Link>
                        </div>
                        </div>
                    </section>
                    <footer className="footer">
                        <div className="font-weight-bold py-5 pl-4 text-center">
                            <p>Copyright © 2020</p>
                            <p>All Rights Reserved | Horeca Cloud</p>
                        </div>
                    </footer>
            </div>
        )
    }
}

export default Footer
