import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import overridefilmslogo from './../../imgs/overridefilmslogo.jpg'
import {connect} from 'react-redux'



class Cart extends Component {
    constructor(props){
        super(props)
            this.state = {
                amount: 1000
            }
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
            console.log(res)
        })
    }
    
    render() { 
        return (
            <div>
                <h1>Shopping Cart</h1>

                <div className="Shoppingtable">
                <h3>Item Description</h3>

                </div>

                <div className="checkOut table">
                <h3>Order Summary</h3>
                <StripeCheckout
                name="Override Films"
                description="Override Films Merchandise Shop"
                image={overridefilmslogo}
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={this.state.amount}
            />
                </div>            
            </div>
          );
    }
}
 
export default Cart;