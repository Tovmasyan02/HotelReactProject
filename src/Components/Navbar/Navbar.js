import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FaEllipsisV, FaTimes } from "react-icons/fa";

export default class Navbar extends Component {

      OpenMenu = () => {
        let menu=document.getElementsByClassName("menu")[0];
        menu.style.right='0px';
      };
      
      CloseMenu = (event) => {
        // Чтобы меню не закрылось, при нажатии на панель 
        if(event.target.tagName==="UL")
             return;
        let menu=document.getElementsByClassName("menu")[0];
        menu.style.right='-100%';
      };

    render() {
        return (
          <header>
          <h2 class="logo"> Beach Resort</h2>
          <label onClick={this.OpenMenu} class="show-menu-btn">
            <FaEllipsisV/>
          </label>
          <ul class="menu" onClick={this.CloseMenu}>
              <div className="group">
                  <Link to="/">Home</Link>
              </div>
            <div className="group">
                  <Link to="/rooms">Rooms</Link>
            </div>
            <div className="group">
                  <Link to="/About us">About us </Link>
            </div>
            <div className="group">
                <Link to="/contacts">Contacts</Link>
            </div>
             <label onClick={this.CloseMenu} class="hide-menu-btn">
               <FaTimes/>
             </label>
          </ul>
        </header>
        )
    }
}
