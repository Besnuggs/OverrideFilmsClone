import React, {Component} from 'react'
import axios from 'axios';
import ProductCard from '../productcard/productcard'
import './shop.css'
import {connect} from 'react-redux'
import {addToShopCart} from '../../ducks/reducer'


class Shop extends Component {
    constructor(props){
        super(props)
            this.state = {
            products: [],
            itemsInCart: 0,
            itemsGoingToCart: []
            }
            this.displayAll = this.displayAll.bind(this)
            this.displayShirts = this.displayShirts.bind(this)
            this.displayMugs = this.displayMugs.bind(this)
            this.displayHats = this.displayHats.bind(this)
            this.displayBags = this.displayBags.bind(this)
            this.displayStickers = this.displayStickers.bind(this)
    }

componentDidMount(){
axios.get('/api/products/').then((res) => {
    this.setState({
        products: res.data
    })
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

}

displayMugs(){

}

displayHats(){

}

displayBags(){

}

displayStickers(){

}

render(props) {
console.log(this.state)
let productInfo = this.state.products.map((Info,Index) => {
const {id, name, frontal_img, back_img, price, description, product_type, category_id} = Info
return(
<ProductCard
id={id}
name={name}
frontal_img={frontal_img}
back_img={back_img}
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
         <button onClick={this.displayShirts}>Shirts</button>
         <button onClick={this.displayMugs}>Mugs</button>
         <button onClick={this.displayHats}>Hats</button>
         <button onClick={this.displayBags}>Bags</button>
         <button onClick={this.displayStickers}>Stickers</button>
         {productInfo}
     </div>  
     );
    }
}

function mapStateToProps(state){
return{
    
}
}

export default connect (mapStateToProps, addToShopCart) (Shop);