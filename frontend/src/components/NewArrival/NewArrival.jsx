import { assets } from "../../assets"
import './NewArrival.css'

function NewArrival() {

    return (
        <div className="arrival">
            <div className="contain">

                <img src={assets.banner3} className="img-one" alt="" />
                <img src={assets.banner4} alt="" className="img-two" />
                <img src={assets.banner5} alt="" className="img-three" />
                <img src={assets.banner6} alt="" className="img-four" />
            </div>
            <div className="services d-flex justify-content-between">
                <div className="first-service">
                    <img src={assets.services} alt="" />
                    <h3>FREE AND FAST DELIVERY</h3>
                    <p>free delivery for all order over $140</p>
                </div>
                <div className="second-service">
                    <img src={assets.services1} alt="" />
                    <h3>24/7 CUSTOMER SERVICE</h3>
                    <p>friendly 24/7 customer service</p>
                </div>
                <div className="third-service">
                    <img src={assets.services2} alt="" />
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>we return money within 30days</p>
                </div>
            </div>
        </div>
    )
}

export default NewArrival