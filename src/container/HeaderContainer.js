import Header from '../component/Header'
import { connect } from 'react-redux'
import { addtocart, removetocart } from '../service/actions/actions'

const mapStateToProps = state => ({
    cartData: state.cartItem


})
const mapDispatchToProps = dispatch => ({
    // removeToCartHandler: data => dispatch(removetocart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)