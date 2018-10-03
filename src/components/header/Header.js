import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import overridefilmslogo from "./overridefilmslogo.jpg";
import {connect} from 'react-redux'
import axios from 'axios';
import {addToShopCart} from '../../ducks/reducer'

class Header extends Component {

componentDidMount(){
let {addToShopCart} = this.props
axios.get('/api/cart/').then((res=>{
addToShopCart(res.data.length)
}))
}

login(){
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env
    // url = 'http://localhost:3000/auth/callback'
    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
}

    render() { 
        return (
            <div>
            <div className="header_bar">
            
            <img src={overridefilmslogo} alt="Override Films logo" className="Override_logo"/>
            
            <h1 className="title">Overridden Films</h1>

            <div className="links">
            <Link to='/'><p>Home</p></Link> 
            <Link to='/portfolio'><p>Portfolio</p></Link>
            <Link to='/about'><p>About</p></Link>
            <span onClick={this.login}><p>Login</p></span>
            <Link to='/shop'><p>Shop</p></Link>
            <Link className="cart-link" to='/cart'>
           {this.props.itemsInCart}</Link>
            </div>
            </div>
            <div className="space"></div>
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