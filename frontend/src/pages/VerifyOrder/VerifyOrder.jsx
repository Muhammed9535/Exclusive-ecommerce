import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/context";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './VerifyOrder.css'



function VerifyOrder() {

    const [searchParams, setSearchParams] = useSearchParams()
    const { url } = useContext(StoreContext)

    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const navigate = useNavigate()


    const verifyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", { success, orderId }, { withCredentials: true })

        if (response.data.success) {
            navigate("/myorders")
        } else {
            navigate("/")
        }
    }


    useEffect(() => {
        verifyPayment()
    }, [])

    return (
        <div className="verify">
            <div className="spinner">

            </div>
        </div>
    )


}


export default VerifyOrder