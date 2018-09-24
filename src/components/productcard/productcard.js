import React from 'react'
import './productcard.css'

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

export default ProductCard;