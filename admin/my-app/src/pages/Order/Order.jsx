import axios from "axios"
import { useEffect, useState } from "react"
import './Order.css'

function OrderItem({ url }) {

    const [orders, setOrders] = useState()


    const getOrderList = async () => {
        const response = await axios.get(url + "/api/order/all-orders", { withCredentials: true })
        if (response.data.success) {
            console.log(response.data.success)
            setOrders(response.data.message)
        }
    }


    const orderStatusUpdate = async (event, id) => {
        const response = await axios.post(url + "/api/order/order-status", {
            id,
            status: event.target.value
        })
        if (response.data.success) {
            getOrderList()
        } else {
            alert("Error updating status")
        }
    }

    useEffect(() => {
        getOrderList()
    }, [])

    console.log(orders)
    return (
        <>
            <div className="order-container">

                {(orders || []).map((order, index) => (
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
                            <p>payment status : {order.payment_status}</p>


                            <div className="order-details mt-2">
                                <p >{order.details.fullName}</p>
                                <p>{order.details.apartment} {order.details.address} {order.details.town}</p>
                                <p>{order.details.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="status">
                            <select name="" value={order.status} onChange={(event) => {
                                orderStatusUpdate(event, order.id)
                            }}>
                                <option value="order processing">ORDER PROCESSING</option>
                                <option value="order review">ORDER REVIEW</option>
                                <option value="delivered">DELIVERED</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default OrderItem