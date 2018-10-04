import React, {Component} from 'react'
import axios from 'axios';
import ProductCard from '../productcard/productcard'
import './shop.css'
import {connect} from 'react-redux'
import {addToShopCart} from '../../ducks/reducer'
// import {updateProducts} from '../../ducks/reducer'

class Shop extends Component {
    constructor(props){
        super(props)
            this.state = {
            products: [],
            itemsInCart: 0,
            Cart: []
            }
            this.displayAll = this.displayAll.bind(this)
            this.displayShirts = this.displayShirts.bind(this)
            this.displayMugs = this.displayMugs.bind(this)
            this.displayHats = this.displayHats.bind(this)
            this.displayBags = this.displayBags.bind(this)
            this.displayStickers = this.displayStickers.bind(this)
            this.addToCart = this.addToCart.bind(this)
    }


componentDidMount(){
axios.get('/api/products/').then((res) => {
    this.setState({
        products: res.data
    })
})
axios.put(`/api/products/quantity`).then()
}

addToCart(id){
let {addToShopCart} = this.props
console.log(id)
axios.post(`/api/cart/`, {id}).then((res) => {
    addToShopCart(res.data.length)
})
}

displayAll(){
axios.get('/api/products/').then((res)=> {
    this.setState({
        products: res.data
    })
})
}

displayShirts(){
axios.get(`/api/products/shirts`).then((res) => {
    this.setState({
        products:res.data
    })
})
}

displayMugs(){
    axios.get(`/api/products/mugs`).then((res) => {
        this.setState({
            products:res.data
        })
    })
}

displayHats(){
    axios.get(`/api/products/hats`).then((res) => {
        this.setState({
            products:res.data
        })
    })
}

displayBags(){
    axios.get(`/api/products/bags`).then((res) => {
        this.setState({
            products:res.data
        })
    })
}

displayStickers(){
    axios.get(`/api/products/stickers`).then((res) => {
        this.setState({
            products:res.data
        })
    })
}

render(props) {
let productInfo = this.state.products.map((Info,Index) => {
const {id, name, frontal_img, price, description, product_type, category_id, quantity} = Info
return(
<ProductCard 
id={id}
name={name}
frontal_img={frontal_img}
quantity={quantity}
price={price}
description={description}
product_type={product_type}
category_id={category_id}
addToCart={this.addToCart}
/>
)})

return (
     <div className="shop">
         <h1>Overridden Films Shop</h1>
         <button onClick={this.displayAll}>All</button>
         <button value="2" onClick={this.displayShirts}>Shirts</button>
         <button value="5" onClick={this.displayMugs}>Mugs</button>
         <button onClick={this.displayHats}>Hats</button>
         <button value="3" onClick={this.displayBags}>Bags</button>
         <button value="6" onClick={this.displayStickers}>Stickers</button>


         <div className="shop-wrapper">
         {productInfo}
         </div>


     </div>  
     );
    }
}


export default connect(null, {addToShopCart})(Shop);