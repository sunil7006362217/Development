import Home from '../component/Home'
import { connect } from 'react-redux'
import { addtocart } from '../service/actions/actions'

const mapStateToProps = state => ({
    cartData: state.cartItem


})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addtocart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)