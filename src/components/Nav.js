import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

class Nav extends React.Component{
    render(){
        return(
                <nav className="navbar-sm navbar-expand-lg navbar-dark bg-dark">
                    <div className="container text-right pl-2">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse text-left" id="navbarNav">
                                <ul className="navbar-nav">
                                <li className="nav-item" id="nav-home">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/">HOME</NavLink>
                                </li>
                                <li className="nav-item" id="nav-reservations">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/reservations">RESERVATIONS</NavLink>
                                </li>
                                <li className="nav-item" id="nav-service">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/services">SERVICES</NavLink>
                                </li>
                                <li className="nav-item" id="nav-aboutus">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/aboutus">ABOUT US</NavLink>
                                </li>
                                <li className="nav-item" id="nav-contactus">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/contactus">CONTACT US</NavLink>
                                </li>
                                </ul>
                            </div>
                    </div>
                </nav>
        );
    }
}

export default Nav;