import React from 'react'
import cart from '../assets/cart.jpg'

function Home(props) {
    console.log("Home", props.cartData)
    return (
        <div>

            <span className="cartItemCount">{props.cartData.length}</span>
            <div className="cartImageWrapper">
                <img src={cart} className="cartImage"></img>
            </div>

        </div>
    )
}
export default Home;