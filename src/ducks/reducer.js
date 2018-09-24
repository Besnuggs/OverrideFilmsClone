let initialState = {
    products: [],
    shopCart: []
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
    let {itemsinCart, price, product_imgs, subtotal, total} = action.payload
    return Object.assign({}, state, 
        {
        itemsinCart: itemsinCart,
        price: price,
        product_imgs: product_imgs,
        subtotal: subtotal,
        total: total
        })


    default: return state;
}
}


export default reducer