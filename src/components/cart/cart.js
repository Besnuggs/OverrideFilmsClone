import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import overridefilmslogo from './../../imgs/overridefilmslogo.jpg'
import {connect} from 'react-redux'
import {addToShopCart} from '../../ducks/reducer'
import './cart.css'


class Cart extends Component {
    constructor(props){
        super(props)
            this.state = {
                amount: 0,
                cartItems: [],
                subtotal: 0,
                shipping: 5,
                toggle: false
            }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.deleteCartData = this.deleteCartData.bind(this)
        this.increaseQuantity = this.increaseQuantity.bind(this)
        this.decreaseQuantity = this.decreaseQuantity.bind(this)
        this.deleteCart = this.deleteCart.bind(this)
    }

    increaseQuantity(cart_id, quantity){
        quantity++
        axios.put(`/api/cart/${cart_id}`, {quantity}).then((res) => {
            this.updateSubandAmt(res.data)
        })
        }
        
        decreaseQuantity(cart_id, quantity){
        if(quantity === 1){
            this.state.toggle
        }
        else{
        quantity--
        axios.put(`/api/cart/${cart_id}`, {quantity}).then((res)=> {
            this.updateSubandAmt(res.data)
        })
         }
        }

    deleteCart(){


    }
    
    updateSubandAmt(cart){
        let subT = 0;
        cart.forEach(cartItem => {
            let priceVal = Number(cartItem.price * cartItem.quantity)
            subT += priceVal
            this.setState({
                subtotal: subT.toFixed(2), 
                amount: (subT + this.state.shipping).toFixed(2),
                cartItems: cart
            })    
        })
    }

    componentDidMount(){
        axios.get(`/api/cart/`).then((res) =>{
            this.setState({
                cartItems: res.data,
            })
        let {cartItems} = this.state
        let subT = 0;
        cartItems.forEach(cartItem => {
            let priceVal = Number(cartItem.price * cartItem.quantity)
            subT += priceVal
            this.setState({subtotal: subT.toFixed(2), amount: (subT + this.state.shipping).toFixed(2)})
        })
    })
    }


    deleteProduct(cart_id){
    let {addToShopCart} = this.props
    axios.delete(`/api/cart/${cart_id}`).then((res) => {
        this.setState({
            cartItems: res.data
        })
        let {cartItems} = this.state
        let subT = 0;
        cartItems.forEach(cartItem => {
            let priceVal = Number(cartItem.price * cartItem.quantity)
            subT += priceVal
            this.setState({subtotal: subT.toFixed(2), amount: (subT + this.state.shipping).toFixed(2)})
        })
        addToShopCart(res.data.length)
    })
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment/', {token, amount: this.state.amount * 100}).then(res => {
            console.log(res)
            this.deleteCartData()
        })
        axios.post('/api/email/').then()
        alert('Thank you for your purchase. A confirmation email has been sent!')
        this.props.history.push('/#/')
        this.componentDidMount()
    }

deleteCartData(){
let {addToShopCart} = this.props
axios.delete('/api/cartData/').then((res) => {
    this.setState({subtotal: 0})
    this.setState({amount: 0})
    addToShopCart(0)
    this.componentDidMount()
})
}
    
    render() {
    console.log(this.state)
    let {cartItems} = this.state
    let cart = cartItems.map((Info, Index) => {
        const {name, price, frontal_img, cart_id, quantity} = Info
        let itemTotal = price * quantity;
        itemTotal.toFixed(2);
        return(
            <section key={Index} className="item-card box">
            <img className="product_img" src={frontal_img} alt="product" />
            <div className="product-details">
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>Total:${itemTotal.toFixed(2)} </p>

            
            
            <p>Quantity: {quantity} </p>
            <span className="quantity-button" onClick={() => this.increaseQuantity(cart_id, quantity)}>+</span>
            <span className="quantity-button"  disabled={this.state.toggle} onClick={() => this.decreaseQuantity(cart_id, quantity)}>-</span>
            <span className="delete-button" onClick={() => this.deleteProduct(cart_id)}>Delete Item</span>
            </div>
            </section>
        )
    })
    
        return (
            <div className="cart-body">
            <div className="checkout-table">
                <h3 id="summary-title">Order Summary</h3>
                <h4>Subtotal:${this.state.subtotal}</h4>
                <h4>Shipping: ${this.state.shipping}</h4>
                <h4>Total:${this.state.amount}</h4>
                <StripeCheckout
                className="Stripe-Button"
                name="Override Films"
                description="Override Films Merchandise Shop"
                image={overridefilmslogo}
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={this.state.amount * 100}
                />
                 <span className="delete-cart" onClick={() => {this.deleteCart}}>Delete Cart</span>
                </div>
               

            <div className="cart-wrapper">
                    {cart}
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

export default connect (mapStateToProps, {addToShopCart}) (Cart);