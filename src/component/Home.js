import React from 'react'
import cart from '../assets/cart.jpg'
import mobile from '../assets/mobile.jpg'
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div className="cartImageWrapper">
                <img src={cart} className="cartImage"></img>
            </div>
            <div className="productWrapper">
                <img src={mobile} className="productImage" /><br />
                <button className="cartButton">Add to Cart</button>
                <br />
                <br />

            </div>
        </div>
    )
}
export default Home;