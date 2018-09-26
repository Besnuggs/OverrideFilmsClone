import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import overridefilmslogo from './../../imgs/overridefilmslogo.jpg'
import {connect} from 'react-redux'
import removeFromShopCart from '../../ducks/reducer'
import './cart.css'



class Cart extends Component {
    constructor(props){
        super(props)
            this.state = {
                price: 0,
                productimgs: [],
                amount: 1500,
                cartItems: [],
                subtotal: 0,
                shipping: 5
            }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount(){
        axios.get(`/api/cart/`).then((res) =>{
            this.setState({
                cartItems: res.data,
            })
        let {cartItems} = this.state
        let subT = 0;
        cartItems.forEach(cartItem => {
            let priceVal = Number(cartItem.price)
            subT += priceVal
            this.setState({subtotal: subT.toFixed(2)})
            this.setState({amount: subT.toFixed(2)})
        })
    })
    }

    deleteProduct(){
axios.delete()
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment/', {token, amount: this.state.amount}).then(res => {
            console.log(res)
        })
    }

    updateAmount(){

    }
    
    render() {
    console.log(this.state)
    let {cartItems} = this.state
    let cart = cartItems.map((Info, Index) => {
        const {name, price, frontal_img} = Info
        return(
            <section className="basket">
            <p>Product: {name}</p>
            <p>Price: ${price}</p>
            <img className="product_img" src={frontal_img} alt="product" />
            <button>Edit Quantity</button>
            <button onClick={this.deleteProduct}>Delete Item</button>
            </section>
        )
    })
    
        return (
            <div className="cart">
                <h1>Shopping Cart</h1>
            <div className="Shoppingtable">
                <h3>Items</h3>
                <div>
                    {cart}
                </div>
            </div>

                <div className="checkOut table">
                <h3>Order Summary</h3>
                <h4>Subtotal:${this.state.subtotal}</h4>
                <h4>Shipping: ${this.state.shipping}</h4>
                <h4>Total:${this.state.amount}</h4>


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