import { useContext, useEffect, useState } from 'react'
import './MyOrder.css'
import { StoreContext } from '../../context/context'
import axios from 'axios'
import { toast } from 'react-toastify'


function MyOrder() {

    const { url, userOrder, setUserOrder } = useContext(StoreContext)

    const getUserOrder = async () => {
        const response = await axios.get(url + "/api/order/user-order", { withCredentials: true })
        if (response.data.success) {
            setUserOrder(response.data.message)

        }
    }



    const orderCancel = async (itemId) => {
        const response = await axios.post(url + "/api/order/cancel-order", { id: itemId }, { withCredentials: true })

        console.log("wont run lmfks ndk");

        if (response.data.success) {
            toast(response.data.message)
            getUserOrder()
        } else {
            toast(response.data.message)
        }
    }


    useEffect(() => {
        getUserOrder();
    }, [])

    return (
        <div className="order-container container mt-5">
            {(userOrder || []).map((order, index) => (
                <div key={index} className="order mb-3">
                    <div className="order-info">
                        <p className="me-5 order-name">{order.items.map((item, index) => {
                            const parseItem = JSON.parse(item)
                            if (index === order.items.length - 1) {
                                return parseItem.prodname + " X" + parseItem.quantity
                            } else {
                                return parseItem.prodname + " X" + parseItem.quantity + ' , '
                            }
                        })}</p>


                        <p className="mt-3">total amount : {order.amount}</p>
                        <p>payment method : {order.payment}</p>
                        <p>items : {order.items.length}</p>
                        <p>payment status: {order.payment_status}</p>
                    </div>

                    <div className="order-details mt-2">
                        <p >{order.details.fullName}</p>
                        <p>{order.details.apartment} {order.details.address} {order.details.town}</p>
                        <p>{order.details.phoneNumber}</p>
                    </div>
                    <div className="status">
                        <p><b>order status: </b>{order.status}</p>
                    </div>

                    <div className="cancel-order-btn">
                        <button onClick={() => {
                            orderCancel(order.id)
                        }}>Cancel Order</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyOrder