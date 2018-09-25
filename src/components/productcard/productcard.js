import React from 'react'
import './productcard.css'
import {connect} from 'react-redux'
import addToShopCart from '../../ducks/reducer'

function ProductCard(props){
    console.log(props)
return(
    <div className="product-card-box">
    <div className="product-card">
        <p>{props.name}</p>
        <img className="product_image" src={props.back_img} alt='products' />
        <p>{props.description}</p>
        <p>${props.price}</p>
        <button value={props.id} onClick={() => props.addToCart(props.id)}>Add to Cart</button>
    </div>
    </div>
    )
}

function mapStateToProps(state){
return{



}
}



export default connect (mapStateToProps, {addToShopCart}) (ProductCard);