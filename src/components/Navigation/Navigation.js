import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaAlignJustify } from 'react-icons/fa';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className='pb-5'>
                    <nav className="navbar navbar-expand-md bg-white shadow fixed-top py-1 px-3" id="navbar">
                        <Link to='/horeca'>
                            <span className="navbar-brand"><img src="https://res.cloudinary.com/valodagreat/image/upload/v1592305065/Horeca_Cloud_All_Blue_atafuz.png" alt="horeca" /></span>
                        </Link>
                        <button className="navbar-toggler togg" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="tog"><FaAlignJustify size='20' /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown heads p-1">
                                <a className="nav-link dropdown-toggle" href='#.' id="navbardrop" data-toggle="dropdown">
                                    Solutions
                                </a>
                                <div className="dropdown-menu">
                                    <Link to = '/horecapms'>
                                        <span className="dropdown-item" >Horeca PMS</span>
                                    </Link>
                                    <Link to ='/horecamyguest'>
                                        <span className="dropdown-item" >Horeca My Guest</span>
                                    </Link>
                                    <Link to ='/horecamymenu'>
                                        <span className="dropdown-item" >Horeca My Menu</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item heads p-1">
                                <Link to ='/reseller'>
                                    <span className="nav-link" >Reseller</span>
                                </Link>
                            </li>   
                            <li className="nav-item heads p-1">
                                <Link to ='/blog'>
                                    <span className="nav-link" >Blog</span>
                                </Link>
                            </li>  
                            <li className="nav-item heads p-1">
                                <Link to ='/contact'>
                                    <span className="nav-link" >Contact</span>
                                </Link>
                            </li>
                            <li className="nav-item heads p-1">
                                <Link to ='/about'>
                                    <span className="nav-link" >About</span>
                                </Link>
                            </li>   
                            <li className="nav-item homeg gstart col-sm-ml-4">
                                <a className="nav-link" href= {`#start`} >Get Started</a>
                            </li>
                        </ul> 
                        </div>  
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navigation
