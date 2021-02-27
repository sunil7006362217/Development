import { ADD_TO_CART } from '../constant'
import { REMOVE_TO_CART } from '../constant'

export const addtocart = (data) => {
    console.log("action.js - addtocart - ", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}
export const removetocart = (data) => {
    console.log("action.js - removetocart - ");
    return {
        type: REMOVE_TO_CART,

    }
}