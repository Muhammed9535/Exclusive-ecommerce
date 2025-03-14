import { assets, } from '../../assets';
import './Checkout.css'
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/context';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Checkout() {

    const { cartItem, getToTalCartItemAmount, url, products, sessionId, loadCartData } = useContext(StoreContext);
    const shippingFee = getToTalCartItemAmount() * 6 / 100;

    const [paymethod, setpaymethod] = useState("bank")
    const [data, setData] = useState({
        fullName: "",
        companyName: "",
        address: "",
        apartment: "",
        town: "",
        phoneNumber: "",
        email: ""
    })


    const handleChange = (event) => {
        setpaymethod(event.target.value)
    }

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value


        setData(prev => ({
            ...prev, [name]: value
        }))

    }



    const navigate = useNavigate()

    const saveCheckout = async (event) => {
        event.preventDefault();

        let orderItem = [];
        products.map((item) => {
            if (cartItem[item.id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItem[item.id];
                orderItem.push(itemInfo)
            }
        })

        let orderData = {
            details: data,
            items: orderItem,
            amount: Math.round(shippingFee + getToTalCartItemAmount()),
            payment: paymethod
        }

        console.log(orderData)
        if (paymethod == 'bank') {
            const response = await axios.post(url + "/api/order/add", orderData, { withCredentials: true })

            if (response.data.success) {
                console.log(response.data.session_url)
                window.location.replace(response.data.session_url)
            }
        } else if (paymethod == 'cash') {
            console.log(url + "/api/order/add")
            const response = await axios.post(url + "/api/order/add", orderData, { withCredentials: true })

            if (response.data.success) {
                navigate('/myorders')
                loadCartData()
            } else {
                alert("error")
            }
        }

        if (!sessionId) {
            navigate("/")
        } else if (getToTalCartItemAmount() === 0) {
            navigate("/")
        }
    }




    return (
        <div className="checkout-container container">
            <div className="checkout-routes my-5">
                <p>Home / Cart / <b>Checkout</b></p>
            </div>
            <div className="checkout-content">
                <h4 className='mb-3'>Billing Details</h4>
                <form onSubmit={saveCheckout} className='d-flex justify-content-between checkout-form'>

                    <div className="checkout-left-col">

                        <div className="checkout-first-name">
                            <label htmlFor="firstName">FullName</label>
                            <input type="text" name='fullName' required onChange={onChangeHandler} value={data.fullName} />
                        </div>

                        <div className="checkout-company-name">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" name='companyName' required onChange={onChangeHandler} value={data.companyName} />
                        </div>

                        <div className="checkout-address">
                            <label htmlFor="address">Street Address</label>
                            <input type="text" name='address' required onChange={onChangeHandler} value={data.address} />
                        </div>

                        <div className="checkout-apartment">
                            <label htmlFor="apartment">Apartment, floor, etc (optional)</label>
                            <input type="text" name='apartment' required onChange={onChangeHandler} value={data.apartment} />
                        </div>


                        <div className="checkout-town">
                            <label htmlFor="town">Town/City</label>
                            <input type="text" name='town' required onChange={onChangeHandler} value={data.town} />
                        </div>

                        <div className="checkout-phone">
                            <label htmlFor="phoneNumber">phone number</label>
                            <input type="text" name='phoneNumber' required onChange={onChangeHandler} value={data.phoneNumber} />
                        </div>


                        <div className="checkout-email">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name='email' required onChange={onChangeHandler} value={data.email} />
                        </div>

                        <div className="checbox d-flex">
                            <input type="checkbox" required />
                            <p className='mb-0 ms-3'>save this information for faster checkout next time</p>
                        </div>
                    </div>

                    <div className="checkout-right-col">
                        {products.map((item, index) => {
                            if (cartItem[item.id] > 0) {

                                return (
                                    <div key={index} className='d-flex justify-content-between mb-3' >
                                        <div className='d-flex align-items-center'>
                                            <img src={url + "/images/" + item.prodimg} alt="" style={{ width: "40px" }} />
                                            <p className='mb-0 ms-3'><b> {item.prodname} </b></p>
                                        </div>
                                        <p className='mb-0'>{item.prodprice * cartItem[item.id]}</p>
                                    </div>
                                )
                            }
                        })}

                        <div className="checkout-total">
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

                            <div className="payment-options d-flex justify-content-between mt-3">
                                <div>
                                    <div className="bank-option d-flex">
                                        <input type="radio" onChange={handleChange} name='pay' value="bank" defaultChecked />
                                        <p className='mb-0 ms-3'>Bank</p>
                                    </div>
                                    <div className="cash-option d-flex mt-3">
                                        <input type="radio" name='pay' value="cash" onChange={handleChange} />
                                        <p className='mb-0 ms-3 '>cash on delivery</p>
                                    </div>
                                </div>

                                <img src={assets.payImg} alt="" className='bank-logo' />
                            </div>


                            {/* <div className='coupon-code my-5'>

                                <input type="text" placeholder='Coupon Code' className='py-2 pe-3  ps-1 me-4' />
                                <button type='submit' className='py-2 px-4'>Apply Coupon</button>
                            </div> */}
                        </div>
                        <button type='submit' className='py-2 px-4 place-order mt-4'>Place order</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Checkout;
