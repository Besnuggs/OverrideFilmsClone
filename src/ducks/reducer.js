let initialState = {
    itemsInCart: 0
}

// Action Types
const ITEMS_IN_SHOPPING_CART = "ITEMS_IN_SHOPPING_CART"

const UPDATE_SUBTOTAL = "UPDATE_SUBTOTAL"

const UPDATE_AMOUNT = "UPDATE_AMOUNT"

// Action Creators
export function addToShopCart(num) {
    console.log(num)
    return {
        type: ITEMS_IN_SHOPPING_CART,
        payload: num
    }
}

export function updateSubtotal(num){
    return {
        type: UPDATE_SUBTOTAL,
        payload: num
    }
}

export function updateAmount(num){
        return{
            type: UPDATE_AMOUNT,
            payload: num
        }
}

// Reducer Function
function reducer (state=initialState, action){
switch(action.type){
    case ITEMS_IN_SHOPPING_CART:
    return Object.assign({}, state, {itemsInCart: action.payload})
    case UPDATE_SUBTOTAL:
    return Object.assign({}, state, {subtotal: action.payload})
    case UPDATE_AMOUNT:
    return Object.assign({}, state, {amount: action.payload})

    default: return state;
}
}


export default reducer