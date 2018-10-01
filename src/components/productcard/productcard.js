import React from 'react'
import './productcard.css'

function ProductCard(props){
    


return(
    <div className="wrapper">
    <div className="product-card">
        <p>{props.name}</p>
        <img className="product_image" src={props.frontal_img} alt='products' />
        <p>{props.description}</p>
        <p>${props.price}</p>
        <p>Quantity: {props.quantity} </p>
        <button onClick={() => props.increaseQuantity(props.id, props.quantity)}>+</button>
        <button onClick={() => props.decreaseQuantity(props.id, props.quantity)}>-</button>
        <button onClick={() => props.addToCart(props.id, props.quantity)}>Add to Cart</button>
    </div>
    </div>
    )
}




export default ProductCard;