import { ADD_TO_CART } from '../constant'

export const ADD_TO_CART = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}