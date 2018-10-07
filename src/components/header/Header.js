import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import overridefilmslogo from "./overridefilmslogo.jpg";
import {connect} from 'react-redux'
import axios from 'axios';
import {addToShopCart} from '../../ducks/reducer'
import baselineSVG from './baseline-shopping_cart-24px.svg'

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
        window.addEventListener('scroll', function () {
            document.body.classList[
              window.scrollY > 20 ? 'add': 'remove'
            ]('scrolled');
          });
        
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
           {this.props.itemsInCart}
           
           <svg className="cart-img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
           
           </Link>
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