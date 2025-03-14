import Hero from "../../components/Hero/Hero"
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay"
import Category from "../../components/Category/Category"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import { assets } from "../../assets"
import NewArrival from "../../components/NewArrival/NewArrival"

function Home() {



    return (
        <>
            <div className="container-fluid ">
                <Hero />
                <ProductDisplay text="Today's" category="flash sale" />
                <hr />
                <Category />
                <ProductDisplay text="This month" category="best selling" />
                <div className="container">
                    <img src={assets.banner2} alt="" style={{ width: "100%" }} />
                </div>
                <ProductDisplay text="Our Products" category="Explore product" />
                <SectionHeader text="Featured" category="New Arrival" />
                <NewArrival />

            </div>
        </>
    )
}

export default Home