import { ADD_TO_CART } from '../constant'

const initialState = {
    cartData: []
}
export default function cartItem(state = [], action) {
    console.log('reducer - ', action)

    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cartData: action.data },

            ]

            break;

        default: return state
    }

}