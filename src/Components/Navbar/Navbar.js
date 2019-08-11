import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
    state = {
        isOpen: true
      };
      handleToggle = () => {
        
        this.setState({ isOpen: !this.state.isOpen });
      };
    render() {
        return (
             <div className="navbar">
               <div className="nav-center">
                 <div className="nav-header">
                     <h3 className="logo">Beach Hotel</h3>
                     <button
                      type="button"
                      className="nav-btn"
                      onClick={this.handleToggle}>
                     <FaAlignRight className="nav-icon"/></button>
                 </div>
                     <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/rooms">Rooms</Link></li>
                     </ul>
                 </div>
             </div>
        )
    }
}
