import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import overridefilmslogo from "./overridefilmslogo.jpg";
import './header.css'

class Header extends Component {
    render() { 
        return (
            <div className="header_bar">
            <img src={overridefilmslogo} alt="Override Films logo" className="Override_logo"/>
            
            <div className="Nav-links">
            <Link to='/'><p>Home</p></Link> 
            <Link to='/portfolio'><p>Portfolio</p></Link>
            <Link to='/about'><p>About</p></Link>
            <Link to='/login'><p>Account</p></Link>
            <Link to='/shop'><p>Shop</p></Link>
            <Link to='/cart'><p>Cart</p></Link>
            </div>
            </div>
          );
    }
}
 
export default Header;