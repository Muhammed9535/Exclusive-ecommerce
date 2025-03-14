import './Cart.css'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem.jsx'
import { useContext } from 'react';
import { StoreContext } from '../../context/context.jsx';

function Cart() {

    const { cartItem, getToTalCartItemAmount, products } = useContext(StoreContext)

    const shippingFee = getToTalCartItemAmount() * 6 / 100

    return (
        <div className="cart-container container mt-5">
            <p>Home / <b> cart</b></p>
            <div className="cart-header mb-4 mt-5">
                <p><b>Product</b></p>
                <p><b>Price</b></p>
                <p><b>Quantity</b></p>
                <p><b>Subtotal</b></p>
            </div>

            {products.map((product, index) => {
                if (cartItem[product.id] > 0) {
                    return (
                        <div key={index} className="cart-item mb-4">
                            <CartItem product={product} quantity={cartItem[product.id]} />
                        </div>)
                }
            })}

            <Link to="/" className='return-home'>Return To Shop</Link>

            <div className="cart-lower d-flex justify-content-between mt-5 mb-5">
                <form className='coupon-code'>
                    <input type="text" placeholder='Coupon Code' className='py-2 pe-3  ps-1 me-4' />
                    <button type='submit' className='py-2 px-4 apply-coupon-btn'>Apply Coupon</button>
                </form>
                <div className="cart-total">
                    <h5>Cart Total</h5>
                    <div className="subtotal d-flex justify-content-between">
                        <p>subtotal</p>
                        <p>${getToTalCartItemAmount()}</p>
                    </div>
                    <div className="shipping d-flex justify-content-between">
                        <p>Shipping:</p>
                        <p>${shippingFee}</p>
                    </div>
                    <div className="total d-flex justify-content-between">
                        <p>Total</p>
                        <p>${shippingFee + getToTalCartItemAmount()}</p>
                    </div>
                    <Link className='proceed-to-checkout' to="checkout">Proceed to checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;