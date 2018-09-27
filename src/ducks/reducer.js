let initialState = {
    itemsInCart: 0,
}

// Action Types
const ITEMS_IN_SHOPPING_CART = "ITEMS_IN_SHOPPING_CART"
const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART"


// Action Creators
export function addToShopCart(num) {
    console.log(num)
    return {
        type: ITEMS_IN_SHOPPING_CART,
        payload: num
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
    case ITEMS_IN_SHOPPING_CART:
    return Object.assign({}, state, {itemsInCart: action.payload})


    default: return state;
}
}


export default reducer