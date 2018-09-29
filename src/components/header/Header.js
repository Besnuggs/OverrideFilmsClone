import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import overridefilmslogo from "./overridefilmslogo.jpg";
import './header.css'
import {connect} from 'react-redux'
import axios from 'axios';
import {addToShopCart} from '../../ducks/reducer'
import styled from 'styled-components'

class Header extends Component {

componentDidMount(){
let {addToShopCart} = this.props
axios.get('/api/cart/').then((res=>{
addToShopCart(res.data.length)
}))
}

    render() { 
        return (
            <div>
            <div className="header_bar">
            <img src={overridefilmslogo} alt="Override Films logo" className="Override_logo"/>
            </div>

            <div className="links">
            <Link to='/'><p>Home</p></Link> 
            <Link to='/portfolio'><p>Portfolio</p></Link>
            <Link to='/about'><p>About</p></Link>
            <Link to='/account'><p>Account</p></Link>
            <Link to='/shop'><p>Shop</p></Link>
            <Link to='/cart'><p>Cart {this.props.itemsInCart}</p></Link>
            </div>
            </div>
          );
    }
}

function mapStateToProps(state){
let {itemsInCart} = state
return{
itemsInCart
}
}
 
export default connect(mapStateToProps, {addToShopCart})(Header);