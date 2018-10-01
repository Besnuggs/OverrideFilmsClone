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
        <button>Add to Cart</button>
    </div>
    </div>
    )
}




export default ProductCard;