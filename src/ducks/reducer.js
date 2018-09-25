let initialState = {
    products: [],
    shopCart: [],
    amount: 0,
    productimgs: [],
    itemsInCart: 0,
    itemsGoingToCart: []
}

// Action Types
const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART"
const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART"


// Action Creators
export function addToShopCart(product) {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: product
    }
}

export function removeFromShopCart(productIndex) {
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: productIndex
    }
}


// Reducer Function
function reducer (state=initialState, action){
switch(action.type){
    case ADD_TO_SHOPPING_CART:
    let {itemsinCart, price, product_imgs, subtotal, amount} = action.payload
    return Object.assign({}, state, 
        {
        itemsinCart: itemsinCart,
        price: price,
        product_imgs: product_imgs,
        subtotal: subtotal,
        amount: amount
        })


    default: return state;
}
}


export default reducer