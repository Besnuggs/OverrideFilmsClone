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
                price: 0,
                productimgs: [],
                amount: 0,
                cartItems: [],
                subtotal: 0,
                shipping: 5,
            }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.deleteCartData = this.deleteCartData.bind(this)
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
            this.setState({amount: (subT + this.state.shipping).toFixed(2)})
        }) 
    })
    }

    deleteProduct(cart_id){
    let {addToShopCart} = this.props
    axios.delete(`/api/cart/${cart_id}`).then((res) => {
        this.setState({
            cartItems: res.data
        })
        console.log(res.data.length)
        addToShopCart(res.data.length)
        this.componentDidMount()
    })
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment/', {token, amount: this.state.amount * 100}).then(res => {
            console.log(res)
            this.deleteCartData()
        })
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
    let {cartItems} = this.state
    let cart = cartItems.map((Info, Index) => {
        const {name, price, frontal_img, cart_id} = Info
        return(
            <section key={Index} className="basket">
            <p>Product: {name}</p>
            <p>Price: ${price}</p>
            <p>Quantity: </p>
            <img className="product_img" src={frontal_img} alt="product" />
            
            <button onClick={() => this.deleteProduct(cart_id)}>Delete Item</button>
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
                amount={this.state.amount * 100}
            />
                </div>            
            </div>
          );
    }
}

// function mapStateToProps(state){
// let {itemsInCart} = state
//     return{
//         itemsInCart
//     }
// }

export default connect (null, {addToShopCart}) (Cart);