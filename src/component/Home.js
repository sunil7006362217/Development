import React from 'react'
import cart from '../assets/cart.jpg'
import mobile from '../assets/mobile.jpg'
function Home(props) {
    console.log("Home", props.cartData)
    return (
        <div>
            <h1>Home</h1>
            <span className="cartItemCount">{props.cartData.length}</span>
            <div className="cartImageWrapper">
                <img src={cart} className="cartImage"></img>
            </div>
            <div className="productWrapper">
                <img src={mobile} className="productImage" /><br />
                <button className="cartButton" onClick={() => props.addToCartHandler({ name: 'samsung', price: 20000 })}>Add to Cart</button>
                <br />
                <br />

            </div>
        </div>
    )
}
export default Home;