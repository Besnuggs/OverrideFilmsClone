let initialState = {
    itemsInCart: 0 
}

// Action Types
const ITEMS_IN_SHOPPING_CART = "ITEMS_IN_SHOPPING_CART"

const PRODUCTS_IN_SHOP= "PRODUCTS_IN_SHOP"

// Action Creators
export function addToShopCart(num) {
    console.log(num)
    return {
        type: ITEMS_IN_SHOPPING_CART,
        payload: num
    }
}


// Reducer Function
function reducer (state=initialState, action){
switch(action.type){
    case ITEMS_IN_SHOPPING_CART:
    return Object.assign({}, state, {itemsInCart: action.payload})
    case PRODUCTS_IN_SHOP:
    return Object.assign({}, state,
    {products: action.payload})

    default: return state;
}
}


export default reducer