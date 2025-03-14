import { assets } from "../../assets"
import Services from "../Services/Services"
import './NewArrival.css'

function NewArrival() {

    return (
        <div className="arrival mt-3 container" >
            <div className="contain">

                <img src={assets.banner3} className="img-one" alt="" />
                <div className="second-contain">
                    <img src={assets.banner4} alt="" className="img-two" />

                    <div className="third-contain">
                        <img src={assets.banner5} alt="" className="img-three" />
                        <img src={assets.banner6} alt="" className="img-four" />
                    </div>
                </div>
            </div>


            <Services />
        </div>
    )
}

export default NewArrival