import { useContext, useEffect, useState } from 'react'
import './CancelOrder.css'
import { StoreContext } from '../../context/context'




function CancelOrder() {

    const { cancelOrder, getAllCancelOrder } = useContext(StoreContext)

    console.log(cancelOrder)

    useEffect(() => {
        getAllCancelOrder()
    }, [])
    return (
        <div className="order-container container mt-5">
            {cancelOrder.map((c_order, index) => (
                <div className="cancel-order-sec mb-4" key={index}>
                    <p> <b>{c_order.items.map((item, index) => {
                        const parseItem = JSON.parse(item)
                        if (index === c_order.items.length - 1) {
                            return parseItem.prodname + " X" + parseItem.quantity
                        } else {
                            return parseItem.prodname + " X" + parseItem.quantity + ' , '
                        }
                    })}</b></p>

                    <p>payment method: {c_order.payment}</p>
                    <p>amount: ${c_order.amount}</p>
                </div>
            ))}
        </div>

    )
}
export default CancelOrder